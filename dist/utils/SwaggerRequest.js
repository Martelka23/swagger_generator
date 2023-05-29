"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRequest = void 0;
const httpStatusCode_1 = require("../types/common/httpStatusCode");
class SwaggerRequest {
    constructor(config = {}) {
        this.request = {};
        config.responses = config.responses || {
            [httpStatusCode_1.HttpStatusCode.Success]: {
                description: 'Vse horosho'
            }
        };
        this.request = config;
    }
    addBody(schemaName, mediaType = 'application/json') {
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
    addParam(param) {
        if (!this.request.parameters) {
            this.request.parameters = [];
        }
        if (typeof param === 'string') {
            this.request.parameters.push({
                '$ref': param
            });
        }
        else {
            param.in = param.in || 'query';
            param.required = param.required || false;
            this.request.parameters.push(param);
        }
        return this;
    }
    addParams(params) {
        params.forEach(param => this.addParam(param));
        return this;
    }
    addResponse(statusNumber, schemaName, mediaType = 'application/json') {
        this.request.responses[statusNumber] = {
            description: 'User object',
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
    addResponses(responses) {
        responses.forEach(response => this.addResponse(response.statusNumber, response.ref));
        return this;
    }
    getConfig() {
        return this.request;
    }
}
exports.SwaggerRequest = SwaggerRequest;
//# sourceMappingURL=SwaggerRequest.js.map