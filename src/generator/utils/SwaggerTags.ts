import { SwaggerTag } from "../@types/swaggerTag";

export class SwaggerTags {
    tags: SwaggerTag[] = [];

    constructor() {

    }

    addTag(newTag: SwaggerTag) {
        this.tags.push(newTag);
    }

    getTags() {
        return this.tags;
    }
}