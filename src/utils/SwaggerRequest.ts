import { 
    HttpStatusCode, 
    HttpStatusNumber, 
    ISwaggerSchema, 
    SwaggerBodyContentTypes, 
    SwaggerPathRequest, 
    SwaggerRequestParameter 
} from "../@types";

export class SwaggerRequest {
    request: SwaggerPathRequest = {};

    constructor(config: SwaggerPathRequest = {}) {
        config.responses = config.responses || {
            [HttpStatusCode.InternalServerError]: {
                description: 'Internal server error'
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

    addParam(param: SwaggerRequestParameter): SwaggerRequest {
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

    addParams(params: SwaggerRequestParameter[], schema?: ISwaggerSchema): SwaggerRequest {
        const _params: SwaggerRequestParameter[] = [];

        if (schema) {
            const schemaKeys = Object.keys(schema.properties);
    
            schemaKeys.forEach(key => {
                _params.push({ 
                    name: key,
                    example: schema.properties[key].example,
                    in: 'query',
                    required: schema.required ? schema.required.includes(key) : undefined
                });
            });
        }

        params.forEach(param => {
            const index = _params.findIndex(el => el.name === param.name);
            if (index >= 0) {
                _params[index] = { ..._params[index], ...param };
            } else {
                _params.push(param);
            }
        });

        _params.forEach(param => this.addParam(param));

        return this;
    }

    addResponse(
        statusNumber: HttpStatusNumber, 
        schemaName: string, 
        description: string = '', 
        mediaType: SwaggerBodyContentTypes = 'application/json'
    ): SwaggerRequest {
        this.request.responses![statusNumber] = {
            description,
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

    addResponses(responses: { statusNumber: HttpStatusNumber, ref: string }[]): SwaggerRequest {
        responses.forEach(response => this.addResponse(response.statusNumber, response.ref));

        return this;
    }

    getConfig() {
        return this.request;
    }
}