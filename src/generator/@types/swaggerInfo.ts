export interface SwaggerInfoContact {
    name?: string;
    url?: string;
    email?: string;
}

export interface SwaggerInfoLicense {
    name: string;
    url?: string;
}

export interface SwaggerInfo {
    title: string;
    description?: string;
    version: string;
    termsOfService?: string;
    contact?: SwaggerInfoContact;
    license?: SwaggerInfoLicense;
}