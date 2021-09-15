import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';
import { RoleType } from '../../member/enum/roleType.enum';
import { PeriodResponse } from './period.response';

@ObjectType('PeriodMember')
export class PeriodMemberResponse {
  @Field((_type) => Int)
  id: number;

  @Field()
  role: RoleType;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => PeriodResponse)
  period: PeriodResponse;
}