const axios = require('axios');
const qs = require('qs');

const { BASE_URL } = require('./constants');

import { Headers } from '../';

interface IamportProperties {
  apiKey: string,
  apiSecret: string,
};

interface RequestDataForGetToken {
  imp_key: string,
  imp_secret: string,
};

class Iamport {
  private apiKey: string;
  private apiSecret: string;
  private token: string;
  private apiInstance: any;

  constructor(properties: IamportProperties) {
    const { apiKey, apiSecret  } = properties;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;

    this.apiInstance = axios.create({
      baseURL: BASE_URL,
      paramsSerializer: (params: any) =>
        qs.stringify(params, { arrayFormat: 'brackets' }),
    });
  }

  public async request(spec: any): Promise<any> {
    const headers = await this.getHeaders();
    const config = { ...spec, headers };

    return this.apiInstance.request(config);
  }

  private async getHeaders(): Promise<Headers> {
    if (!this.isTokenValid()) {
      await this.getToken()
      .then(({ data }: any) => {
        const { access_token } = data.response;
        this.token = access_token;
      })
      .catch((error: any) => Promise.reject(error));
    } 

    return { Authorization: `Bearer ${this.token}` };
  }

  private getToken(): Promise<any> {
    const data: RequestDataForGetToken = {
      imp_key: this.apiKey,
      imp_secret: this.apiSecret,
    };
    return axios.post('https://api.iamport.kr/users/getToken', data);
  }

  private isTokenValid(): boolean {
    // TODO: 함께 내려오는 now값과 비교해 유효성 여부 체크
    if (this.token) {
      return true;
    }
    return false;
  }
}

export default Iamport;
module.exports = Iamport;
