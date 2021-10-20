import { Field, InputType, Int } from '@nestjs/graphql';
import { PeriodRoleType } from 'member/enum/periodRoleType.enum';

@InputType()
export class PeriodMemberInput {
  @Field((_type) => PeriodRoleType)
  role: PeriodRoleType;

  @Field((_type) => Int, { nullable: true })
  memberId: number;

  @Field((_type) => Int, { nullable: true })
  periodId: number;
}

@InputType()
export class PeriodMemberUniqueInput {
  @Field((_type) => Int)
  memberId: number;

  @Field((_type) => Int)
  periodId: number;
}
