import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { DeferenceService } from "./deference.service";

@Resolver()
export class DeferenceResolver {
    constructor(private deferenceService: DeferenceService) {}

    
}