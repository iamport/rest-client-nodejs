import EnumBase from '.';

class CancelReason extends EnumBase {
  public PRODUCT_UNSATISFIED: string = 'PRODUCT_UNSATISFIED';
  public DELAYED_DELIVERY: string = 'DELAYED_DELIVERY';
  public SOLD_OUT: string = 'SOLD_OUT';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'PRODUCT_UNSATISFIED':
          return '서비스 및 상품 불만족';
        case 'DELAYED_DELIVERY':
          return '배송 지연';
        case 'SOLD_OUT':
          return '상품 품절';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new CancelReason();