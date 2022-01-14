export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface Headers {
  Authorization?: string,
  'User-Agent'?: string,
  Tier?: string,
}

export interface Config {
  url: string,
  method: Method,
  headers?: Headers,
  data: object,
  params: object,
}

export interface AxiosResponse {
  data: IamportData,
  response: {
    data: any,
  },
}

export interface IamportData {
  code: number,
  message?: string,
  response?: any,
}

export interface ImpUidParams {
  imp_uid: string,
}

export interface MerchantUidParams {
  merchant_uid: string,
}