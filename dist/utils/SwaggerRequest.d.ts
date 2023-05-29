import { HttpStatusNumber } from "../types/common/httpStatusCode";
import { SwaggerBodyContentTypes, SwaggerRequestParameter } from "../types/common/requests";
import { SwaggerPathRequest } from "../types/swaggerPath";
export declare class SwaggerRequest {
    request: SwaggerPathRequest;
    constructor(config?: SwaggerPathRequest);
    addBody(schemaName: string, mediaType?: SwaggerBodyContentTypes): SwaggerRequest;
    addParam(param: SwaggerRequestParameter | string): SwaggerRequest;
    addParams(params: Array<SwaggerRequestParameter | string>): SwaggerRequest;
    addResponse(statusNumber: HttpStatusNumber, schemaName: string, mediaType?: SwaggerBodyContentTypes): SwaggerRequest;
    addResponses(responses: {
        statusNumber: HttpStatusNumber;
        ref: string;
    }[]): SwaggerRequest;
    getConfig(): SwaggerPathRequest;
}
