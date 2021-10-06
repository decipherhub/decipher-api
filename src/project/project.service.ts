import { Injectable } from '@nestjs/common';
import { PrismaClient, Project } from '@prisma/client';
import {
  ProjectInput,
  ProjectFindManyInput,
  ProjectUniqueInput,
  ProjectUpdateInput,
} from './input/project.input';
@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaClient) {}

  async createProject(projectInput: ProjectInput): Promise<Project> {
    const { name, periodId, url, summary, imageUrl, members } = projectInput;

    const project = await this.prisma.project.create({
      data: {
        name,
        summary,
        imageUrl,
        url: { createMany: { data: url } },
        members: {
          createMany: {
            data: members,
          },
        },
        period: { connect: { id: periodId } },
      },
      include: {
        members: {
          select: {
            project: true,
            member: true,
          },
        },
        url: true,
        period: true,
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
        members: {
          select: {
            project: true,
            member: true,
          },
        },
        url: true,
        period: true,
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
        members: {
          select: {
            project: true,
            member: true,
          },
        },
        url: true,
        period: true,
      },
    });

    return project;
  }

  async updateProject(
    projectUpdateInput: ProjectUpdateInput,
  ): Promise<Project> {
    const { id, data } = projectUpdateInput;
    const { name, summary, imageUrl, members, periodId, url } = data;

    const project = await this.prisma.project.update({
      where: { id },
      data: {
        name,
        summary,
        imageUrl,
        members: {
          deleteMany: {},
          createMany: {
            data: members,
          },
        },
        url: {
          deleteMany: {},
          createMany: { data: url },
        },
        period: {
          connect: { id: periodId },
        },
      },
      include: {
        members: {
          select: {
            project: true,
            member: true,
          },
        },
        url: true,
        period: true,
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
      include: {
        members: {
          select: {
            project: true,
            member: true,
          },
        },
        url: true,
        period: true,
      },
    });

    return project;
  }
}
