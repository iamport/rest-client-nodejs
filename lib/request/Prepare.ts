import RequestBase from './Base';
import { PrepareResponse } from '../response';

interface PostData {
  merchant_uid: string,
  amount: number,
};
interface getParams {
  merchant_uid: string,
};

/* 결제 예정 금액 등록 및 조회 */
class Prepare extends RequestBase {
  constructor() {
    super();

    this.responseClass = new PrepareResponse();
  }

  /* 결제 예정 금액 등록 */
  public static postAmount(data: PostData): Prepare {
    const prepare = new Prepare();
    prepare.url = '/payments/prepare';
    prepare.method = 'POST';
    prepare.data = data;
    return prepare;
  }

  /* 결제 예정 금액 조회 */
  public static getAmount({ merchant_uid }: getParams): Prepare {
    const prepare = new Prepare();
    prepare.url = `/payments/prepare/${merchant_uid}`;
    return prepare;
  }
}

export default Prepare;
