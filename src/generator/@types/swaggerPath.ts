import { HttpStatusNumber } from './common/httpStatusCode'
import { SwaggerCommonExternalDoc, SwaggerCommonRef } from "./common/misc";
import { SwaggerRequestBody, SwaggerRequestParameter, SwaggerResponse } from './common/requests';


export interface SwaggerRequest {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: SwaggerCommonExternalDoc;
    operationId?: string;
    parameters?: Array<SwaggerRequestParameter | SwaggerCommonRef>;
    requestBody?: SwaggerRequestBody | SwaggerCommonRef;
    responses: Partial<Record<HttpStatusNumber, SwaggerResponse>>;
}

export interface SwaggerPath {
    "$ref"?: string;
    summary?: string;
    description?: string;
    get?: SwaggerRequest;
    post?: SwaggerRequest;
    put?: SwaggerRequest;
    delete?: SwaggerRequest;
    patch?: SwaggerRequest;
}