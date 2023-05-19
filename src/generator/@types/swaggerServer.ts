export interface SwaggerServerVariable {
    enum?: string[];
    default: string;
    description?: string;
}

export interface SwaggerServer {
    url: string;
    description?: string;
    variables?: Record<string, SwaggerServerVariable>;
}