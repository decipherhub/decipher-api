import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateMemberInput {
  @MinLength(1)
  @Field()
  name: string;

  @MinLength(1)
  @Field()
  info: string;

  @MinLength(1)
  @Field()
  imageUrl: string;
}
