import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Member')
export class Member {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;
}