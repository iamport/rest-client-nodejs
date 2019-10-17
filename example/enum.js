const {
  Sorting,
  Status,
  DeliveryMethod,
  DeliveryCompany,
  ReturnReason,
  CancelReason,
} = require('../lib/enum');

module.exports = () => {
  console.log(Sorting.getKeys());
  console.log(Sorting.getValue('updated'));

  console.log(Status.getKeys());
  console.log(Status.getValue('paid'));

  console.log(DeliveryMethod.getKeys());
  console.log(DeliveryMethod.getValue('RETURN_DESIGNATED'));

  console.log(DeliveryCompany.getKeys());
  console.log(DeliveryCompany.getValue('CHUNIL'));

  console.log(ReturnReason.getKeys());
  console.log(ReturnReason.getValue('INTENT_CHANGED'));

  console.log(CancelReason.getKeys());
  console.log(CancelReason.getValue('PRODUCT_UNSATISFIED'));
};