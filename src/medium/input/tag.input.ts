import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagCreateInput {
  @Field((_type) => String)
  name: string;
}
