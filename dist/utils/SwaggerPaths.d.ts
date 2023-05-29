import { HttpMethods } from "../types/common/httpStatusCode";
import { SwaggerPath, SwaggerPathRequest } from "../types/swaggerPath";
export declare class SwaggerPaths {
    paths: Record<string, SwaggerPath>;
    constructor(...swaggerPaths: SwaggerPaths[]);
    addEndpoint(method: HttpMethods, path: string, request: SwaggerPathRequest, summary?: string, description?: string): void;
    getConfig(): Record<string, SwaggerPath>;
}
