import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PeriodMemberInput } from 'period/input/periodMember.input';
import { ContactInput } from './contact.input';

@InputType()
export class MemberInput {
  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;

  @Field((_type) => [ContactInput])
  contacts: ContactInput[];

  @Field((_type) => [PeriodMemberInput])
  periods: PeriodMemberInput[];
}

@InputType()
export class MemberUniqueInput {
  @Field((_type) => Int)
  id: number;
}

@InputType()
export class MemberFindManyInput {
  @Field((_type) => String, { nullable: true })
  orderBy: Prisma.MemberOrderByInput;

  @Field((_type) => Int, { nullable: true })
  periodId: number;
}

@InputType()
export class MemberUpdateInput {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => MemberInput)
  data: MemberInput;
}
