import { Field, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';
import { MediumResponse } from './medium.response';

@ObjectType('MediumMemberResponse')
export class MediumMemberResponse {
  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => MediumResponse)
  medium: MediumResponse;
}
