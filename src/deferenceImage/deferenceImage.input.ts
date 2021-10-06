import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferenceImageInput {
  @Field()
  type: string;

  @Field()
  image_url: string;

  @Field((type) => Int)
  deferenceId: number;
}

@InputType()
export class UpdateDeferenceImageInput {
  @Field((type) => Int)
  id: number;

  @Field()
  type: string;

  @Field()
  image_url: string;

  @Field((type) => Int)
  deferenceId: number;
}
