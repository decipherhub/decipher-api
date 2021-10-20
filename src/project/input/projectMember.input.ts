import { Field, InputType, Int } from '@nestjs/graphql';
import { ProjectRoleType } from 'project/enum/projectRoleType.enum';

@InputType()
export class ProjectMemberInput {
  @Field((_type) => ProjectRoleType)
  role: ProjectRoleType;

  @Field((_type) => Int)
  memberId: number;
}
