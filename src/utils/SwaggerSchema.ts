import { ISwaggerSchema } from "../@types/common/misc";

export class SwaggerSchema {
    schemas: Record<string, ISwaggerSchema> = {};

    constructor(...swaggerSchemas: SwaggerSchema[]) {
        swaggerSchemas.forEach(swaggerSchema => {
            this.schemas = { ...this.schemas, ...swaggerSchema.getConfig() };
        });
    }

    addSchema(name: string, config: ISwaggerSchema): SwaggerSchema {
        this.schemas[name] = config;

        return this;
    }

    getConfig(): Record<string, ISwaggerSchema> {
        return this.schemas;
    }
}