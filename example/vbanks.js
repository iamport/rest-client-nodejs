import { Vbanks } from '../lib/request';

module.exports = async (iamport) => {
  /* 가상계좌 생성 */
  const postVbank = Vbanks.post({
    merchant_uid: `mid_1567151116054`,
    amount: 1000,
    vbank_code: '023',
    vbank_due: 1576108800,
    vbank_holder: '홍길동',
  });
  await postVbank.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 가상계좌 수정 */
  const putVbank = Vbanks.put({
    imp_uid: `imp_448280090638`,
    amount: 1000,
    vbank_due: 1576108800,
  });
  await putVbank.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 가상계좌 삭제 */
  const deleteVbank = Vbanks.delete({
    imp_uid: `imp_448280090638`,
  });
  await deleteVbank.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));

  /* 가상계좌 예금주 조회 */
  const getVbankHolder = Vbanks.getHolder({
    bank_code: '023',
    bank_num: '43220240353',
  });
  await getVbankHolder.request(iamport)
  .then(response => console.log('response: ', response.data.code))
  .catch(error => console.log('error: ', error.response.data));
};
