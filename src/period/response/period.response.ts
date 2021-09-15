import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';

@ObjectType('Period')
export class PeriodResponse {
  @Field((_type) => Int)
  id: number;

  @Field()
  generation: number;

  @Field((_type) => [MemberResponse])
  memberId: number;
}
