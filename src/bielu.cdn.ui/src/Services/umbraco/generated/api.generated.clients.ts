//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import * as moment from 'moment';

export interface IManagementClient {

    getAuditHistory(): Promise<AuditRecord[] | null>;

    getProviders(): Promise<Provider[] | null>;

    refreshForNode(id: string): Promise<Status | null>;
}

export class ManagementClient implements IManagementClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getAuditHistory(): Promise<AuditRecord[] | null> {
        let url_ = this.baseUrl + "/cdn/api/management/GetAuditHistory";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAuditHistory(_response);
        });
    }

    protected processGetAuditHistory(response: Response): Promise<AuditRecord[] | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : jsonParse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(AuditRecord.fromJS(item, _mappings));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AuditRecord[] | null>(null as any);
    }

    getProviders(): Promise<Provider[] | null> {
        let url_ = this.baseUrl + "/cdn/api/management/GetProviders";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetProviders(_response);
        });
    }

    protected processGetProviders(response: Response): Promise<Provider[] | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : jsonParse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Provider.fromJS(item, _mappings));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Provider[] | null>(null as any);
    }

    refreshForNode(id: string): Promise<Status | null> {
        let url_ = this.baseUrl + "/cdn/api/management/RefreshForNode?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRefreshForNode(_response);
        });
    }

    protected processRefreshForNode(response: Response): Promise<Status | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        let _mappings: { source: any, target: any }[] = [];
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : jsonParse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Status.fromJS(resultData200, _mappings) : <any>null;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Status | null>(null as any);
    }
}

export class AuditRecord implements IAuditRecord {
    name!: string | null;
    date!: moment.Moment;
    message!: string | null;
    details!: string | null;
    username!: string | null;

    constructor(data?: IAuditRecord) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
            this.date = _data["date"] ? moment.parseZone(_data["date"].toString()) : <any>null;
            this.message = _data["message"] !== undefined ? _data["message"] : <any>null;
            this.details = _data["details"] !== undefined ? _data["details"] : <any>null;
            this.username = _data["username"] !== undefined ? _data["username"] : <any>null;
        }
    }

    static fromJS(data: any, _mappings?: any): AuditRecord | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<AuditRecord>(data, _mappings, AuditRecord);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name !== undefined ? this.name : <any>null;
        data["date"] = this.date ? this.date.toISOString(true) : <any>null;
        data["message"] = this.message !== undefined ? this.message : <any>null;
        data["details"] = this.details !== undefined ? this.details : <any>null;
        data["username"] = this.username !== undefined ? this.username : <any>null;
        return data;
    }
}

export interface IAuditRecord {
    name: string | null;
    date: moment.Moment;
    message: string | null;
    details: string | null;
    username: string | null;
}

export class Provider implements IProvider {
    id!: string | null;
    name!: string | null;
    supportedHostnames!: string[] | null;

    constructor(data?: IProvider) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
            if (Array.isArray(_data["supportedHostnames"])) {
                this.supportedHostnames = [] as any;
                for (let item of _data["supportedHostnames"])
                    this.supportedHostnames!.push(item);
            }
            else {
                this.supportedHostnames = <any>null;
            }
        }
    }

    static fromJS(data: any, _mappings?: any): Provider | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<Provider>(data, _mappings, Provider);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        if (Array.isArray(this.supportedHostnames)) {
            data["supportedHostnames"] = [];
            for (let item of this.supportedHostnames)
                data["supportedHostnames"].push(item);
        }
        return data;
    }
}

export interface IProvider {
    id: string | null;
    name: string | null;
    supportedHostnames: string[] | null;
}

export class Status implements IStatus {
    success!: boolean;
    message!: string | null;
    details!: string | null;
    errors!: (Errors | null)[] | null;
    exception!: Exception | null;
    messageType!: EventMessageType | null;

