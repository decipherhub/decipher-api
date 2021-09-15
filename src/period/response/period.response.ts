import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Period')
export class PeriodResponse {
  @Field((_type) => Int)
  id: number;

  @Field()
  generation: number;

  @Field((_type) => [Int])
  memberId: number;
}
