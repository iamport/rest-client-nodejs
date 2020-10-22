const _ = require('lodash');
const IamportIterator = require('../lib/IamportIterator');
const { Subscribe } = require('../lib/request');

/* 정기결제 */
module.exports = async (iamport) => {
  /* 빌링키 발급과 동시에 결제 */
  const onetime = Subscribe.onetime({
    merchant_uid: 'merchant_1448280088556',
    amount: 0,
    card_number: '1234-1234-1234-1234',
    expiry: '2020-10-10',
    birth: '111111',
    pwd_2digit: '11',
  });
  await onetime.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 빌링키로 재결제 */
  const again = Subscribe.again({
    merchant_uid: 'merchant_1448280088556',
    amount: 39000,
    customer_uid: 'cuid_1_1566960465326',
    name: '아임포트 결제 데이터 분석',
  });
  await again.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 예약 */
  const schedule = Subscribe.schedule({
    customer_uid: 'cuid_1_1566960465326',
    schedules: [
      {
        merchant_uid: 'mid_123456789',
        schedule_at: 1577750400,
        amount: 1004,
        name: '정기결제 예약 테스트',
        buyer_name: '홍길동',
        buyer_email: 'example@example.com',
        buyer_tel: '01012341234',
        buyer_addr: '신사동 661-16',
        buyer_postcode: '06018',
      },
    ],
  });
  await schedule.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 예약 취소 */
  const unschedule = Subscribe.unschedule({
    merchant_uid: 'merchant_1448280088556',
    customer_uid: 'cuid_1_1566960465326',
  });
  await unschedule.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제 예약 정보 조회 */
  const getScheduled = Subscribe.getScheduled({
    merchant_uid: 'merchant_1448280088556',
  });
  await getScheduled.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제 예약 내역 조회 */
  const getScheduleds = Subscribe.getScheduleds({
    customer_uid: 'cuid_1_1566960465326',
    page: 1,
    from: 1546300800,
    to: 1548892800,
    'schedule-status': 'scheduled',
  });
  let result = [];
  await getScheduleds.request(iamport)
  .then(async response => {
    result = _.concat(result, response.data.response.list);
    const iterator = new IamportIterator(getScheduleds);
    while(iterator.hasNext()) {
      await iterator.next(iamport)
      .then(response => {
        result = _.concat(result, response.data.response.list);
      })
      .catch(error => Promise.reject(error));
    }
    console.log('response: ', response.data.code)
  })
  .catch(error => console.log('error: ', error.response.data));
};
