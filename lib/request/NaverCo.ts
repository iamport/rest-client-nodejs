import _ from 'lodash';
import RequestBase from './Base';
import { NaverProductOrderResponse, NaverReviewResponse } from '../response';
import {
  DeliveryMethodEnum,
  ReturnReasonEnum,
  DeliveryCompanyEnum,
  CancelReasonEnum,
  WithholdReturnReasonEnum,
} from '../enum';

import { ImpUidParams } from '../Interfaces';

interface CancelParams {
  imp_uid: string,
  product_order_id?: string[],
  reason?: CancelReasonEnum,
};
interface PlaceData {
  imp_uid: string,
  product_order_id?: string[],
};
interface ShipData {
  imp_uid: string,
  product_order_id?: string[],
  delivery_method: DeliveryMethodEnum,
  dispatched_at: number,
  delivery_company?: DeliveryCompanyEnum,
  tracking_number?: string,
};
interface RequestReturnData {
  imp_uid: string,
  product_order_id?: string[],
  reason?: ReturnReasonEnum,
  delivery_method: DeliveryMethodEnum,
  delivery_company?: DeliveryCompanyEnum,
  tracking_number?: string,
};
interface WithholdReturnData {
  imp_uid: string,
  product_order_id?: string[],
  reason?: WithholdReturnReasonEnum,
  memo: string,
  extra_charge: number,
};
interface RejectReturnData {
  imp_uid: string,
  product_order_id?: string[],
  memo: string,
};
interface ApproveReturnData {
  imp_uid: string,
  product_order_id?: string[],
  memo: string,
  extra_charge: number,
};
interface OrderDetailParams {
  product_order_id: string,
};
interface ReviewParams {
  from: number,
  to: number,
  review_type: 'general' | 'premium',
};

/* 네이버페이 > 주문형 */
class NaverCo extends RequestBase {
  constructor() {
    super();

    this.keepGoing = true;
    this.responseType = 'list';
    this.responseClass = new NaverProductOrderResponse();
  }

  /* 상품 발주 */
  public static place(data: PlaceData): NaverCo {
    const { imp_uid, product_order_id } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/place`;
    naverco.method = 'POST';
    naverco.data = { product_order_id };

    return naverco;
  }

  /* 상품 발송 */
  public static ship(data: ShipData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/ship`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }

  /* 교환 승인 상품 재발송 */
  public static shipExchanged(data: ShipData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/ship-exchanged`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }

  /* 상품 반품 요청 */
  public static requestReturn(data: RequestReturnData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/request-return`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }

  /* 상품 반품 보류 */
  public static withholdReturn(data: WithholdReturnData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/withhold-return`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }

  /* 상품 반품 보류 해제 */
  public static resolveReturn(data: PlaceData): NaverCo {
    const { imp_uid, product_order_id } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/resolve-return`;
    naverco.method = 'POST';
    naverco.data = { product_order_id }

    return naverco;
  }

  /* 상품 반품 거절 */
  public static rejectReturn(data: RejectReturnData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/reject-return`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }

  /* 상품 반품 승인 */
  public static approveReturn(data: ApproveReturnData): NaverCo {
    const { imp_uid } = data;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/approve-return`;
    naverco.method = 'POST';
    naverco.data = _.omit(data, 'imp_uid');

    return naverco;
  }
  
  /* 상품 환불 */
  public static cancel(params: CancelParams): NaverCo {
    const { imp_uid } = params;

    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/cancel`;
    naverco.method = 'POST';
    naverco.data = _.omit(params, 'imp_uid');

    return naverco;
  }

  /* 주문번호 조회 */
  public static getProductOrderIds({ imp_uid }: ImpUidParams): NaverCo {
    const naverco = new NaverCo();
    naverco.url = `/payments/${imp_uid}/naver/product-orders`;
    naverco.keepGoing = false;

    return naverco;
  }

  /* 주문내역 상세조회 */
  public static getOrderDetail({ product_order_id }: OrderDetailParams): NaverCo {
    const naverco = new NaverCo();
    naverco.url = `/naver/product-orders/${product_order_id}`;
    naverco.responseType = 'item';
    naverco.keepGoing = false;

    return naverco;
  }

  /* 구매평 조회 */
  public static getReviews(params: ReviewParams): NaverCo {
    const naverco = new NaverCo();
    naverco.url = '/naver/reviews';
    naverco.params = params;
    naverco.responseClass = new NaverReviewResponse();
    naverco.keepGoing = false;

    return naverco;
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

      return NaverCo.getProductOrderIds({ imp_uid });
    }
    return product_order_id;
  }
}

export default NaverCo;