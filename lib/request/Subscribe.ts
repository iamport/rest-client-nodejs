import _ from 'lodash';
import RequestBase from './Base';
import { PaymentResponse, ScheduledResultResponse } from '../response';
import { ScheduledStatusEnum } from '../enum';

import { MerchantUidParams } from '../Interfaces';

interface ScheduleInfo {
  merchant_uid: string,
  schedule_at: number,
  amount: number,
  currency?: string,
  tax_free?: number,
  name?: string,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  buyer_addr?: string,
  buyer_postcode?: string,
  custom_data?: string,
  notice_url?: string,
  // TODO: 타입을 더 구체적으로 명시하기
  extra?: { [key: string]: any } | any[],
};
interface onetimeData {
  merchant_uid: string,
  currency?: string,
  amount: number,
  tax_free?: number,
  card_number: string,
  expiry: string,
  birth: string,
  pwd_2digit?: string,
  cvc?: string,
  customer_uid?: string,
  pg?: string,
  name: string,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  buyer_addr?: string,
  buyer_postcode?: string,
  interest_free_by_merchant?: boolean,
  card_quota?: number,
  custom_data?: string,
  notice_url?: string,
  secure_3d_charge_id?: string,
  secure_3d_token?: string,
};
interface againData {
  customer_uid: string,
  merchant_uid: string,
  currency?: string,
  amount: number,
  tax_free?: number,
  name: string,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  buyer_addr?: string,
  buyer_postcode?: string,
  interest_free_by_merchant?: boolean,
  use_card_point?: boolean,
  card_quota?: number,
  custom_data?: string,
  notice_url?: string,
};
interface ScheduleData {
  customer_uid: string,
  checking_amount?: number,
  card_number?: string,
  expiry?: string,
  birth?: string,
  pwd_2digit?: string,
  cvc?: string,
  pg?: string,
  schedules: ScheduleInfo[],
};
interface UnscheduleData {
  customer_uid: string,
  merchant_uid?: string,
};
interface getScheduledParams {
  customer_uid: string,
  page?: number,
  from: number,
  to: number,
  'schedule-status': ScheduledStatusEnum,
};

/* 정기결제 */
class Subscribe extends RequestBase {
  constructor() {
    super();

    this.responseClass = new ScheduledResultResponse();
  }

  /* 빌링키 발급과 동시에 결제 */
  public static onetime(data: onetimeData): Subscribe {
    const subscribe = new Subscribe();
    subscribe.url = '/subscribe/payments/onetime';
    subscribe.method = 'POST';
    subscribe.data = data;
    subscribe.responseClass = new PaymentResponse();
    return subscribe;
  }

  /* 빌링키로 재결제 */
  public static again(data: againData): Subscribe {
    const subscribe = new Subscribe();
    subscribe.url = '/subscribe/payments/again';
    subscribe.method = 'POST';
    subscribe.data = data;
    subscribe.responseClass = new PaymentResponse();
    return subscribe;
  }

  /* 예약 */
  public static schedule(data: ScheduleData): Subscribe {
    const subscribe = new Subscribe();
    subscribe.url = '/subscribe/payments/schedule';
    subscribe.method = 'POST';
    subscribe.data = data;
    subscribe.responseType = 'list';
    return subscribe;
  }

  /* 예약 취소 */
  public static unschedule(data: UnscheduleData): Subscribe {
    const subscribe = new Subscribe();
    subscribe.url = '/subscribe/payments/unschedule';
    subscribe.method = 'POST';
    subscribe.data = data;
    subscribe.responseType = 'list';
    return subscribe;
  }

  /* 결제 예약 정보 조회 */
  public static getScheduled({ merchant_uid }: MerchantUidParams): Subscribe {
    const subscribe = new Subscribe();
    subscribe.url = `/subscribe/payments/schedule/${merchant_uid}`;
    return subscribe;
  }

  /* 결제 예약 내역 조회 */
  public static getScheduleds(params: getScheduledParams): Subscribe {
    const { customer_uid } = params;

    const subscribe = new Subscribe();
    subscribe.url = `/subscribe/payments/schedule/customers/${customer_uid}`;
    subscribe.params = _.omit(params, 'customer_uid');
    subscribe.responseType = 'collection';
    return subscribe;
  }
}

export default Subscribe;
