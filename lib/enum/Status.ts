export enum StatusEnum {
  ALL = 'all',
  PAID = 'paid',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  READY = 'ready',
};

class Status {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'all':
          return '전체';
        case 'paid':
            return '결제완료';
        case 'failed':
            return '결제실패';
        case 'cancelled':
            return '결제취소';
        case 'ready':
            return '미결제';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new Status();