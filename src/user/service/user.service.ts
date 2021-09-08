import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-errors';
import {
  UserSigninInput,
  UsersFindInput,
  UserFindInput,
  UserSignupInput,
} from 'user/input/user.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async user(data: UserFindInput): Promise<User | null> {
    const { id } = data;
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async users(params?: UsersFindInput): Promise<User[]> {
    return this.prisma.user.findMany({
      ...params,
    });
  }

  async signup(signupInput: UserSignupInput): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(signupInput.password, salt);
    return this.prisma.user.create({
      data: {
        ...signupInput,
        password: hashedPassword,
        salt: salt,
      },
    });
  }

  async signin(signinInput: UserSigninInput): Promise<UserWithToken> {
    const user = await this.validateUser(signinInput);
    const payload = { username: user.name, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      ...user,
      token,
    };
  }

  private async validateUser(data: UserSigninInput): Promise<User> {
    const { email, password } = data;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (
      user &&
      (await this.validatePassword(password, user.password, user.salt))
    ) {
      return user;
    } else {
      throw new ApolloError('Invalid email or password', '403');
    }
  }

  private async validatePassword(
    password: string,
    hashedPassword: string,
    salt: string,
  ): Promise<boolean> {
    const hash = await bcrypt.hash(password, salt);
    return hash === hashedPassword;
  }
}

type UserWithToken = User & { token: string };
