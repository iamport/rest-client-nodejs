export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface Headers {
  Authorization: string,
}

export interface Spec {
  url: string,
  method?: Method,        // default: GET
  data?: object,
  params?: object,
  responseType?: string,  // default: Item
  responseClass: any,
}

export interface Config {
  url: string,
  method: Method,
  headers: Headers,
  data: object,
  params: object,
}

export interface AxiosResponse {
  response: {
    data: IamportData,
  },
}

export interface IamportData {
  code: number,
  message?: string,
  response?: any,
}

