export enum ScheduledStatusEnum {
  SCHEDULED = 'scheduled',
  EXECUTED = 'executed',
  REVOKED = 'revoked',
}

class ScheduledStatus {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'scheduled':
          return '정기결제 예약완료';
        case 'executed':
          return '예약된 정기결제 완료';
        case 'revoked':
          return '정기결제 예약취소';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new ScheduledStatus();