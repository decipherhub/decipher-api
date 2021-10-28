import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProjectResponse } from 'project/response/project.response';
import { PeriodMemberResponse } from './periodMember.response';

@ObjectType('PeriodResponse')
export class PeriodResponse {
  @Field((_type) => Int, { nullable: true })
  id: number;

  @Field((_type) => Int, { nullable: true })
  generation: number;

  @Field((_type) => [PeriodMemberResponse], { nullable: true })
  members: PeriodMemberResponse;

  @Field((_type) => [ProjectResponse], { nullable: true })
  projects: ProjectResponse;
}
