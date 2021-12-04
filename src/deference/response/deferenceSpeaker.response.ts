import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DeferenceSpeakerResponse')
export class DeferenceSpeakerResponse {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  info: string;
}
