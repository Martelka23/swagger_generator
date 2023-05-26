import { SwaggerSpecification } from "./generator/@types/swagger"

export const vpbxSpec: SwaggerSpecification = {
    "openapi": "3.0.0",
    "paths": {
        "/api/protected/calls/vpbx/outbound": {
            "post": {
                "operationId": "CallsVpbxController_createOutboundCallProtected",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateOutboundCallProtected"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "calls",
                    'test'
                ]
            }
        },
        "/api/protected/calls/vpbx/outbound/schema": {
            "post": {
                "operationId": "CallsVpbxController_createOutboundSchemaCallProtected",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateOutboundSchemaCallProtected"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "calls"
                ]
            }
        },
        "/api/protected/calls/phone/outbound/sip": {
            "post": {
                "operationId": "CallsPhoneController_createSipOutboundCallProtected",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateSipOutboundCallProtected"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "calls"
                ]
            }
        },
        "/api/protected/calls/phone/outbound/did": {
            "post": {
                "operationId": "CallsPhoneController_createDidOutboundCallProtected",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateDidOutboundCallProtected"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "calls"
                ]
            }
        },
        "/api/protected/calls/phone/authorization": {
            "post": {
                "operationId": "CallsPhoneController_createAuthorizationCallProtected",
                "parameters": [],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateAuthorizationCallProtected"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "calls"
                ]
            }
        },
        "/api/protected/vpbx/blacklists": {
            "get": {
                "operationId": "BlacklistsController_getBlacklists",
                "parameters": [
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "vpbxId",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            }
        },
        "/api/protected/vpbx/blacklists/{id}/members": {
            "get": {
                "operationId": "BlacklistsController_getBlacklistsMembers",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            },
            "post": {
                "operationId": "BlacklistsController_createBlacklistsMembers",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateBlacklistMembersDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            },
            "delete": {
                "operationId": "BlacklistsController_deleteBlacklistsMembers",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "blacklistMemberId",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            }
        },
        "/api/protected/vpbx/blacklists/{id}/members/bulk": {
            "post": {
                "operationId": "BlacklistsController_createBlacklistsMembersBulk",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CreateBlacklistMembersBulkDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            },
            "delete": {
                "operationId": "BlacklistsController_deleteBlacklistsMembersBulk",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "blacklistMemberIds",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "number"
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            }
        },
        "/api/protected/vpbx/blacklists/{id}/members/imports": {
            "post": {
                "operationId": "BlacklistsController_importContacts",
                "parameters": [
                    {
                        "name": "id",
                        "required": true,
                        "in": "path",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "$ref": "#/components/schemas/ImportBlacklistMembersFileDTO"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/blacklists"
                ]
            }
        },
        "/api/protected/vpbx/settings": {
            "get": {
                "operationId": "SettingsController_getSettings",
                "parameters": [
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/settings"
                ]
            }
        },
        "/api/protected/vpbx/ivr-schemas": {
            "get": {
                "operationId": "IvrSchemasController_getIvrSchemas",
                "parameters": [
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "vpbxId",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/ivr-schemas"
                ]
            }
        },
        "/api/protected/vpbx/queues": {
            "get": {
                "operationId": "QueuesController_getQueues",
                "parameters": [
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "vpbxId",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/queues"
                ]
            }
        },
        "/api/protected/vpbx/timeconditions": {
            "get": {
                "operationId": "TimeconditionsController_getQueues",
                "parameters": [
                    {
                        "name": "limit",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "offset",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    },
                    {
                        "name": "filter",
                        "required": false,
                        "in": "query",
                        "example": [
                            "product||$eq||lk",
                            "createdAt||$between||2022-12-12,2023-12-12"
                        ],
                        "schema": {
                            "type": "array",
                            items: {
                                'example': 123
                            }
                        }
                    },
                    {
                        "name": "orderBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "sortBy",
                        "required": false,
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "vpbxId",
                        "required": true,
                        "in": "query",
                        "schema": {
                            "type": "number"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                },
                "tags": [
                    "vpbx/timeconditions"
                ]
            }
        },
        "/api/protected/equipment/help-links": {
            "get": {
                "operationId": "HelpLinksController_getLinks",
                "summary": "HelpLinks",
                "description": "Returns help links for equipment",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/GetHelpLinksResponseDTO"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "entityNotFound"
                    },
                    "500": {
                        "description": "internalServerError"
                    }
                },
                "tags": [
                    "equipment/help-links"
                ]
            }
        }
    },
    "info": {
        "title": "VATS Protected Methods",
        "description": "protected methods",
        "version": "1.1",
        "contact": {}
    },
    "tags": [],
    "servers": [
        {
            "url": "https://vpbx.mcn.ru"
        }
    ],
    "components": {
        "schemas": {
            "CreateOutboundCallPrivate": {
                "type": "object",
                "properties": {
                    "timeoutFrom": {
                        "type": "number",
                        "minimum": 123
                    },
                    "vpbxId": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "toNumber": {
                        "type": "string"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "vpbxId",
                    "fromNumber",
                    "toNumber",
                    "accountId"
                ]
            },
            "CreateOutboundCallProtected": {
                "type": "object",
                "properties": {
                    "timeoutFrom": {
                        "type": "number",
                        "minimum": -12,
                        "maximum": 100,
                        "default": 34 
                    },
                    "vpbxId": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "toNumber": {
                        "type": "string"
                    }
                },
                "required": [
                    "vpbxId",
                    "fromNumber",
                    "toNumber"
                ]
            },
            "CreateOutboundSchemaCallPrivate": {
                "type": "object",
                "properties": {
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "vpbxId": {
                        "type": "number"
                    },
                    "uuid": {
                        "type": "string"
                    },
                    "callMode": {
                        "type": "string",
                        "default": "operator_first"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "ivrSchemaId": {
                        "type": "string"
                    },
                    "toNumber": {
                        "type": "string"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "vpbxId",
                    "fromNumber",
                    "ivrSchemaId",
                    "toNumber",
                    "accountId"
                ]
            },
            "CreateOutboundSchemaCallProtected": {
                "type": "object",
                "properties": {
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "vpbxId": {
                        "type": "number"
                    },
                    "uuid": {
                        "type": "string"
                    },
                    "callMode": {
                        "type": "string",
                        "default": "operator_first"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "ivrSchemaId": {
                        "type": "string"
                    },
                    "toNumber": {
                        "type": "string"
                    }
                },
                "required": [
                    "vpbxId",
                    "fromNumber",
                    "ivrSchemaId",
                    "toNumber"
                ]
            },
            "CreateSipOutboundCallPrivate": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "sipName": {
                        "type": "string"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "sipName",
                    "accountId"
                ]
            },
            "CreateSipOutboundCallProtected": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "sipName": {
                        "type": "string"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "sipName"
                ]
            },
            "CreateDidOutboundCallPrivate": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "uuid": {
                        "type": "string"
                    },
                    "callMode": {
                        "type": "string",
                        "default": "operator_first"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "fromNumber",
                    "accountId"
                ]
            },
            "CreateDidOutboundCallProtected": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "uuid": {
                        "type": "string"
                    },
                    "callMode": {
                        "type": "string",
                        "default": "operator_first"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "fromNumber"
                ]
            },
            "CreateAuthorizationCallPrivate": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "fromNumber",
                    "accountId"
                ]
            },
            "CreateAuthorizationCallProtected": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "fromNumber"
                ]
            },
            "CreateTestCall": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "fromNumber": {
                        "type": "string"
                    },
                    "redirectNumber": {
                        "type": "string"
                    },
                    "regionId": {
                        "type": "number"
                    },
                    "trunkId": {
                        "type": "number"
                    },
                    "callId": {
                        "type": "string"
                    },
                    "cpc": {
                        "type": "string"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom",
                    "fromNumber",
                    "redirectNumber",
                    "regionId",
                    "trunkId",
                    "callId",
                    "cpc"
                ]
            },
            "CreateFlashCall": {
                "type": "object",
                "properties": {
                    "toNumber": {
                        "type": "string"
                    },
                    "timeoutFrom": {
                        "type": "number"
                    },
                    "verificationCallUuid": {
                        "type": "string"
                    },
                    "code": {
                        "type": "string"
                    },
                    "countryId": {
                        "type": "number"
                    }
                },
                "required": [
                    "toNumber",
                    "timeoutFrom"
                ]
            },
            "CreateBlacklistMembersDTO": {
                "type": "object",
                "properties": {
                    "number": {
                        "type": "string"
                    }
                },
                "required": [
                    "number"
                ]
            },
            "CreateBlacklistMembersPrivateDTO": {
                "type": "object",
                "properties": {
                    "number": {
                        "type": "string"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "number",
                    "accountId"
                ]
            },
            "CreateBlacklistMembersBulkDTO": {
                "type": "object",
                "properties": {
                    "numbers": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "required": [
                    "numbers"
                ]
            },
            "CreateBlacklistMembersBulkPrivateDTO": {
                "type": "object",
                "properties": {
                    "numbers": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "numbers",
                    "accountId"
                ]
            },
            "ImportBlacklistMembersFileDTO": {
                "type": "object",
                "properties": {
                    "columnIndex": {
                        "type": "number",
                        "default": 0
                    },
                    "includeFirstLine": {
                        "type": "boolean",
                        "default": false
                    },
                    "file": {
                        "type": "string",
                        "description": "File",
                        "format": "binary"
                    }
                },
                "required": [
                    "columnIndex",
                    "includeFirstLine",
                    "file"
                ]
            },
            "ImportBlacklistMembersFilePrivateDTO": {
                "type": "object",
                "properties": {
                    "columnIndex": {
                        "type": "number",
                        "default": 0
                    },
                    "includeFirstLine": {
                        "type": "boolean",
                        "default": false
                    },
                    "file": {
                        "type": "string",
                        "description": "File",
                        "format": "binary"
                    },
                    "accountId": {
                        "type": "number"
                    }
                },
                "required": [
                    "columnIndex",
                    "includeFirstLine",
                    "file",
                    "accountId"
                ]
            },
            "HelpLinkHardwareDTO": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "link": {
                        "type": "string"
                    }
                },
                "required": [
                    "name",
                    "link"
                ]
            },
            "HelpLinkDTO": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "link": {
                        "type": "string"
                    },
                    "hardware": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/HelpLinkHardwareDTO"
                        }
                    }
                },
                "required": [
                    "name",
                    "link",
                    "hardware"
                ]
            },
            "GetHelpLinksResponseDTO": {
                "type": "object",
                "properties": {
                    "helpLinks": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/HelpLinkDTO"
                        }
                    }
                },
                "required": [
                    "helpLinks"
                ]
            }
        }
    }
}