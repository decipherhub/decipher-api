import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DeferenceResponse } from 'deference/deference.response';

@ObjectType('DeferenceImageResponse')
export class DeferenceImageResponse {
    @Field((type) => Int)
    id: number;

    @Field()
    type: string;

    @Field()
    image_url: string;

    @Field((type) => DeferenceResponse)
    deference: DeferenceResponse
}