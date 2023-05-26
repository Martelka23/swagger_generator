import { HttpStatusCode, HttpStatusNumber } from "../@types/common/httpStatusCode";
import { SwaggerCommonRef } from "../@types/common/misc";
import { SwaggerBodyContentTypes, SwaggerParameters, SwaggerRequestParameter, SwaggerResponse } from "../@types/common/requests";
import { SwaggerPathRequest } from "../@types/swaggerPath";

export class SwaggerRequest {
    request: SwaggerPathRequest = {};

    constructor(config: SwaggerPathRequest = {}) {
        config.responses = config.responses || {
            [HttpStatusCode.Success]: {
                description: 'Vse horosho'
            }
        }

        config.responses[HttpStatusCode.Created] = {
            description: 'asdf',
            content: {
                
            }
        }

        this.request = config;
    }

    addBody(schemaName: string, mediaType: SwaggerBodyContentTypes = 'application/json'): SwaggerRequest {
        this.request.requestBody = {
            content: {
                [mediaType]: {
                    schema: {
                        '$ref': '#/components/schemas/' + schemaName
                    }
                }
            }
        };

        return this;
    }

    addParam(param: SwaggerRequestParameter | string): SwaggerRequest {
        if (!this.request.parameters) {
            this.request.parameters = [];
        }

        if (typeof param === 'string') {
            this.request.parameters.push({
                '$ref': param
            });
        } else {
            param.in = param.in || 'query';
            param.required = param.required || false;
            this.request.parameters.push(param);
        }

        return this;
    }

    addParams(params: Array<SwaggerRequestParameter | string>): SwaggerRequest {
        params.forEach(param => this.addParam(param));

        return this;
    }

    // response: Partial<Record<HttpStatusNumber, { description: string, ref: string }>>
    addResponse(statusNumber: HttpStatusNumber, schemaName: string): SwaggerRequest {
        this.request.responses![statusNumber] = {
            '$ref': '#/components/schemas/' + schemaName
        };

        return this;
    }

    addResponses(responses: { statusNumber: HttpStatusNumber, ref: string }[]): SwaggerRequest {
        responses.forEach(response => this.addResponse(response.statusNumber, response.ref));

        return this;
    }

    

    getConfig() {
        return this.request;
    }
}