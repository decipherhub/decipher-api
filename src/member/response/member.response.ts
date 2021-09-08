import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PeriodMemberResponse } from './periodMember.response';
import { PersonalPageResponse } from './personalPage.response';

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

  @Field((_type) => [PersonalPageResponse])
  personalPage: PersonalPageResponse[];

  @Field((_type) => [PeriodMemberResponse])
  periods: PeriodMemberResponse[];
}
