import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RoleType } from '../enum/roleType.enum';
import { MemberResponse } from './member.response';
import { PeriodResponse } from './period.response';

@ObjectType('PeriodMember')
export class PeriodMemberResponse {
  @Field((_type) => ID)
  id: string;

  @Field()
  role: RoleType;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => PeriodResponse)
  period: PeriodResponse;
}
