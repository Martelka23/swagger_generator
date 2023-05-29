"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerPaths = void 0;
function isSwaggerRequestParameter(param) {
    return 'name' in param;
}
class SwaggerPaths {
    constructor(...swaggerPaths) {
        this.paths = {};
        swaggerPaths.forEach(swaggerPath => {
            this.paths = Object.assign(Object.assign({}, this.paths), swaggerPath.getConfig());
        });
    }
    addEndpoint(method, path, request, summary = '', description = '') {
        request.operationId = request.operationId || `${method}_${path}`;
        this.paths[path] = this.paths[path] || {};
        this.paths[path][method] = {};
        this.paths[path].description = this.paths[path].description || description;
        this.paths[path].description = this.paths[path].summary || summary;
        this.paths[path][method] = request;
    }
    getConfig() {
        return this.paths;
    }
}
exports.SwaggerPaths = SwaggerPaths;
//# sourceMappingURL=SwaggerPaths.js.map