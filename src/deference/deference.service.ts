import { PrismaClient, Deference } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateDeferenceInput, UpdateDeferenceInput } from './input/deference.input';

@Injectable()
export class DeferenceService {
  constructor(private prisma: PrismaClient) {}

  async getDeference(id: number): Promise<Deference> {
    return await this.prisma.deference.findUnique({
      where: {
        id,
      },
      include: {
        deferenceSpeaker: true,
        deferenceReference: true,
        deferencePartnerLogoUrl: true
      },
      rejectOnNotFound: true,
    });
  }

  async getDeferences(): Promise<Deference[]> {
    return await this.prisma.deference.findMany({
      include: {
        deferenceSpeaker: true,
        deferenceReference: true,
        deferencePartnerLogoUrl: true
      },
    });
  }

  async createDeference(
    createDeferenceInput: CreateDeferenceInput,
  ): Promise<Deference> {
    const { 
      year, 
      summary, 
      startTime, 
      endTime, 
      participationMethod, 
      contents, 
      audience, 
      host, 
      formLink, 
      mainPosterUrlDesktop, 
      mainPosterUrlMobile, 
      schedulePosterUrlDesktop, 
      schedulePosterUrlMobile,
      deferenceSpeaker,
      deferenceReference,
      deferencePartnerLogoUrl
    } = createDeferenceInput;

    return await this.prisma.deference.create({
      data: {
        year,
        summary, 
        startTime, 
        endTime, 
        participationMethod, 
        contents, 
        audience, 
        host, 
        formLink, 
        mainPosterUrlDesktop, 
        mainPosterUrlMobile, 
        schedulePosterUrlDesktop, 
        schedulePosterUrlMobile,
        deferenceSpeaker: {
          createMany: { 
            data: deferenceSpeaker
          }
        },
        deferenceReference: {
          createMany: {
            data: deferenceReference
          }
        },
        deferencePartnerLogoUrl: {
          createMany: {
            data: deferencePartnerLogoUrl
          }
        }
      },
      include: {
        deferenceSpeaker: true,
        deferenceReference: true,
        deferencePartnerLogoUrl: true
      },
    });
  }

  async updateDeference(
    updateDeferenceInput: UpdateDeferenceInput,
  ): Promise<Deference> {
    const { 
      id,
      year, 
      summary, 
      startTime, 
      endTime, 
      participationMethod, 
      contents, 
      audience, 
      host, 
      formLink, 
      mainPosterUrlDesktop, 
      mainPosterUrlMobile, 
      schedulePosterUrlDesktop, 
      schedulePosterUrlMobile,
      deferenceSpeaker,
      deferenceReference,
      deferencePartnerLogoUrl
    } = updateDeferenceInput;
    return this.prisma.deference.update({
      where: {
        id,
      },
      data: {
        year,
        summary, 
        startTime, 
        endTime, 
        participationMethod, 
        contents, 
        audience, 
        host, 
        formLink, 
        mainPosterUrlDesktop, 
        mainPosterUrlMobile, 
        schedulePosterUrlDesktop, 
        schedulePosterUrlMobile,
        deferenceSpeaker: {
          update: {
            where: {
              id: deferenceSpeaker.id
            }, 
            data: {
              name: deferenceSpeaker.name,
              imageUrl: deferenceSpeaker.imageUrl,
              info: deferenceSpeaker.info
            }
          }
        },
        deferenceReference: {
          update: {
            where: {
              id: deferenceReference.id
            },
            data: {
              type: deferenceReference.type,
              link: deferenceReference.link
            }
          }
        },
        deferencePartnerLogoUrl: {
          update: {
            where: {
              id: deferencePartnerLogoUrl.id
            },
            data: {
              name: deferencePartnerLogoUrl.name,
              imageUrl: deferencePartnerLogoUrl.imageUrl
            }
          }
        }
      },
      include: {
        deferenceSpeaker: true,
        deferenceReference: true,
        deferencePartnerLogoUrl: true
      }
    });
  }

  async deleteDeference(id: number): Promise<Deference> {
    return await this.prisma.deference.delete({
      where: {
        id,
      },
    });
  }
}
