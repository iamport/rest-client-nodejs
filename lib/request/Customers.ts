import _ from 'lodash';
import RequestBase from './Base';
import {
  CustomerResponse,
  PaymentResponse,
  ScheduledResultResponse,
} from '../response';
import { ScheduledStatusEnum } from '../enum';

interface BillingKeysParams {
  customer_uid: string[],
};
interface PostBillingKeyData {
  customer_uid: string,
  pg?: string,
  card_number: string,
  expiry: string,
  birth: string,
  pwd_2digit?: string,
  customer_name: string,
  customer_tel: string,
  customer_email: string,
  customer_addr: string,
  customer_postcode: string,
};
interface CustomerUidParams {
  customer_uid: string,
};
interface GetPaymentsParams {
  customer_uid: string,
  page?: number,
};
interface GetScheduledsParams {
  customer_uid: string,
  page?: number,
  from: number,
  to: number,
  'schedule-status': ScheduledStatusEnum,
};

/* 정기결제용 구매자 빌링키 */
class Customers extends RequestBase {
  constructor() {
    super();

    this.responseClass = new CustomerResponse();
  }

  /* 빌링키 내역 조회 */
  public static getBillingKeys(params: BillingKeysParams): Customers {
    const customers = new Customers();
    customers.url = '/subscribe/customers';
    customers.params = params;
    customers.responseType = 'list';
    return customers;
  }

  /* 빌링키 발급 및 등록 */
  public static postBillingKey(data: PostBillingKeyData): Customers {
    const { customer_uid } = data;
    const customers = new Customers();
    customers.url = `/subscribe/customers/${customer_uid}`;
    customers.method = 'POST';
    customers.data = _.omit(data, 'customer_uid');
    return customers;
  }

  /* 빌링키 정보 조회 */
  public static getBillingKey({ customer_uid }: CustomerUidParams): Customers {
    const customers = new Customers();
    customers.url = `/subscribe/customers/${customer_uid}`;
    return customers;
  }

  /* 빌링키 삭제 */
  public static deleteBillingKey({ customer_uid }: CustomerUidParams): Customers {
    const customers = new Customers();
    customers.url = `/subscribe/customers/${customer_uid}`;
    customers.method = 'DELETE';
    return customers;
  }

  /* 빌링키로 결제 된 결제내역 조회 */
  public static getPayments(params: GetPaymentsParams): Customers {
    const { customer_uid, page } = params;
    const customers = new Customers();
    customers.url = `/subscribe/customers/${customer_uid}/payments`;
    customers.params = { page };
    customers.responseType = 'collection';
    customers.responseClass = new PaymentResponse();
    return customers;
  }

  /* 결제 예약 내역 조회  */
  public static getScheduleds(params: GetScheduledsParams): Customers {
    const { customer_uid } = params;
    const customers = new Customers();
    customers.url = `/subscribe/customers/${customer_uid}/schedules`;
    customers.params = _.omit(params, 'customer_uid');
    customers.responseType = 'collection';
    customers.responseClass = new ScheduledResultResponse();
    return customers;
  }
}

export default Customers;