    constructor(data?: IStatus) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.success = _data["success"] !== undefined ? _data["success"] : <any>null;
            this.message = _data["message"] !== undefined ? _data["message"] : <any>null;
            this.details = _data["details"] !== undefined ? _data["details"] : <any>null;
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(Errors.fromJS(item, _mappings));
            }
            else {
                this.errors = <any>null;
            }
            this.exception = _data["exception"] ? Exception.fromJS(_data["exception"], _mappings) : <any>null;
            this.messageType = _data["messageType"] !== undefined ? _data["messageType"] : <any>null;
        }
    }

    static fromJS(data: any, _mappings?: any): Status | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<Status>(data, _mappings, Status);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success !== undefined ? this.success : <any>null;
        data["message"] = this.message !== undefined ? this.message : <any>null;
        data["details"] = this.details !== undefined ? this.details : <any>null;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item.toJSON());
        }
        data["exception"] = this.exception ? this.exception.toJSON() : <any>null;
        data["messageType"] = this.messageType !== undefined ? this.messageType : <any>null;
        return data;
    }
}

export interface IStatus {
    success: boolean;
    message: string | null;
    details: string | null;
    errors: (Errors | null)[] | null;
    exception: Exception | null;
    messageType: EventMessageType | null;
}

export class Errors implements IErrors {
    code!: number;
    message!: string | null;

    constructor(data?: IErrors) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.code = _data["code"] !== undefined ? _data["code"] : <any>null;
            this.message = _data["message"] !== undefined ? _data["message"] : <any>null;
        }
    }

    static fromJS(data: any, _mappings?: any): Errors | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<Errors>(data, _mappings, Errors);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code !== undefined ? this.code : <any>null;
        data["message"] = this.message !== undefined ? this.message : <any>null;
        return data;
    }
}

export interface IErrors {
    code: number;
    message: string | null;
}

export class Exception implements IException {
    message!: string;
    innerException!: Exception | null;
    source!: string | null;
    stackTrace!: string | null;

    constructor(data?: IException) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any, _mappings?: any) {
        if (_data) {
            this.message = _data["Message"] !== undefined ? _data["Message"] : <any>null;
            this.innerException = _data["InnerException"] ? Exception.fromJS(_data["InnerException"], _mappings) : <any>null;
            this.source = _data["Source"] !== undefined ? _data["Source"] : <any>null;
            this.stackTrace = _data["StackTrace"] !== undefined ? _data["StackTrace"] : <any>null;
        }
    }

    static fromJS(data: any, _mappings?: any): Exception | null {
        data = typeof data === 'object' ? data : {};
        return createInstance<Exception>(data, _mappings, Exception);
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Message"] = this.message !== undefined ? this.message : <any>null;
        data["InnerException"] = this.innerException ? this.innerException.toJSON() : <any>null;
        data["Source"] = this.source !== undefined ? this.source : <any>null;
        data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : <any>null;
        return data;
    }
}

export interface IException {
    message: string;
    innerException: Exception | null;
    source: string | null;
    stackTrace: string | null;
}

export enum EventMessageType {
    Default = 0,
    Info = 1,
    Error = 2,
    Success = 3,
    Warning = 4,
}

function jsonParse(json: any, reviver?: any) {
    json = JSON.parse(json, reviver);

    var byid: any = {};
    var refs: any = [];
    json = (function recurse(obj: any, prop?: any, parent?: any) {
        if (typeof obj !== 'object' || !obj)
            return obj;
        
        if ("$ref" in obj) {
            let ref = obj.$ref;
            if (ref in byid)
                return byid[ref];
            refs.push([parent, prop, ref]);
            return undefined;
        } else if ("$id" in obj) {
            let id = obj.$id;
            delete obj.$id;
            if ("$values" in obj)
                obj = obj.$values;
            byid[id] = obj;
        }
        
        if (Array.isArray(obj)) {
            obj = obj.map((v, i) => recurse(v, i, obj));
        } else {
            for (var p in obj) {
                if (obj.hasOwnProperty(p) && obj[p] && typeof obj[p] === 'object')
                    obj[p] = recurse(obj[p], p, obj);
            }
        }

        return obj;
    })(json);

    for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        ref[0][ref[1]] = byid[ref[2]];
    }

    return json;
}

function createInstance<T>(data: any, mappings: any, type: any): T | null {
  if (!mappings)
    mappings = [];
  if (!data)
    return null;

  const mappingIndexName = "__mappingIndex";
  if (data[mappingIndexName])
    return <T>mappings[data[mappingIndexName]].target;

  data[mappingIndexName] = mappings.length;

  let result: any = new type();
  mappings.push({ source: data, target: result });
  result.init(data, mappings);
  return result;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}