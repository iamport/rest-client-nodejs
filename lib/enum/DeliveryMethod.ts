import EnumBase from '.';

class DeliveryMethod extends EnumBase {
  public RETURN_DESIGNATED: string = 'RETURN_DESIGNATED';
  public RETURN_DELIVERY: string = 'RETURN_DELIVERY';
  public RETURN_INDIVIDUAL: string = 'RETURN_INDIVIDUAL';

  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'RETURN_DESIGNATED':
          return '지정 반품 택배(판매자 측에서 택배접수는 미리 해준 경우)';
        case 'RETURN_DELIVERY':
          return '일반 반품 택배';
        case 'RETURN_INDIVIDUAL':
          return '직접 반송';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}

module.exports = new DeliveryMethod();