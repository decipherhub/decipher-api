import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateOrConnectDeferenceImageInput } from './deferenceImage.input';

@InputType()
export class CreateDeferenceInput {
  @Field((type) => Int)
  year: number;

  @Field((type) => CreateOrConnectDeferenceImageInput, { nullable: true })
  deferenceImages: CreateOrConnectDeferenceImageInput;
}

@InputType()
export class UpdateDeferenceData {
  @Field((type) => Int)
  year: number;

  @Field((type) => CreateOrConnectDeferenceImageInput, { nullable: true })
  deferenceImages: CreateOrConnectDeferenceImageInput;
}

@InputType()
export class UpdateDeferenceInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => UpdateDeferenceData)
  data: UpdateDeferenceData;
}
