import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediumMemberResponse } from './mediumMember.response';
import { MediumTagResponse } from './mediumTag.response';

@ObjectType('Medium')
export class MediumResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => String)
  title: string;

  @Field((_type) => String)
  url: string;

  @Field((_type) => String)
  imageUrl: string;

  @Field((_type) => String)
  summary: string;

  @Field((_type) => [MediumMemberResponse])
  authors: MediumMemberResponse[];

  @Field((_type) => [MediumTagResponse])
  tags: MediumTagResponse[];
}
