import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateNewsInput {
  @Field()
  title: string;

  @Field((type) => Int)
  memberId: number;

  @Field()
  summary: string;

  @Field()
  link: string;

  @Field()
  imageUrl: string;

  @Field()
  isDisclosed: boolean;
}


@InputType()
export class FindManyNewsInput {
  @Field((_type) => Int, { nullable: true })
  offset: number;

  @Field((_type) => Int, { nullable: true })
  page: number;
}


@InputType()
export class UpdateNewsInput {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  memberId: number;

  @Field()
  summary: string;

  @Field()
  link: string;

  @Field()
  imageUrl: string;

  @Field()
  isDisclosed: boolean;
}
