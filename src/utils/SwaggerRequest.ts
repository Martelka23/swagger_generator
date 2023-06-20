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
        // const _params: SwaggerRequestParameter[] = [];

        // const schemaKeys = Object.keys(schema.properties);

        // schemaKeys.forEach(key => {
        //     _params.push({ name: key, example: schema.properties[key], in: 'query' });
        // });

        // params.forEach(param => {
        //     const index = _params.findIndex(el => el.name === param.name);
        //     if (index >= 0) {
        //         _params[index] = { ..._params[index], ...param };
        //     }
        // });

        params.forEach(param => {
            const _param: SwaggerRequestParameter = schema ? { 
                name: param.name,
                example: schema.properties[param.name].example,
                required: schema.required ? schema.required.includes(param.name) : undefined,
                in: 'query',
                ...param
            } : { ...param };

            this.addParam(_param);
        });

        return this;
    }

    // response: Partial<Record<HttpStatusNumber, { description: string, ref: string }>>
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

const test = {
    type: 'object',
    properties: {
      id: { type: 'number', format: 'float', minimum: 1, example: 1 },
      email: { type: 'string', format: 'email', example: 'test@test.ru' },
      phone: { type: 'string', example: '79123456789' },
      companyName: { type: 'string', example: 'My company' },
      juristicName: { type: 'string', example: 'OAO My company' },
      contactPreferenceId: { type: 'number', format: 'float', minimum: 1, example: 1 },
      requestStatusId: { type: 'number', format: 'float', minimum: 1, example: 1 }
    },
    required: [ 'id' ],
    additionalProperties: false
  };


const swaggerRequest = new SwaggerRequest();

swaggerRequest.addParams([], test)

console.log(swaggerRequest.getConfig())