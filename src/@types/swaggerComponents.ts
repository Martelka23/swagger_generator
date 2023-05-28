import { SwaggerCommonRef, ISwaggerSchema } from "./common/misc";
import { SwaggerFieldExample, SwaggerRequestBody, SwaggerRequestHeaders, SwaggerRequestParameter } from "./common/requests";

export interface SwaggerComponents {
    schemas?: Record<string, ISwaggerSchema | SwaggerCommonRef>;
    responses?: Record<string, ISwaggerSchema | SwaggerCommonRef>;
    parameters?: Record<string, SwaggerRequestParameter | SwaggerCommonRef>;
    examples?: Record<string, SwaggerFieldExample | SwaggerCommonRef>;
    requestBodies?: Record<string, SwaggerRequestBody | SwaggerCommonRef>;
    headers?: SwaggerRequestHeaders;
}