import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from './member.response';

@ObjectType('Period')
export class PeriodResponse {
  @Field((_type) => ID)
  id: string;

  @Field()
  generation: number;

  @Field((_type) => [MemberResponse])
  members: MemberResponse[];
}
