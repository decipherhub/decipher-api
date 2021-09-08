import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class PeriodCreateInput {
  @Field()
  generation: number;

  @Field((_type) => String, { nullable: true })
  members: Prisma.PeriodMemberCreateNestedManyWithoutPeriodInput;
}

@InputType()
export class PeriodFindInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;
}

@InputType()
export class PeriodFindManyInput {
  @Field((_type) => String, { nullable: true })
  where: Prisma.PeriodWhereInput;

  @Field((_type) => String, { nullable: true })
  orderBy: Prisma.PeriodOrderByInput;
}

@InputType()
export class PeriodUpdateManyInput {
  @Field((_type) => String)
  where: Prisma.PeriodWhereInput;

  @Field((_type) => String)
  data: Prisma.PeriodUpdateInput;
}

@InputType()
export class PeriodDeleteInput {
  @Field((_type) => String)
  where: Prisma.PeriodWhereUniqueInput;
}
