export interface SwaggerCommonExternalDoc {
    url: string;
    description?: string;
}

export interface SwaggerCommonRef {
    '$ref': string;
}

export interface ISwaggerSchema {
    type?: string;
    description?: string;
    format?: string;
    readOnly?: boolean;
    writeOnly?: boolean;
    example?: any;
    minimum?: number;
    maximum?: number;
    maxLength?: number;
    minLength?: number;
    default?: any;
    properties?: Record<string, ISwaggerSchema>;
    items?: ISwaggerSchema | SwaggerCommonRef;
    required?: string[];
}