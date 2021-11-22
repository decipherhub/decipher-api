import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferenceSpeakerInput {
  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  info: string;
}

@InputType()
export class UpdateDeferenceSpeakerInput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  info: string;
}