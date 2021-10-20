import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RoleType } from 'member/enum/roleType.enum';
import { MemberResponse } from 'member/response/member.response';
import { PeriodResponse } from './period.response';

@ObjectType('PeriodMemberResponse')
export class PeriodMemberResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => String)
  role: RoleType;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => PeriodResponse)
  period: PeriodResponse;
}
