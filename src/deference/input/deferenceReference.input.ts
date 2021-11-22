import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferenceReferenceInput {
  @Field()
  type: string;

  @Field()
  link: string;
}

@InputType()
export class UpdateDeferenceReferenceInput {
  @Field((type) => Int)
  id: number;

  @Field()
  type: string;

  @Field()
  link: string;
}