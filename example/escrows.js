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
  const postEscrows = Escrows.post({
    imp_uid: 'imp_448280090638',
    logis,
    sender,
    receiver,
  });
  await postEscrows.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));

  /* 배송정보 수정 */
  const putEscrwos = Escrows.put({
    imp_uid: 'imp_448280090638',
    logis,
    sender,
    receiver,
  });
  await putEscrwos.request(iamport)
  .then(response => console.log('response: ', response.data))
  .catch(error => console.log('error: ', error.response.data));
};
