import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferenceImageInput {
  @Field()
  type: string;

  @Field()
  image_url: string;
}

@InputType()
export class ConnectDeferenceImageInput {
  @Field((type) => Int)
  id: number;
}

@InputType()
export class CreateOrConnectDeferenceImageInput {
  @Field((type) => [CreateDeferenceImageInput], { nullable: true })
  create: CreateDeferenceImageInput[];

  @Field((type) => [ConnectDeferenceImageInput], { nullable: true})
  connect: ConnectDeferenceImageInput[];
}
