import EnumBase from '.';

class ScheduledStatus extends EnumBase {
  public SCHEDULED: string = 'scheduled';
  public EXECUTED: string = 'executed';
  public REVOKED: string = 'revoked';

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

module.exports = new ScheduledStatus();