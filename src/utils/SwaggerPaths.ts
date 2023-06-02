import { HttpMethods, SwaggerPath, SwaggerPathRequest } from "../@types";

export class SwaggerPaths {
    paths: Record<string, SwaggerPath> = {};
    
    constructor(...swaggerPaths: SwaggerPaths[]) {
        swaggerPaths.forEach(swaggerPath => {
            this.paths = { ...this.paths, ...swaggerPath.getConfig() };
        });
    }

    addEndpoint(
        method: HttpMethods,
        path: string,
        request: SwaggerPathRequest,
        summary: string = '',
        description: string = ''
    ) {
        request.operationId = request.operationId || `${method}_${path}`;
        
        this.paths[path] =  this.paths[path] || {};
        this.paths[path][method] = {};
        this.paths[path].description = this.paths[path].description || description;
        this.paths[path].description = this.paths[path].summary || summary;
        this.paths[path][method] = request;
    }

    getConfig(): Record<string, SwaggerPath> {
        return this.paths;
    }
}