const Iamport = require('../lib/Iamport');

const [, , target, apiKey, apiSecret] = process.argv;

const iamport = new Iamport({
  apiKey: apiKey || 'imp_apikey', 
  apiSecret: apiSecret || 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f',
});

const TESTS = {
  authenticate: require('./authenticate'),
  payments: require('./payments'),
  prepare: require('./prepare'),
  vbanks: require('./vbanks'),
  escrows: require('./escrows'),
  receipts: require('./receipts'),
  external: require('./external'),
  kakao: require('./kakao'),
  payco: require('./payco'),
  naverco: require('./naverco'),
  naverpay: require('./naverpay'),
  subscribe: require('./subscribe'),
  customers: require('./customers'),
  certifications: require('./certifications'),
  cards: require('./cards'),
  banks: require('./banks'),
  enum: require('./enum'),
};

const TARGETS = Object.keys(TESTS);
const TARGETS_TO_STRING = TARGETS.join(', ');
if (target) {
  if (TARGETS.indexOf(target) === -1) {
    console.log('테스트 타깃이 올바르지 않습니다.');
    console.log(`테스트 타깃 : ${TARGETS_TO_STRING}`);
  } else {
    TESTS[target](iamport);
  }
} else {
  console.log('테스트할 타깃을 입력해주세요.');
  console.log(`테스트 타깃 : ${TARGETS_TO_STRING}`);
  console.log('예) yarn example payments');
}
