import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('MemberResponse')
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