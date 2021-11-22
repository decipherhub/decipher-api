import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateDeferencePartnerLogoUrlInput, UpdateDeferencePartnerLogoUrlInput } from 'deference/input/deferencePartnerLogoUrl.input';
import { CreateDeferenceReferenceInput, UpdateDeferenceReferenceInput } from 'deference/input/deferenceReference.input';
import { CreateDeferenceSpeakerInput, UpdateDeferenceSpeakerInput } from 'deference/input/deferenceSpeaker.input';

@InputType()
export class CreateDeferenceInput {
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

  @Field((type) => [CreateDeferenceSpeakerInput], { nullable: true })
  deferenceSpeaker: CreateDeferenceSpeakerInput[];

  @Field((type) => [CreateDeferenceReferenceInput], { nullable: true })
  deferenceReference: CreateDeferenceReferenceInput[];

  @Field((type) => [CreateDeferencePartnerLogoUrlInput], { nullable: true })
  deferencePartnerLogoUrl: CreateDeferencePartnerLogoUrlInput[];
}

@InputType()
export class UpdateDeferenceInput {
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

  @Field((type) => UpdateDeferenceSpeakerInput, { nullable: true })
  deferenceSpeaker: UpdateDeferenceSpeakerInput;

  @Field((type) => UpdateDeferenceReferenceInput, { nullable: true })
  deferenceReference: UpdateDeferenceReferenceInput;

  @Field((type) => UpdateDeferencePartnerLogoUrlInput, { nullable: true })
  deferencePartnerLogoUrl: UpdateDeferencePartnerLogoUrlInput;
}
