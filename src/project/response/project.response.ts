import { ProjectUrlType } from '.prisma/client';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PeriodResponse } from 'period/response/period.response';
import { ProjectMemberResponse } from './projectMember.response';

@ObjectType('ProjectResponse')
export class ProjectResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => PeriodResponse)
  period: PeriodResponse;

  @Field((_type) => String)
  name: string;

  @Field((_type) => [ProjectUrlResponse])
  url: ProjectUrlResponse[];

  @Field((_type) => String)
  summary: string;

  @Field((_type) => String)
  imageUrl: string;

  @Field((_type) => [ProjectMemberResponse])
  members: ProjectMemberResponse[];
}

@ObjectType('ProjectUrl')
class ProjectUrlResponse {
  @Field((_type) => String)
  type: ProjectUrlType;

  @Field((_type) => String)
  url: string;
}
