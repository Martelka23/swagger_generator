import { SwaggerCommonExternalDoc, SwaggerCommonRef } from "./common/misc";
import { SwaggerParameters, SwaggerRequestBody, SwaggerRequestParameter, SwaggerResponse, SwaggerResponses } from './common/requests';


export interface SwaggerPathRequest {
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
    get?: SwaggerPathRequest;
    post?: SwaggerPathRequest;
    put?: SwaggerPathRequest;
    delete?: SwaggerPathRequest;
    patch?: SwaggerPathRequest;
}