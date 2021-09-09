import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ContactType } from '../enum/contactType.enum';
import { MemberResponse } from './member.response';

@ObjectType('contact')
export class ContactResponse {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => MemberResponse)
  owner: MemberResponse;

  @Field()
  type: ContactType;

  @Field()
  url: string;
}
