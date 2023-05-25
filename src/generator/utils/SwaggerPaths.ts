import { HttpMethods, HttpStatusCode } from "../@types/common/httpStatusCode";
import { SwaggerCommonRef } from "../@types/common/misc";
import { SwaggerParameters, SwaggerRequestBody, SwaggerRequestParameter, SwaggerResponses } from "../@types/common/requests";
import { SwaggerPath, SwaggerRequest } from "../@types/swaggerPath";

function isSwaggerRequestParameter(
    param: SwaggerCommonRef | SwaggerRequestParameter
): param is SwaggerRequestParameter {
    return 'name' in param;
}

export class SwaggerPaths {
    paths: Record<string, SwaggerPath> = {};
    
    constructor() {

    }

    addEndpoint(
        method: HttpMethods,
        path: string,
        request: SwaggerRequest,
        summary: string = '',
        description: string = ''
    ) {
        request.operationId = request.operationId || `${method}_${path}`;
        request.responses = request.responses || {
            [HttpStatusCode.Success]: {
                description: 'Vse horosho'
            }
        }
        if (request.parameters && Array.isArray(request.parameters)) {
            request.parameters = request.parameters.map(param => {
                console.log(param)
                if (isSwaggerRequestParameter(param) && param.in === undefined) {
                    param.in = 'query'
                }

                return param;
            })
        }
        
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