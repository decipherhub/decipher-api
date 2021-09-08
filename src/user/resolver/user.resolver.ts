import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { UserService } from 'user/service/user.service';
import { User } from '@prisma/client';
import { UserResponse } from 'user/response/user.response';
import { UserSigninInput } from '../input/user.input';
import {
  UserSignupInput,
  UserFindInput,
  UsersFindInput,
} from 'user/input/user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => UserResponse)
  async signupUser(
    @Args('data') data: UserSignupInput,
    @Context() ctx,
  ): Promise<User> {
    return this.userService.signup({
      email: data.email,
      name: data.name,
      password: data.password,
    });
  }

  @Query((returns) => UserResponse)
  async signinUser(
    @Args('data') data: UserSigninInput,
    @Context() ctx,
  ): Promise<User> {
    return this.userService.signin({
      email: data.email,
      password: data.password,
    });
  }

  @Query((returns) => [UserResponse], { nullable: true })
  async findUsers(@Args('data') data: UsersFindInput) {
    return this.userService.users(data);
  }

  @Query((returns) => UserResponse, { nullable: true })
  async findUser(@Args('data') data: UserFindInput) {
    return this.userService.user(data);
  }
}
