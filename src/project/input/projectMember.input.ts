import { ProjectRoleType } from '.prisma/client';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProjectMemberInput {
  @Field((_type) => ProjectRoleType)
  role: ProjectRoleType;

  @Field((_type) => Int)
  memberId: number;
}
