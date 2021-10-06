import { Field, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';
import { MediumResponse } from './medium.response';

@ObjectType('MediumMember')
export class MediumMemberResponse {
  @Field((_type) => MemberResponse, { nullable: true })
  member: MemberResponse;

  @Field((_type) => MediumResponse, { nullable: true })
  medium: MediumResponse;
}
