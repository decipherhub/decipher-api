import { PrismaClient } from ".prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeferenceImageService {
    constructor(private prisma: PrismaClient) {}
}