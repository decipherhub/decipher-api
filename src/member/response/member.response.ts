import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PeriodMemberResponse } from './periodMember.response';
import { contactResponse } from './contact.response';

@ObjectType('Member')
export class MemberResponse {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;

  @Field((_type) => [contactResponse])
  contact: contactResponse[];

  @Field((_type) => [PeriodMemberResponse])
  periods: PeriodMemberResponse[];
}
