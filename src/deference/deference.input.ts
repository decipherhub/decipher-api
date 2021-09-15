import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferenceInput {
  @Field((type) => Int)
  year: number;
}

@InputType()
export class UpdateDeferenceInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;
}
