import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';

import * as Request from './request';
import * as Response from './response';
import * as Enum from './enum';

import { BASE_URL, EXPIRE_BUFFER, USER_AGENT } from './constants';
import { Headers } from './Interfaces';

interface IamportProperties {
  apiKey: string,
  apiSecret: string,
  baseUrl?: string,
};
interface RequestDataForGetToken {
  imp_key: string,
  imp_secret: string,
};
interface Token {
  access_token: string,
  now: number,
  expired_at: number,
};

export class Iamport {
  private baseUrl: string;
  private apiKey: string;
  private apiSecret: string;
  private token: Token;
  private apiInstance: any;

  constructor(properties: IamportProperties) {
    const { apiKey, apiSecret, baseUrl } = properties;
    this.baseUrl = baseUrl || BASE_URL;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;

    this.apiInstance = axios.create({
      baseURL: this.baseUrl,
      paramsSerializer: (params: any) =>
        qs.stringify(params, { arrayFormat: 'brackets' }),
    });
  }

  public getApiInstance(): any {
    return this.apiInstance;
  }

  public async getHeaders(): Promise<Headers> {
    if (!this.isTokenValid()) {
      await this.getToken()
      .then(({ data }: any) => {
        const { response } = data;
        this.token = _.assign({}, response);
      })
      .catch((error: any) => Promise.reject(error));
    } 

    const { access_token } = this.token;
    return {
      Authorization: `Bearer ${access_token}`,
      'User-Agent': USER_AGENT,
    };
  }

  private getToken(): Promise<any> {
    const data: RequestDataForGetToken = {
      imp_key: this.apiKey,
      imp_secret: this.apiSecret,
    };
    return axios.post(`${this.baseUrl}/users/getToken`, data);
  }

  private isTokenValid(): boolean {
    if (this.token && this.token.access_token) {
      const { expired_at } = this.token;
      // 토큰의 유효시각 > 가맹점 웹서버 시각 + 아임포트 서버와의 시차 고려한 버퍼 값(30초) 
      return expired_at * 1000 > new Date().getTime() + EXPIRE_BUFFER;
    }
    return false;
  }
}

export {
  Request,
  Response,
  Enum
}
