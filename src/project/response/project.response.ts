import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PeriodResponse } from 'period/response/period.response';
import { ProjectUrlType } from 'project/enum/projectUrlType.enum';
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

@ObjectType('ProjectUrlResponse')
class ProjectUrlResponse {
  @Field((_type) => ProjectUrlType)
  type: ProjectUrlType;

  @Field((_type) => String)
  url: string;
}
