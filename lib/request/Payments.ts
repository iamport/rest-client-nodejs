import _ from 'lodash';
import RequestBase from './Base';
import { PaymentResponse, PaymentAmountResponse } from '../response';
import { StatusEnum, SortingEnum } from '../enum';

import { ImpUidParams, Headers } from '../Interfaces';
import {RequireAtLeastOne} from "../typeUtil";

interface ImpUidsParams {
  imp_uid: string[],
};
interface MerchantUidsParams {
  merchant_uid: string,
  status: StatusEnum,
  sorting: SortingEnum,
  page: number,
};
interface StatusParams {
  status: StatusEnum,
  page: number,
  limit: number,
  from: number,
  to: number,
  sorting: SortingEnum,
};
interface MerchantUidParams {
  merchant_uid: string,
  status: StatusEnum,
  sorting: SortingEnum,
};

interface CancelRequest {
  /**
   * 환불 unique key(imp_uid 또는 merchant_id)
   * imp_uid의 값이 우선순위를 갖게되며 유효하지 않는 imp_uid값을 입력하면 merchant_uid값과 무관하게 환불요청이 실패합니다
   */
  imp_uid?: string,
  /**
   * 환불 unique key(imp_uid 또는 merchant_id)
   * imp_uid의 값이 우선순위를 갖게되며 유효하지 않는 imp_uid값을 입력하면 merchant_uid값과 무관하게 환불요청이 실패합니다
   */
  merchant_uid?: string,
  /**
   * 환불 금액(amount)
   * 요청한 환불금액을 입력합니다. 미입력시 전액이 환불됩니다.
   */
  amount?: number,
  tax_free?: number,
  /**
   * 환불 가능 금액(checksum)
   */
  checksum?: number,
  /**
   * 환불 사유
   */
  reason?: string,
  /**
   * 가상계좌 환불 수령계좌 예금주
   */
  refund_holder?: string,
  /**
   * 가상계좌 환불 수령계좌 은행코드
   */
  refund_bank?: string,
  /**
   * 가상계좌 환불 수령계좌 번호
   */
  refund_account?: string,
};

type CancelData = RequireAtLeastOne<CancelRequest,'imp_uid'|'merchant_uid'>


/* 일반결제 */
class Payments extends RequestBase {
  constructor() {
    super();

    this.responseClass = new PaymentResponse();
  }

  /* 결제내역 조회 > 아임포트 번호 */
  public static getByImpUids(params: ImpUidsParams): Payments {
    const payments = new Payments();
    payments.url = '/payments';
    payments.params = params;
    payments.responseType = 'list';
    payments.keepGoing = true;
    return payments;
  }

  /* 결제내역 조회 > 주문 번호 */
  public static getByMerchantUids(params: MerchantUidsParams): Payments {
    const { merchant_uid, status, page, sorting } = params;

    const payments = new Payments();
    payments.url = `/payments/findAll/${merchant_uid}/${status}`;
    payments.params = { page, sorting };
    payments.responseType = 'collection';
    return payments;
  }

  /* 결제내역 조회 > 결제 상태 */
  public static getByStatus(params: StatusParams): Payments {
    const { status } = params;

    const payments = new Payments();
    payments.url = `/payments/status/${status}`;
    payments.params = _.omit(params, 'status');
    payments.responseType = 'collection';
    return payments;
  }

  /* 결제정보 조회 > 아임포트 번호 */
  public static getByImpUid({ imp_uid }: ImpUidParams, headers?: Headers): Payments {
    const payments = new Payments();
    payments.url = `/payments/${imp_uid}`;
    if (headers && typeof headers === 'object' && !Array.isArray(headers) && Object.keys(headers).length !== 0) {
      // 티어 결제 건 조회 용도
      payments.headers = { ...headers };
    }
    return payments;
  }

  /* 결제정보 조회 > 주문 번호 */
  public static getByMerchantUid(params: MerchantUidParams): Payments {
    const { merchant_uid, status, sorting } = params;

    const payments = new Payments();
    payments.url = `/payments/find/${merchant_uid}/${status}`;
    payments.params = { sorting };
    return payments;
  }

  /* 결제금액 조회 > 아임포트 번호 */
  public static getAmountByImpUid({ imp_uid }: ImpUidParams): Payments {
    const payments = new Payments();
    payments.url = `/payments/${imp_uid}/balance`;
    payments.responseClass = new PaymentAmountResponse();
    return payments;
  }

  /* 결제취소 */
  public static cancel(data: CancelData): Payments {
    const payments = new Payments();
    payments.url = '/payments/cancel';
    payments.method = 'POST';
    payments.data = data;
    return payments;
  }

  public async getFailedData(response: any): Promise<any> {
    const { imp_uid } = this.params;
    const succeed = response.map((payment: any) => payment.imp_uid);
    return _.difference(imp_uid, succeed);
  }
}

export default Payments;
