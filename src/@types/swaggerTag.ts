import { SwaggerCommonExternalDoc } from "./common/misc";

export interface SwaggerTag {
    name: string;
    description?: string;
    externalDocs?: SwaggerCommonExternalDoc;
}