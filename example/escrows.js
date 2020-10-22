const { Escrows } = require('../lib/request');

/* 배송정보 등록 */
const logis = {
  company: 'EPOST',
  invoice: '1110301285808',
  sent_at: 1567468800,
};
const sender = {
  name: '시옷',
  tel: '1670-5176',
  addr: '신사동 661-16',
  postcode: '06018',
};
const receiver = {
  name: '시옷',
  tel: '1670-5176',
  addr: '신사동 661-16',
  postcode: '06018',
};

module.exports = async (iamport) => {
  /* 배송정보 등록 */
  const postEscrow = Escrows.postEscrow({
    imp_uid: 'imp_436313381120',
    logis,
    sender,
    receiver,
  });
  await postEscrow.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 배송정보 수정 */
  const putEscrow = Escrows.putEscrow({
    imp_uid: 'imp_436313381120',
    logis,
    sender,
    receiver,
  });
  await putEscrow.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};
