import { HttpMethods, HttpStatusCode } from './@types/common/httpStatusCode';
import { SwaggerSpecification } from './@types/swagger'
import { SwaggerPathRequest } from './@types/swaggerPath';
import { SwaggerPaths } from './utils/SwaggerPaths';
import { SwaggerRequest } from './utils/SwaggerRequest';
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

const swaggerRequest1 = new SwaggerRequest({ description: 'Get Users', tags: ['Users'] })
    .addParam({ name: 'userId', description: 'Id of user', example: 123 });

const swaggerRequest2 = new SwaggerRequest({ description: 'Create user', tags: ['Users'] })
    .addBody('TestSchema');

const swaggerRequest3 = new SwaggerRequest({ description: 'Delete post', tags: ['Posts'] })
    .addParam({ name: 'id', in: 'path', example: 123 });

swaggerPaths.addEndpoint('get', '/api/users', swaggerRequest1.getConfig());
swaggerPaths.addEndpoint('post', '/api/users', swaggerRequest2.getConfig());
swaggerPaths.addEndpoint('delete', '/api/post/{id}', swaggerRequest3.getConfig());

const swaggerPathsMagic = new SwaggerPaths();

const swaggerRequest4 = new SwaggerRequest({ description: 'Some magic', tags: ['Magic'] })
    .addBody('TestSchema');

swaggerPathsMagic.addEndpoint('post', '/api/magic', swaggerRequest4.getConfig());

const rootSwaggerPaths = new SwaggerPaths(swaggerPaths, swaggerPathsMagic);

const spec: SwaggerSpecification = {
    openapi: "3.0.0",
    info: {
        title: "My title",
        version: "3.2.2"
    },
    paths: rootSwaggerPaths.getConfig(),
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