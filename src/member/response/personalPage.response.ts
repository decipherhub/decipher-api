import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from './member.response';

@ObjectType('PersonalPage')
export class PersonalPageResponse {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => MemberResponse)
  owner: MemberResponse;

  @Field()
  type: PageType;

  @Field()
  url: string;
}

enum PageType {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  MEDIUM = 'MEDIUM',
}
