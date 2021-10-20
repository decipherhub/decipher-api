import { Field, InputType, Int } from '@nestjs/graphql';
import { RoleType } from 'member/enum/roleType.enum';

@InputType()
export class PeriodMemberInput {
  @Field((_type) => RoleType)
  role: RoleType;

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
