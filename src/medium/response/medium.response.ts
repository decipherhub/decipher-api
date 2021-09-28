import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';
import { TagResponse } from './tag.response';

@ObjectType('Medium')
export class MediumResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => String)
  title: string;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => String)
  url: string;

  @Field((_type) => String)
  imageUrl: string;

  @Field((_type) => String)
  summary: string;

  @Field((_type) => [TagResponse])
  tags: TagResponse[];
}
