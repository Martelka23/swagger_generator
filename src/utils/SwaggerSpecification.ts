import { SwaggerSpecificationConfig } from "../@types";

export class SwaggerSpecification {
    config: SwaggerSpecificationConfig;

    constructor(config: SwaggerSpecificationConfig) {
        this.config = config;
    }

    getConfig() {
        return this.config;
    }
}