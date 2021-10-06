import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MediumInput {
  @Field((_type) => String)
  title: string;

  @Field((_type) => String)
  url: string;

  @Field((_type) => String)
  imageUrl: string;

  @Field((_type) => String)
  summary: string;

  @Field((_type) => [Int])
  memberIds: number[];

  @Field((_type) => [Int])
  tagIds: number[];
}

@InputType()
export class MediumUniqueInput {
  @Field((_type) => Int)
  id: number;
}

@InputType()
export class MediumUpdateInput {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => MediumInput)
  data: MediumInput;
}

@InputType()
export class MediumFindManyInput {
  @Field((_type) => Int, { nullable: true })
  tagId: number;

  @Field((_type) => Int, { nullable: true })
  offset: number;

  @Field((_type) => Int, { nullable: true })
  page: number;
}
