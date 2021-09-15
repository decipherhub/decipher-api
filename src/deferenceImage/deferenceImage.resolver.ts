import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { DeferenceImageService } from "./deferenceImage.service";

@Resolver()
export class DeferenceImageResolver {
    constructor(private deferenceImageService: DeferenceImageService) {}
}