import _ from 'lodash';
import RequestBase from './Base';
import { NaverCashAmountResponse} from '../response';

import { ImpUidParams } from '../Interfaces';

/* 네이버페이 > 결제형 */
class NaverPay extends RequestBase {
 
  /* 포인트 적립 */
  public static postPoint({ imp_uid }: ImpUidParams): NaverPay {
    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/point`;
    naverpay.method = 'POST';

    return naverpay;
  }

  /* 에스크로 주문 확정 */
  public static postEscrow({ imp_uid }: ImpUidParams): NaverPay {
    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/confirm`;
    naverpay.method = 'POST';

    return naverpay;
  }

  /* 현금영수증 발급 가능 금액 조회 */
  public static getCashAmount({ imp_uid }: ImpUidParams): NaverPay {
    const naverpay = new NaverPay();
    naverpay.url = `/payments/${imp_uid}/naver/cash-amount`;
    naverpay.responseClass = new NaverCashAmountResponse();

    return naverpay;
  }
}

export default NaverPay;