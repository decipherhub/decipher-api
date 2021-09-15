import { Field, InputType, Int } from '@nestjs/graphql';
import { RoleType } from 'member/enum/roleType.enum';

@InputType()
export class PeriodMemberCreateOrUpdateInput {
  @Field((_type) => String)
  role: RoleType;

  @Field((_type) => Int)
  memberId: number;

  @Field((_type) => Int)
  periodId: number;
}

@InputType()
export class PeriodMemberUniqueInput {
  @Field((_type) => Int)
  memberId: number;

  @Field((_type) => Int)
  periodId: number;
}
