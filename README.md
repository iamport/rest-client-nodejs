# iamport-rest-client-nodejs
[ ![alt text](https://img.shields.io/badge/axios-v0.19.0-orange.svg?longCache=true&style=flat-square) ](https://github.com/axios/axios)
[ ![alt text](https://img.shields.io/badge/lodash-v4.17.15-yellow.svg?longCache=true&style=flat-square) ](https://github.com/lodash/lodash)
[ ![alt text](https://img.shields.io/badge/qs-v6.9.0-green.svg?longCache=true&style=flat-square) ](https://github.com/ljharb/qs)

NodeJS용 아임포트 REST API Client 입니다.

## 버전정보
최신 버전은 [v0.9.11](https://github.com/iamport/rest-client-nodejs/tree/v0.9.11)입니다.

## 설치하기
아래 명령어를 통해 `iamport-rest-client-nodejs`를 귀하의 nodeJS 프로젝트에 추가합니다.

```
$ npm install iamport-rest-client-nodejs
```

## API 호출하기
아래는 `iamport-rest-client-nodejs`를 활용해 은행 정보 조회 API를 호출하는 예제 코드입니다. 

```javascript
// 1. 아임포트 REST API 호출에 필요한 모듈을 불러옵니다.
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
const { Banks } = Request;
const { BankCodeEnum } = Enum;

// 2. 아임포트 객체를 생성합니다. 귀하의 API 정보는 아임포트 관리자페이지 > 시스템설정 > 내정보를 참고해주세요.
const iamport = new Iamport({
  apiKey: '귀하의_REST_API_KEY를_입력해주세요', 
  apiSecret: '귀하의_REST_API_SECRET_KEY를_입력해주세요',
});

// EX1. 모든 은행 정보를 조회합니다.
const getBanks = Banks.getBanks();
getBanks.request(iamport)
.then(response => console.log('response: ', response.data))
.catch(error => console.log('error: ', error.response.data));

// EX2. 특정 은행 정보를 조회합니다.
const getBank = Banks.getBank({
  code: BankCodeEnum.SC,
});
await getBank.request(iamport)
.then(response => console.log('response: ', response.data))
.catch(error => console.log('error: ', error.response.data));

```


## 테스트하기
프로젝트를 클론 받은 후 필요한 모듈을 설치합니다. yan example 명령어를 통해 테스트할 타깃, `REST API 키` 그리고 `REST API SECRET 키`를 입력합니다.

```
$ git clone https://github.com/SoleeChoi/iamport-rest-client-nodejs.git
$ cd ./iamport-rest-client-nodejs
$ npm install
$ yarn example [테스트 타깃] [apiKey] [apiSecret]
```

테스트 타깃의 종류는 아래와 같습니다.

| 타깃            | 내용                        |
| -------------- | -------------------------- |
| authenticate   | 사용자 인증 테스트              |
| payments       | 일반결제 테스트                |
| prepare        | 결제 예정 금액 등록 및 조회 테스트 |
| escrows        | 에스크로 결제 테스트            |
| vbanks         | 가상계좌 테스트                |
| subscribe      | 정기결제 테스트                |
| customers      | 빌링키 테스트                 |
| payco          | 페이코 테스트                 |
| kakao          | 카카오페이 테스트              |
| naverco        | 네이버페이 주문형 테스트         |
| naverpay       | 네이버페이 결제형 테스트         |
| receipts       | 현금영수증 테스트              |
| external       | 현금결제 영수증 테스트          |
| certifications | 휴대폰 본인인증 테스트          |
| cards          | 금융결제원 카드사 코드 테스트     |
| banks          | 금융결제원 은행 코드 테스트      |
| enum           | ENUM 테스트                 |

`REST API 키`와 `REST API SECRET 키`는 아임포트 관리자페이지 > 시스템 설정 > 내정보에서 확인하실 수 있습니다. 자세한 정보는 [가맹점 정보 확인하기](https://docs.iamport.kr/implementation/account-info)를 참고해주세요.
미입력시 아임포트 테스트용 `REST API 키`와 `REST API SECRET 키`로 테스트가 진행됩니다.

테스트 예시는 아래와 같습니다.

```
$ npm install
$ yarn example payments imp_apikey ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f
```
