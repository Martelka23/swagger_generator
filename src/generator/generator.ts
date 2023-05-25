import { HttpMethods, HttpStatusCode } from './@types/common/httpStatusCode';
import { SwaggerSpecification } from './@types/swagger'
import { SwaggerRequest } from './@types/swaggerPath';
import { SwaggerPaths } from './utils/SwaggerPaths';
import { SwaggerTags } from './utils/SwaggerTags';

// Основная информация

// Ответы

// Схемы

// swagger.post('path', Входные данные, выходные данные)

const tags = new SwaggerTags()
tags.addTag({
    name: 'test TAG',
    description: 'description tag'
});

const swaggerPaths = new SwaggerPaths();
const test: {method: HttpMethods, path: string, request: SwaggerRequest}[] = [
    { 
        method: 'get', 
        path: '/api/user', 
        request: {
            description: 'Get users',
            parameters: [
                {
                    name: 'userId',
                    description: 'Id of user',
                    example: 123
                }
            ]
        }
    },
    { 
        method: 'post', 
        path: '/api/user',
        request: {
            description: 'Create users',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            '$ref': '#/components/schemas/TestSchema'
                        }
                    }
                }
            }
        }
    },
    { 
        method: 'delete', 
        path: '/api/post/{id}',
        request: {
            parameters: [
                {
                    name: 'id',
                    in: 'path'
                }
            ]
        }
    }
];
test.forEach(el => {
    swaggerPaths.addEndpoint(el.method, el.path, el.request)
})

console.log(swaggerPaths.getConfig())

const spec: SwaggerSpecification = {
    openapi: "3.0.0",
    info: {
        title: "My title",
        version: "3.2.2"
    },
    paths: swaggerPaths.getConfig(),
    components: {
        schemas: {
            'TestSchema': {
                example: {
                    'field1': 123,
                    'field2': 'hello world'
                }
            }
        }
    }
};

const spec1: SwaggerSpecification = {
    openapi: "3.0.0",
    info: {
        title: "My title",
        version: "3.2.2"
    },
    paths: {
        '/hello/world': {
            get: {
                responses: {
                    [HttpStatusCode.Success]: {
                        description: 'Vse horosho'
                    }
                }
            },
            post: {
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: '#/components/schemas/TestSchema'
                            }
                        }
                    }
                },
                responses: {
                    [HttpStatusCode.Success]: {
                        description: 'Vse horosho'
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            'TestSchema': {
                example: {
                    'field1': 123,
                    'field2': 'hello world'
                }
            }
        }
    }
};

export { spec };