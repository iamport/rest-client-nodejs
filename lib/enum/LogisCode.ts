export enum LogisCodeEnum {
  LOGEN = 'LOGEN',
  KOREX = 'KOREX',
  HYUNDAI = 'HYUNDAI',
  HANARO = 'HANARO',
  SAGAWA = 'SAGAWA',
  KGB = 'KGB',
  YELLOWCAP = 'YELLOWCAP',
  DONGBU = 'DONGBU',
  EPOST = 'EPOST',
  CJGLS = 'CJGLS',
  HANJIN = 'HANJIN',
  ETC = 'ETC',
};

class LogisCode {
  public getValue(key: string): string {
    if (key) {
      switch (key) {
        case 'LOGEN':
          return '로젠택배';
        case 'KOREX':
          return '대한통운';
        case 'HYUNDAI':
          return '현대택배';
        case 'HANARO':
          return '하나로택배';
        case 'SAGAWA':
          return 'SC로지스';
        case 'KGB':
          return 'KGB택배';
        case 'YELLOWCAP':
          return '옐로우캡';
        case 'DONGBU':
          return '동부택배';
        case 'EPOST':
          return '우체국택배';
        case 'CJGLS':
          return 'CJGLS';
        case 'HANJIN':
          return '한진택배';
        case 'ETC':
          return '기타(위 코드표에 해당되지 않는 값이 전달되면 ETC로 자동 처리됩니다)';
        default:
          throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
      }
    }
    throw new Error('key값을 입력해주세요.');
  }
}
export default new LogisCode();