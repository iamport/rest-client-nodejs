import _ from 'lodash';
import RequestBase from './Base';
import { KakaoOrderResponse } from '../response';

interface getParams {
  payment_request_date: string,
  cid?: string,
  page?: number,
};

/* 카카오페이 */
class Kakao extends RequestBase {
  constructor() {
    super();

    this.responseClass = new KakaoOrderResponse();
  }

  /* 포인트 적립 */
  public static getOrders(params: getParams): Kakao {
    const kakao = new Kakao();
    kakao.url = '/kakao/payment/orders';
    kakao.params = params;
    return kakao;
  }
}

export default Kakao;