# iamport-rest-client-nodejs
[ ![alt text](https://img.shields.io/badge/axios-v0.19.0-orange.svg?longCache=true&style=flat-square) ](https://github.com/axios/axios)
[ ![alt text](https://img.shields.io/badge/lodash-v4.17.15-yellow.svg?longCache=true&style=flat-square) ](https://github.com/lodash/lodash)
[ ![alt text](https://img.shields.io/badge/qs-v6.9.0-green.svg?longCache=true&style=flat-square) ](https://github.com/ljharb/qs)

NodeJS용 아임포트 REST API Client 입니다.

## 설치하기
```
  npm install iamport-rest-client-nodejs
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

| 타깃       | 내용                        |
| --------- | -------------------------- |
| payments  | 일반결제 테스트                |
| prepare   | 결제 예정 금액 등록 및 조회 테스트 |
| escrows   | 에스크로 결제 테스트            |
| vbanks    | 가상계좌 테스트                |
| naverpay  | 네이버페이 주문형 테스트         |

`REST API 키`와 `REST API SECRET 키`는 아임포트 관리자페이지 > 시스템 설정 > 내정보에서 확인하실 수 있습니다. 자세한 정보는 [가맹점 정보 확인하기](https://docs.iamport.kr/implementation/account-info)를 참고해주세요.

테스트 예시는 아래와 같습니다.

```
  $ npm install
  $ yarn example payments imp_apikey ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f
```
