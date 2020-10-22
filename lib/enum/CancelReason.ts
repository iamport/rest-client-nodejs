export enum CancelReasonEnum {
  PRODUCT_UNSATISFIED = 'PRODUCT_UNSATISFIED',
  DELAYED_DELIVERY = 'DELAYED_DELIVERY',
  SOLD_OUT = 'SOLD_OUT',
};

class CancelReason {
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
export default new CancelReason();