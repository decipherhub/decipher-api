import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UserCreateInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}

// TODO: nested params 설정
@InputType()
export class UsersFindInput {
  @Field((type) => String, { nullable: true })
  orderBy: Prisma.UserOrderByInput;
}

@InputType()
export class UserFindInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  name: string;
}
