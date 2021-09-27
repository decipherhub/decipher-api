import { ProjectUrlType } from '.prisma/client';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectMemberInput } from './projectMember.input';

@InputType()
export class ProjectCreateInput {
  @Field((_type) => String)
  name: string;

  @Field((_type) => Int)
  period: number;

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
  @Field((_type) => String)
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

  @Field((_type) => String, { nullable: true })
  name: string;

  @Field((_type) => Int, { nullable: true })
  period: number;

  @Field((_type) => String, { nullable: true })
  summary: string;

  @Field((_type) => String, { nullable: true })
  imageUrl: string;

  @Field((_type) => [ProjectMemberInput], { nullable: true })
  members: ProjectMemberInput[];

  @Field((_type) => [ProjectUrlInput], { nullable: true })
  url: ProjectUrlInput[];
}

@InputType()
export class ProjectUniqueInput {
  @Field((_type) => Int)
  id: number;
}
