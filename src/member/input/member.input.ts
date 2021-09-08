import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class MemberCreateInput {
  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;

  @Field((_type) => String, { nullable: true })
  personalPage: Prisma.PersonalPageCreateNestedManyWithoutOwnerInput;

  @Field((_type) => String, { nullable: true })
  periods: Prisma.PeriodMemberCreateNestedManyWithoutMemberInput;
}

@InputType()
export class MemberFindInput {
  @Field((_type) => String)
  where: Prisma.MemberWhereUniqueInput;
}

@InputType()
export class MemberFindManyInput {
  @Field((_type) => String)
  where: Prisma.MemberWhereInput;

  @Field((_type) => String, { nullable: true })
  orderBy: Prisma.MemberOrderByInput;
}

@InputType()
export class MemberUpdateManyInput {
  @Field((_type) => String)
  where: Prisma.MemberWhereInput;

  @Field((_type) => String)
  data: Prisma.MemberUpdateInput;
}

@InputType()
export class MemberDeleteInput {
  @Field((_type) => String)
  where: Prisma.MemberWhereUniqueInput;
}
