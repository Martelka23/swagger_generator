import { HttpStatusCode } from './@types/common/httpStatusCode';
import { SwaggerSpecification } from './@types/swagger'

const spec: SwaggerSpecification = {
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