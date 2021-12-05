import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DeferencePartnerLogoUrlResponse } from 'deference/response/deferencePartnerLogoUrl.response';
import { DeferenceReferenceResponse } from 'deference/response/deferenceReference.response';
import { DeferenceSpeakerResponse } from 'deference/response/deferenceSpeaker.response';

@ObjectType('DeferenceResponse')
export class DeferenceResponse {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;

  @Field()
  summary: string;

  @Field((type) => Date)
  startTime: Date;

  @Field((type) => Date)
  endTime: Date;

  @Field()
  participationMethod: string;

  @Field()
  contents: string;

  @Field()
  audience: string;

  @Field()
  host: string;

  @Field()
  formLink: string;

  @Field()
  mainPosterUrlDesktop: string;

  @Field()
  mainPosterUrlMobile: string;

  @Field()
  schedulePosterUrlDesktop: string;

  @Field()
  schedulePosterUrlMobile: string;

  @Field((type) => [DeferenceSpeakerResponse], { nullable: true })
  deferenceSpeaker: DeferenceSpeakerResponse[];

  @Field((type) => [DeferenceReferenceResponse], { nullable: true })
  deferenceReference: DeferenceReferenceResponse[];

  @Field((type) => [DeferencePartnerLogoUrlResponse], { nullable: true })
  deferencePartnerLogoUrl: DeferencePartnerLogoUrlResponse[];
}
