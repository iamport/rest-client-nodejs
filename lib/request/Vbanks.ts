const RequestBase = require('./index');
const { PaymentResponse, VbankHolderResponse } = require('../response');
const { SettleVbankCode, BankCode } = require('../enum');

import { ImpUidParams } from '../../';

const settleVbankCodeType = SettleVbankCode.getType();
const BankCodeType = BankCode.getType();

interface PostData {
  merchant_uid: string,
  amount: number,
  vbank_code: typeof settleVbankCodeType,
  vbank_due: number,
  vbank_holder: string,
  name?: string,
  buyer_name?: string,
  buyer_email?: string,
  buyer_tel?: string,
  buyer_addr?: string,
  buyer_postcode?: string,
  pg?: string,
  notice_url?: Array<string>,
  custom_data?: string,
};
interface PutData {
  imp_uid: string,
  amount?: number,
  vbank_due?: number,
};
interface getHolderParams {
  bank_code: typeof BankCodeType,
  bank_num: string,
};

/* 가상계좌 */
class Vbanks extends RequestBase {
  constructor() {
    super();

    this.responseClass = new PaymentResponse();
  }

  /* 가상계좌 생성 */
  public static post(data: PostData): Vbanks {
    const vbanks = new Vbanks();
    vbanks.url = '/vbanks';
    vbanks.method = 'POST';
    vbanks.data = data;
    return vbanks;
  }

  /* 가상계좌 삭제 */
  public static delete({ imp_uid }: ImpUidParams): Vbanks {
    const vbanks = new Vbanks();
    vbanks.url = `/vbanks/${imp_uid}`;
    vbanks.method = 'DELETE';
    return vbanks;
  }

  /* 가상계좌 수정 */
  public static put(data: PutData): Vbanks {
    const vbanks = new Vbanks();
    const { imp_uid, amount, vbank_due } = data;
    vbanks.url = `/vbanks/${imp_uid}`;
    vbanks.method = 'PUT';
    vbanks.data = { amount, vbank_due };
    return vbanks;
  }

  /* 가상계좌 예금주 조회 */
  public static getHolder(params: getHolderParams): Vbanks {
    const vbanks = new Vbanks();
    vbanks.url = '/vbanks/holder';
    vbanks.params = params;
    vbanks.responseClass = new VbankHolderResponse();
    return vbanks;
  }
}

export {};
module.exports = Vbanks;
