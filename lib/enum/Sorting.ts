export enum SortingEnum {
  STARTED_ASC = 'started',
  STARTED_DESC = '-started',
  PAID_ASC = 'paid',
  PAID_DESC = '-paid',
  UPDATED = 'updated',
  UPDATED_DESC = '-updated',
};

class Sorting {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'started':
          return '결제시작시각(결제창오픈시각) 기준 오름차순(ASC) 정렬';
        case '-started':
          return '결제시작시각(결제창오픈시각) 기준 내림차순(DESC) 정렬';
        case 'paid':
          return '결제완료시각 기준 오름차순(ASC) 정렬';
        case '-paid':
          return '결제완료시각 기준 내림차순(DESC) 정렬';
        case 'updated':
          return '최종수정시각(결제건 상태변화마다 수정시각 변경됨) 기준오름차순(ASC) 정렬';
        case '-updated':
          return '최종수정시각(결제건 상태변화마다 수정시각 변경됨) 기준내림차순(DESC) 정렬';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new Sorting();