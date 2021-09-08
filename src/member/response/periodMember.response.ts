import { Field, ID, ObjectType } from '@nestjs/graphql';
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

enum RoleType {
  PRESIDENT = 'PRESIDENT',
  VICE_PRESIDENT = 'VICE_PRESIDENT',
  MEDIA_LEAD = 'MEDIA_LEAD',
  MANAGER = 'MANAGER',
  MEMBER = 'MEMBER',
  MENTOR = 'MENTOR',
}
