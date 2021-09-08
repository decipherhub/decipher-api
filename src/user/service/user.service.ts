import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-errors';
import { UserSigninInput } from '../input/user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params?: UserQueryParams): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async signup(signupInput: Prisma.UserCreateInput): Promise<User> {
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

  async signin(signinInput: UserSigninInput): Promise<User> {
    const user = this.validateUser(signinInput);

    return user;
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
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
      throw new ApolloError('Invalid username or password', '403');
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

export type UserQueryParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByInput;
};
