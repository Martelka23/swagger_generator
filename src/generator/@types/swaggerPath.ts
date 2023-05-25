import { SwaggerCommonExternalDoc, SwaggerCommonRef } from "./common/misc";
import { SwaggerParameters, SwaggerRequestBody, SwaggerRequestParameter, SwaggerResponse, SwaggerResponses } from './common/requests';


export interface SwaggerRequest {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: SwaggerCommonExternalDoc;
    operationId?: string;
    parameters?: SwaggerParameters;
    requestBody?: SwaggerRequestBody | SwaggerCommonRef;
    responses?: SwaggerResponses;
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