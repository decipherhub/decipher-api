import { Injectable } from '@nestjs/common';
import { PrismaClient, Project } from '@prisma/client';
import {
  ProjectCreateInput,
  ProjectFindManyInput,
  ProjectUniqueInput,
  ProjectUpdateInput,
} from './input/project.input';
@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaClient) {}

  async createProject(
    projectCreateInput: ProjectCreateInput,
  ): Promise<Project> {
    const { name, period, url, summary, imageUrl, members } =
      projectCreateInput;

    const periodGen = await this.prisma.period.findUnique({
      where: { id: period },
    });

    const project = await this.prisma.project.create({
      data: {
        name,
        summary,
        imageUrl,
        url: { createMany: { data: url } },
        members: {
          createMany: { data: members },
        },
        period: { connect: { id: periodGen.id } },
      },
      include: {
        members: true,
        url: true,
      },
    });

    return project;
  }

  async findProjectById(
    projectUniqueInput: ProjectUniqueInput,
  ): Promise<Project> {
    const { id } = projectUniqueInput;
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        members: true,
        url: true,
      },
      rejectOnNotFound: true,
    });

    return project;
  }

  async findProjects(
    projectFindManyInput: ProjectFindManyInput,
  ): Promise<Project[]> {
    const { orderBy } = projectFindManyInput;
    const project = await this.prisma.project.findMany({
      orderBy,
      include: {
        members: true,
        url: true,
      },
    });

    return project;
  }

  async updateProject(
    projectUpdateInput: ProjectUpdateInput,
  ): Promise<Project> {
    const { id, name, period, summary, imageUrl, members, url } =
      projectUpdateInput;

    // TODO : update members and url
    const project = await this.prisma.project.update({
      where: { id },
      data: {
        name,
        period: { connect: { id: period } },
        summary,
        imageUrl,
      },
      include: {
        members: true,
        url: true,
      },
    });

    return project;
  }

  async deleteproject(
    projectUniqueInput: ProjectUniqueInput,
  ): Promise<Project> {
    const { id } = projectUniqueInput;
    const project = await this.prisma.project.delete({
      where: { id },
    });

    return project;
  }
}
