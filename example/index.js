const Iamport = require('../lib/Iamport');

const [, , target, apiKey, apiSecret] = process.argv;

const iamport = new Iamport({
  apiKey: apiKey || 'imp_apikey', 
  apiSecret: apiSecret || 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f',
});

const TESTS = {
  enum: require('./enum'),
  escrows: require('./escrows'),
  naverpay: require('./naverpay'),
  payments: require('./payments'),
  prepare: require('./prepare'),
  vbanks: require('./vbanks'),
};

if (target) {
  if (Object.keys(TESTS).indexOf(target) === -1) {
    console.log('테스트 타깃이 올바르지 않습니다.');
  } else {
    TESTS[target](iamport);
  }
} else {
  console.log('테스트할 타깃을 입력해주세요. 예) yarn example payments');
}
