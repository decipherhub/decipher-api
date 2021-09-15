import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PeriodCreateInput {
  @Field((_type) => Int)
  generation: number;
}

@InputType()
export class PeriodConnectInput {
  @Field((_type) => Int)
  id: number;
}
