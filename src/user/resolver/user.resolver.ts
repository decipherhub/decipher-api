import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from 'user/service/user.service';
import { User } from '@prisma/client';
import { UserResponse } from 'user/response/user.response';
import { UserCreateInput } from 'user/input/user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => UserResponse)
  async signupUser(
    @Args('data') data: UserCreateInput,
    @Context() ctx,
  ): Promise<User> {
    return this.userService.createUser({
      email: data.email,
      name: data.name,
      password: data.password,
    });
  }
}
