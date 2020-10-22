const { Payco } = require('../lib/request');

/* 페이코 */
module.exports = async (iamport) => {
  /* 주문상태 변경 */
  const postOrderStatus = Payco.postOrderStatus({
    imp_uid: 'imp_461554376610',
    status: 'DELIVERY_START',
  });
  await postOrderStatus.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};
