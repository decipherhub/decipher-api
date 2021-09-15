import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactCreateOrConnectInput } from './contact.input';

@InputType()
export class MemberCreateInput {
  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;

  @Field((_type) => ContactCreateOrConnectInput, {
    nullable: true,
  })
  contacts: ContactCreateOrConnectInput;
}

@InputType()
export class MemberFindByIdInput {
  @Field((_type) => Int)
  id: number;
}

@InputType()
export class MemberFindManyInput {
  @Field((_type) => String, { nullable: true })
  orderBy: Prisma.MemberOrderByInput;
}

@InputType()
export class MemberUpdateData {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  info: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field((_type) => ContactCreateOrConnectInput, {
    nullable: true,
  })
  contacts: ContactCreateOrConnectInput;
}

@InputType()
export class MemberUpdateInput {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => MemberUpdateData)
  data: MemberUpdateData;
}

@InputType()
export class MemberDeleteInput {
  @Field((_type) => Int)
  id: number;
}
