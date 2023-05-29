import { ISwaggerSchema } from "../types/common/misc";
export declare class SwaggerSchema {
    schemas: Record<string, ISwaggerSchema>;
    constructor(...swaggerSchemas: SwaggerSchema[]);
    addSchema(name: string, config: ISwaggerSchema): SwaggerSchema;
    getConfig(): Record<string, ISwaggerSchema>;
}
