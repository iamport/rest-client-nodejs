const _ = require('lodash');
const RequestBase = require('./index');
const { NaverPayResponse } = require('../response');
const {
  DeliveryMethod,
  ReturnReason,
  DeliveryCompany,
  CancelReason,
} = require('../enum');

const deliveryMethodType = DeliveryMethod.getType();
const returnReasonType = ReturnReason.getType();
const deliveryCompanyType = DeliveryCompany.getType();
const cancelReasonType = CancelReason.getType();

interface CancelParams {
  imp_uid: string,
  product_order_id?: Array<string>,
  reason?: typeof cancelReasonType,
};

interface PlaceParams {
  imp_uid: string,
  product_order_id?: Array<string>,
};

interface requestReturnParams {
  imp_uid: string,
  product_order_id?: Array<string>,
  reason?: typeof returnReasonType,
  delivery_method: typeof deliveryMethodType,
  delivery_company?: typeof deliveryCompanyType,
  tracking_number?: string,
};

interface ProductOrderIdParams {
  imp_uid: string,
};

interface OrderDetailParams {
  product_order_id: string,
};

/* 네이버페이 */
class NaverPay extends RequestBase {
  constructor() {
    super();

    this.keepGoing = true;
    this.responseType = 'list';
    this.responseClass = new NaverPayResponse();
  }

  /* 결제취소 */
  public static cancel(params: CancelParams): NaverPay {
    const { imp_uid } = params;

    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/cancel`;
    naverpay.method = 'POST';
    naverpay.data = _.omit(params, ['imp_uid']);

    return naverpay;
  }

  /* 발주처리 */
  public static place(params: PlaceParams): NaverPay {
    const { imp_uid, product_order_id } = params;

    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/place`;
    naverpay.method = 'POST';
    naverpay.data = { product_order_id };

    return naverpay;
  }

  /* 반품요청 */
  public static requestReturn(params: requestReturnParams): NaverPay {
    const { imp_uid } = params;

    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/request-return`;
    naverpay.method = 'POST';
    naverpay.data = _.omit(params, ['imp_uid']);

    return naverpay;
  }

  /* 주문번호 조회 */
  public static getProductOrderId({ imp_uid }: ProductOrderIdParams): NaverPay {
    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/product-orders`;
    naverpay.keepGoing = false;

    return naverpay;
  }

  /* 주문내역 상세조회 */
  public static getOrderDetail({ product_order_id }: OrderDetailParams): NaverPay {
    const naverpay = new NaverPay();
    naverpay.url = `/naver/product-orders/${product_order_id}`;
    naverpay.responseType = 'item';

    return naverpay;
  }

  /**
   * 액션에 실패한 네이버페이 주문번호를 리턴
  */
  public async getFailedData(response: any): Promise<any> {
    return await this.getProductOrderId()
    .then((product_order_id: any) => {
      const succeed = response.map((orders: any) => orders.product_order_id);
      const failedData = _.difference(product_order_id, succeed);
      return failedData;
    })
    .catch((error: any) => Promise.reject(error));
  }

  /**
   * 요청에 네이버페이 주문번호가 있는 경우엔 리턴
   * 없는 경우엔 아임포트 번호에 대한 네이버페이 주문번호를 조회 결과를 리턴
  */
  private async getProductOrderId(): Promise<any> {
    const { product_order_id } = this.data;
    if (Array.isArray(product_order_id) && product_order_id.length === 0) {
      const [, imp_uid] = this.url.match('/(?<=/payments/)(.*)(?=/naver)/');

      return await NaverPay.getProductOrderId({ imp_uid })
      .then((response: any) => response.data.response.map((eachData: any) => eachData.product_order_id))
      .catch((error: any) => Promise.reject(error));
    }
    return product_order_id;
  }
}

export {};
module.exports = NaverPay;