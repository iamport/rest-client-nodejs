import _ from 'lodash';
import RequestBase from './Base';
import { ReceiptResponse } from '../response';
import { IdentifierTypeEnum, IdentifierForEnum } from '../enum';

import { ImpUidParams } from '../Interfaces';

interface postData {
  imp_uid: string,
  identifier: string,
  identifier_type?: IdentifierTypeEnum,
  type?: IdentifierForEnum,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  tax_free?: number,
};
/* 현금영수증 */
class Receipts extends RequestBase {
  constructor() {
    super();

    this.responseClass = new ReceiptResponse();
  }

  /* 발급 */
  public static postReceipt(data: postData): Receipts {
    const { imp_uid } = data;
    const receipts = new Receipts();
    receipts.url = `/receipts/${imp_uid}`;
    receipts.method = 'POST';
    receipts.data = _.omit(data, 'imp_uid');
    return receipts;
  }

  /* 조회 */
  public static getReceipt({ imp_uid }: ImpUidParams): Receipts {
    const receipts = new Receipts();
    receipts.url = `/receipts/${imp_uid}`;
    return receipts;
  }

  /* 삭제 */
  public static deleteReceipt({ imp_uid }: ImpUidParams): Receipts {
    const receipts = new Receipts();
    receipts.url = `/receipts/${imp_uid}`;
    receipts.method = 'DELETE';
    return receipts;
  }
}

export default Receipts;
