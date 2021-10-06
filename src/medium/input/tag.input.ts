import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TagCreateInput {
  @Field((_type) => String)
  name: string;
}

@InputType()
export class TagUniqueInput {
  @Field((_type) => Int)
  id: number;
}
