import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateDeferenceImageInput, UpdateDeferenceImageInput } from './deferenceImage.input';

@InputType()
export class CreateDeferenceInput {
  @Field((type) => Int)
  year: number;

  @Field((type) => [CreateDeferenceImageInput], { nullable: true })
  deferenceImage: CreateDeferenceImageInput[];
}

@InputType()
export class UpdateDeferenceInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;

  @Field((type) => UpdateDeferenceImageInput, { nullable: true })
  deferenceImage: UpdateDeferenceImageInput;
}
