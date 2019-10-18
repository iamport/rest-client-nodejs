import EnumBase from '.';

class PaycoOrderStatus extends EnumBase {
  public DELIVERY_START: string = 'DELIVERY_START';
  public PURCHASE_DECISION: string = 'PURCHASE_DECISION';
  public CANCELED: string = 'CANCELED';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'DELIVERY_START':
          return '배송시작/출고지시';
        case 'PURCHASE_DECISION':
          return '구매확정';
        case 'CANCELED':
          return '취소';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new PaycoOrderStatus();