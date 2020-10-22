import _ from 'lodash';
import RequestBase from './Base';
import { ExternalResponse } from '../response';
import { IdentifierTypeEnum, IdentifierForEnum } from '../enum';

import { MerchantUidParams } from '../Interfaces';

interface postExternalData {
  merchant_uid: string,
  name: string,
  amount: number,
  identifier: string,
  identifier_type?: IdentifierTypeEnum,
  type?: IdentifierForEnum,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  tax_free?: number,
  pg?: string,
};

/* 아임포트 별개 현금 결제 */
class External extends RequestBase {
  constructor() {
    super();

    this.responseClass = new ExternalResponse();
  }

  /* 영수증 발급 */
  public static postReceipt(data: postExternalData): External {
    const { merchant_uid } = data;
    const external = new External();
    external.url = `/receipts/external/${merchant_uid}`;
    external.method = 'POST';
    external.data = _.omit(data, 'merchant_uid');
    return external;
  }

  /* 영수증 조회 */
  public static getReceipt({ merchant_uid }: MerchantUidParams): External {
    const external = new External();
    external.url = `/receipts/external/${merchant_uid}`;
    return external;
  }

  /* 영수증 삭제 */
  public static deleteReceipt({ merchant_uid }: MerchantUidParams): External {
    const external = new External();
    external.url = `/receipts/external/${merchant_uid}`;
    external.method = 'DELETE';
    return external;
  }
}

export default External;
