import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectUrlType } from 'project/enum/projectUrlType.enum';
import { ProjectMemberInput } from './projectMember.input';

@InputType()
export class ProjectInput {
  @Field((_type) => String)
  name: string;

  @Field((_type) => Int)
  periodId: number;

  @Field((_type) => [ProjectUrlInput])
  url: ProjectUrlInput[];

  @Field((_type) => String)
  summary: string;

  @Field((_type) => String)
  imageUrl: string;

  @Field((_type) => [ProjectMemberInput])
  members: ProjectMemberInput[];
}

@InputType()
class ProjectUrlInput {
  @Field((_type) => ProjectUrlType)
  type: ProjectUrlType;

  @Field((_type) => String)
  url: string;
}

@InputType()
export class ProjectFindManyInput {
  @Field((_type) => String, { nullable: true })
  orderBy: Prisma.ProjectOrderByInput;
}

@InputType()
export class ProjectUpdateInput {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => ProjectInput, { nullable: true })
  data: ProjectInput;
}

@InputType()
export class ProjectUniqueInput {
  @Field((_type) => Int)
  id: number;
}
