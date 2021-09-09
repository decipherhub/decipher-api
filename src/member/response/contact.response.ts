import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from './member.response';

@ObjectType('contact')
export class contactResponse {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => MemberResponse)
  owner: MemberResponse;

  @Field()
  type: ContactType;

  @Field()
  url: string;
}

enum ContactType {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  MEDIUM = 'MEDIUM',
  EMAIL = 'EMAIL',
}
