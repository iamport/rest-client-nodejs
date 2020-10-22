const { Kakao } = require('../lib/request');

/* 카카오 */
module.exports = async (iamport) => {
  /* 주문내역 조회 */
  const getOrders = Kakao.getOrders({
    payment_request_date: '20191010',
    page: 1,
  });
  await getOrders.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};
