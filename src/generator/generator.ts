import {    HttpStatusCode } from './@types/common/httpStatusCode';
import { SwaggerSpecification } from './@types/swagger'
import { SwaggerPaths } from './utils/SwaggerPaths';
import { SwaggerRequest } from './utils/SwaggerRequest';
import { SwaggerSchema } from './utils/SwaggerSchema';

// Основная информация

// Ответы

// Схемы

// swagger.post('path', Входные данные, выходные данные)


// REQUESTS
const swaggerRequest1 = new SwaggerRequest({ description: 'Get Users', tags: ['Users'] })
    .addParam({ name: 'userId', description: 'Id of user', example: 123 })
    .addResponse(200, 'UserSchema');

const swaggerRequest2 = new SwaggerRequest({ description: 'Create user', tags: ['Users'] })
    .addBody('TestSchema');

const swaggerRequest3 = new SwaggerRequest({ description: 'Delete post', tags: ['Posts'] })
    .addParam({ name: 'id', in: 'path', example: 123 });

const swaggerRequest4 = new SwaggerRequest({ description: 'Some magic', tags: ['Magic'] })
    .addBody('TestSchema');

// PATHS
const swaggerPaths = new SwaggerPaths();
swaggerPaths.addEndpoint('get', '/api/users', swaggerRequest1.getConfig());
swaggerPaths.addEndpoint('post', '/api/users', swaggerRequest2.getConfig());
swaggerPaths.addEndpoint('delete', '/api/post/{id}', swaggerRequest3.getConfig());

const swaggerPathsMagic = new SwaggerPaths();
swaggerPathsMagic.addEndpoint('post', '/api/magic', swaggerRequest4.getConfig());

const rootSwaggerPaths = new SwaggerPaths(swaggerPaths, swaggerPathsMagic);

// SCHEMAS
const swaggerSchema1 = new SwaggerSchema()
    .addSchema('TestSchema', {
        example: {
            'field1': 123,
            'field2': 'hello world'
        }
    });
const swaggerSchema2 = new SwaggerSchema()
    .addSchema('UserSchema', {
        type: 'object',
        properties: {
            'email': { type: 'string', example: 'test@test.ru' },
            'password': { type: 'string', example: 'qwer' },
            'age': { type: 'number', example: 123 }
        }
    });
const rootSwaggerSchema = new SwaggerSchema(swaggerSchema1, swaggerSchema2);

const spec: SwaggerSpecification = {
    openapi: "3.0.0",
    info: {
        title: "My title",
        version: "3.2.2"
    },
    paths: rootSwaggerPaths.getConfig(),
    components: {
        schemas: rootSwaggerSchema.getConfig()
    }
};


export { spec };