import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'user/guard/user.guard';
import {
  ProjectInput,
  ProjectFindManyInput,
  ProjectUniqueInput,
  ProjectUpdateInput,
} from './input/project.input';
import { ProjectService } from './project.service';
import { ProjectResponse } from './response/project.response';

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}
  @Query((_returns) => ProjectResponse)
  project(@Args('projectUniqueInput') projectUniqueInput: ProjectUniqueInput) {
    return this.projectService.findProjectById(projectUniqueInput);
  }

  @Query((_returns) => [ProjectResponse])
  projects(
    @Args('projectFindManyInput') projectFindManyInput: ProjectFindManyInput,
  ) {
    return this.projectService.findProjects(projectFindManyInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => ProjectResponse)
  createProject(@Args('projectInput') projectInput: ProjectInput) {
    return this.projectService.createProject(projectInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => ProjectResponse)
  updateProject(
    @Args('projectUpdateInput') projectUpdateInput: ProjectUpdateInput,
  ) {
    return this.projectService.updateProject(projectUpdateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => ProjectResponse)
  deleteProject(
    @Args('projectUniqueInput') projectUniqueInput: ProjectUniqueInput,
  ) {
    return this.projectService.deleteproject(projectUniqueInput);
  }
}
