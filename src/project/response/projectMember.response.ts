import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MemberResponse } from 'member/response/member.response';
import { ProjectRoleType } from 'project/enum/projectRoleType.enum';
import { ProjectResponse } from './project.response';

@ObjectType('ProjectMember')
export class ProjectMemberResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => MemberResponse)
  member: MemberResponse;

  @Field((_type) => ProjectResponse)
  project: ProjectResponse;

  @Field()
  role: ProjectRoleType;
}
