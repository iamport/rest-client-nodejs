import EnumBase from '.';

class WithholdReturnReason extends EnumBase {
  public RETURN_DELIVERYFEE: string = 'RETURN_DELIVERYFEE';
  public EXTRAFEEE: string = 'EXTRAFEEE';
  public RETURN_DELIVERYFEE_AND_EXTRAFEEE: string = 'RETURN_DELIVERYFEE_AND_EXTRAFEEE';
  public RETURN_PRODUCT_NOT_DELIVERED: string = 'RETURN_PRODUCT_NOT_DELIVERED';
  public ETC: string = 'ETC';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'RETURN_DELIVERYFEE':
          return '반품 배송비 청구';
        case 'EXTRAFEEE':
          return '기타 반품 비용 청구';
        case 'RETURN_DELIVERYFEE_AND_EXTRAFEEE':
          return '반품 배송비 및 기타 반품 비용 청구';
        case 'RETURN_PRODUCT_NOT_DELIVERED':
          return '반품 상품 미입고';
        case 'ETC':
          return '기타 사유';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new WithholdReturnReason();