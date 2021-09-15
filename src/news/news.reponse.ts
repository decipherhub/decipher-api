import 'reflect-metadata';
import { MemberResponse } from '../member/member.response';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('NewsResponse')
export class NewsResponse {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => MemberResponse)
  member: MemberResponse;

  @Field((type) => Date)
  datetime: Date;

  @Field()
  summary: string;

  @Field()
  link: string;

  @Field()
  image_url: string;

  @Field()
  is_disclosed: boolean;
}