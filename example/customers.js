const { Customers } = require('../lib/request');

/* 정기결제용 구매자 빌링키 */
module.exports = async (iamport) => {
  /* 빌링키 내역 조회 */
  const getBillingKeys = Customers.getBillingKeys({
    customer_uid: ['cuid_1_1566960465326'],
  });
  await getBillingKeys.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 빌링키 발급 및 등록 */
  const postBillingKey = Customers.postBillingKey({
    customer_uid: 'cuid_1_1566960465326',
    card_number: '1234-1234-1234-1234',
    expiry: '2011-11-11',
    birth: 111111,
    pwd_2digit: 11
  });
  await postBillingKey.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 빌링키 정보 조회 */
  const getBillingKey = Customers.getBillingKey({
    customer_uid: 'cuid_1_1566960465326',
  });
  await getBillingKey.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 빌링키 삭제 */
  const deleteBillingKey = Customers.deleteBillingKey({
    customer_uid: 'cuid_1_1566960465326',
  });
  await deleteBillingKey.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 빌링키로 결제 된 결제내역 조회 */
  const getPayments = Customers.getPayments({
    customer_uid: 'cuid_1_1566960465326',
    page: 1,
  });
  await getPayments.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 결제 예약 내역 조회  */
  const getScheduleds = Customers.getScheduleds({
    customer_uid: 'cuid_1_1566960465326',
    page: 1,
    from: 1546300800,
    to: 1548892800,
    'schedule-status': 'scheduled',
  });
  await getScheduleds.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));
};
