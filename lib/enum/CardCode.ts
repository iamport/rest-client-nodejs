export enum CardCodeEnum {
  BC = '361',
  GWANG_JU = '364',
  SAMSUNG = '365',
  SHINHAN = '366',
  HYUNDAI = '367',
  LOTTE = '368',
  SH = '369',
  CITY = '370',
  NH = '371',
  JB = '372',
  JEJU = '373',
  HANA_SK = '374',
  KB = '381',
  WOORI = '041',
  POST_OFFICE = '071',
  VIS = 'VIS',
  MAS = 'MAS',
  DIN = 'DIN',
  AMX = 'AMX',
  JCB = 'JCB',
  UNI = 'UNI',
  DIS = 'DIS',
};

class CardCode {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case '361':
         return 'BC카드';
        case '364':
         return '광주카드';
        case '365':
         return '삼성카드';
        case '366':
         return '신한카드';
        case '367':
         return '현대카드';
        case '368':
         return '롯데카드';
        case '369':
         return '수협카드';
        case '370':
         return '씨티카드';
        case '371':
         return 'NH카드';
        case '372':
         return '전북카드';
        case '373':
         return '제주카드';
        case '374':
         return '하나SK카드';
        case '381':
         return 'KB국민카드';
        case '041':
         return '우리카드';
        case '071':
         return '우체국카드';
        case 'VIS':
         return '해외비자카드';
        case 'MAS':
         return '해외마스터카드';
        case 'DIN':
         return '해외다이너스카드';
        case 'AMX':
         return '해외아멕스카드';
        case 'JCB':
         return '해외JCB카드';
        case 'UNI':
         return '중국은련카드';
        case 'DIS':
         return '해외디스커버카드';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new CardCode();