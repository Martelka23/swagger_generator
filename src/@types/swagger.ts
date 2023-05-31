import { SwaggerComponents } from "./swaggerComponents";
import { SwaggerInfo } from "./swaggerInfo";
import { SwaggerPath } from "./swaggerPath";
import { SwaggerServer } from "./swaggerServer";
import { SwaggerTag } from "./swaggerTag";


export interface SwaggerSpecificationConfig {
    openapi: string;
    info: SwaggerInfo;
    servers?: SwaggerServer[];
    paths: Record<string, SwaggerPath>;
    components?: SwaggerComponents;
    tags?: SwaggerTag[];
}