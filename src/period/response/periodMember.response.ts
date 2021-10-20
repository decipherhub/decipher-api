import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PeriodRoleType } from 'member/enum/periodRoleType.enum';
import { MemberResponse } from 'member/response/member.response';
import { PeriodResponse } from './period.response';

@ObjectType('PeriodMemberResponse')
export class PeriodMemberResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => PeriodRoleType)
  role: PeriodRoleType;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => PeriodResponse)
  period: PeriodResponse;
}
