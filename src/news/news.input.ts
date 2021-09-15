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
  image_url: string;

  @Field()
  is_disclosed: boolean;
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
  image_url: string;

  @Field()
  is_disclosed: boolean;
}