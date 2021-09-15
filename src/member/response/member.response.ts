import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PeriodMemberResponse } from 'period/response/periodMember.response';
import { ContactResponse } from './contact.response';

@ObjectType('Member')
export class MemberResponse {
  @Field((_type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  info: string;

  @Field()
  imageUrl: string;

  @Field((_type) => [ContactResponse], { nullable: true })
  contacts: ContactResponse[];

  @Field((_type) => [PeriodMemberResponse], { nullable: true })
  periods: PeriodMemberResponse[];
}
