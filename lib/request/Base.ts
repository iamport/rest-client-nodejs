import _ from 'lodash';
import { List, Item, Collection } from '../response';

import { Iamport } from '../Iamport';
import { Method, Config, AxiosResponse, Headers } from '../Interfaces';

class RequestBase {
  public url: string;
  public method: Method = 'GET';
  public headers: Headers = {};
  public params: any;
  public data: any;
  public responseType: string = 'item';
  public responseClass: any;
  public keepGoing: boolean = false; // 207에 대한 대응 여부
  public isLast: boolean = false; // collection 유형의 응답일때, next가 0인지 여부
  public isTokenNeeded: boolean = true; // 토큰 필요 여부

  public async request(iamport: Iamport): Promise<AxiosResponse> {
    const config: Config = {
      url: this.url,
      method: this.method,
      params: this.params,
      data: this.data,
    };
    if (Object.keys(this.headers).length > 0) {
      config.headers = { ...this.headers };
    }
    if (this.isTokenNeeded) {
      config.headers = {
        ...config.headers,
        ...await iamport.getHeaders(),
      };
    }

    return iamport.getApiInstance().request(config)
      .then(async (instanceResponse: any) => {
        const { data } = instanceResponse;
        const { code } = data;

        if (code === 0) {
          const response = await this.getResponse(instanceResponse);
          return Promise.resolve(response);
        }

        /**
         * TODO
         * axios 에러가 발생한 경우, typeof error = AxiosError
         * axios는 성공했지만 code가 0이 아닌 경우, typeof error = IamportError
         * 두 type을 맞추기 위해 아래와 같은 코드 작성
         */ 
        return Promise.reject({
          response: {
            data,
          },
        });
      })
      .catch((error: AxiosResponse) => {
        return Promise.reject(error);
      });
  }

  private async getResponse(instanceResponse: any): Promise<any> {
    const { data, status } = instanceResponse;
    const { response } = data;
    const responseData = this.getResponseData(data);

    if (status === 207 && this.keepGoing) {
      await this.getFailedData(response)
      .then((failedData: any) => responseData.failed = failedData)
      .catch((error: any) => {
        /**
         * TODO: failedData 조회 실패시 로직
         * API콜 전체에 대해 ERROR 처리 또는
         * getFailedData에 대한 실패 메시지 전달
         */
        return Promise.reject(error);
      });
    }

    return _.assign(instanceResponse, { data: responseData });
  }

  private getResponseData(response: any): any {
    switch (this.responseType) {
      case 'list': {
        return new List(response, this.responseClass);
      }
      case 'collection': {
        this.isLast = response.response.next === 0;
        return new Collection(response, this.responseClass);
      }
      default: {
        return new Item(response, this.responseClass);
      }
    }
  }

  protected async getFailedData(response: any): Promise<any> {
    return [];
  }
}
export default RequestBase;