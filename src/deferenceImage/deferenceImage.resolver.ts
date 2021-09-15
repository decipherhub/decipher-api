import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { CreateDeferenceImageInput, UpdateDeferenceImageInput } from "deferenceImage/deferenceImage.input";
import { DeferenceImageModule } from "./deferenceImage.module";
import { DeferenceImageResponse } from "./deferenceImage.response";
import { DeferenceImageService } from "./deferenceImage.service";

@Resolver(of => DeferenceImageResponse)
export class DeferenceImageResolver {
    constructor(private deferenceImageService: DeferenceImageService) {}

    @Query((returns) => DeferenceImageResponse, { nullable: true })
    getDeferenceImageById(@Args('id') id: number) {
        return this.deferenceImageService.getDeferenceImage(id);
    }

    @Query((returns) => [DeferenceImageResponse])
    getDeferenceImages() {
        return this.deferenceImageService.getDeferenceImages();
    }

    @Mutation((returns) => DeferenceImageResponse)
    createDeferenceImage(@Args('createDeferenceInput') createDeferenceImageInput: CreateDeferenceImageInput) {
        return this.deferenceImageService.createDeferenceImage(createDeferenceImageInput);
    }

    @Mutation((returns) => DeferenceImageResponse)
    updateDeferenceImage(@Args('updateDeferenceInput') updateDeferenceImageInput: UpdateDeferenceImageInput) {
        return this.deferenceImageService.updateDeferenceImage(updateDeferenceImageInput);
    }

    @Mutation((returns) => DeferenceImageResponse)
    deleteDeferenceImage(@Args('id') id: number) {
        return this.deferenceImageService.deleteDeferenceImage(id);
    }
}