import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PeriodMemberResponse } from './periodMember.response';
import { ContactResponse } from './contact.response';

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

  @Field((_type) => [ContactResponse])
  contacts: ContactResponse[];

  @Field((_type) => [PeriodMemberResponse])
  periods: PeriodMemberResponse[];
}
