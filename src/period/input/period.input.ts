import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PeriodInput {
  @Field((_type) => Int)
  generation: number;
}

@InputType()
export class PeriodFindInput {
  @Field((_type) => Int, { nullable: true })
  id: number;
}
