import { HttpStatusNumber } from "./httpStatusCode";
import { SwaggerCommonRef, SwaggerSchema } from "./misc";

export type SwaggerRequestParameterIn = 'query' | 'header' | 'path' | 'cookie';
export type SwaggerRequestHeaders = { [index: string]: string | SwaggerCommonRef };
export type SwaggerBodyContentTypes = 'application/json' | 'text/plain' | 'multipart/form-data';


export interface SwaggerRequestParameter {
    name: string;
    in?: SwaggerRequestParameterIn;
    description?: string;
    required?: boolean;
    schema?: SwaggerSchema;
    example?: any
}

export interface SwaggerFieldExample {
    summary?: string;
    description?: string;
    value?: any;
}

export interface SwaggerBodyContent {
    schema?: SwaggerSchema | SwaggerCommonRef;
    examples?: Record<string, SwaggerFieldExample | SwaggerCommonRef>;
}

export interface SwaggerRequestBody {
    content: Partial<Record<SwaggerBodyContentTypes, SwaggerBodyContent>>;
    required?: boolean;
    description?: string;
}

export interface SwaggerResponse {
    description: string;
    headers?: SwaggerRequestHeaders;
    content?: Record<string, SwaggerBodyContent>;
}

export type SwaggerParameters = Array<SwaggerRequestParameter | SwaggerCommonRef>;
export type SwaggerResponses = Partial<Record<HttpStatusNumber, SwaggerResponse | SwaggerCommonRef>>;