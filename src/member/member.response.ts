import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Member')
export class MemberResponse {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;
}