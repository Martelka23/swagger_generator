"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerSchema = void 0;
class SwaggerSchema {
    constructor(...swaggerSchemas) {
        this.schemas = {};
        swaggerSchemas.forEach(swaggerSchema => {
            this.schemas = Object.assign(Object.assign({}, this.schemas), swaggerSchema.getConfig());
        });
    }
    addSchema(name, config) {
        this.schemas[name] = config;
        return this;
    }
    getConfig() {
        return this.schemas;
    }
}
exports.SwaggerSchema = SwaggerSchema;
//# sourceMappingURL=SwaggerSchema.js.map