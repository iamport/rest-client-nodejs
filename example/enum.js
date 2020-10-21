import {
  Sorting,
  Status,
  DeliveryMethod,
  DeliveryCompany,
  ReturnReason,
  CancelReason,
  CardCode,
  BankCode,
  SettleVbankCode,
  IdentifierType,
  IdentifierFor,
  KakaoOrderStatus,
  LogisCode,
  PaycoOrderStatus,
  ScheduledStatus,
  WithholdReturnReason,
} from '../lib/enum';

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

  console.log(CardCode.getKeys());
  console.log(CardCode.getValue('361'));

  console.log(BankCode.getKeys());
  console.log(BankCode.getValue('023'));

  console.log(SettleVbankCode.getKeys());
  console.log(SettleVbankCode.getValue('003'));

  console.log(IdentifierType.getKeys());
  console.log(IdentifierType.getValue('person'));

  console.log(IdentifierFor.getKeys());
  console.log(IdentifierFor.getValue('person'));

  console.log(KakaoOrderStatus.getKeys());
  console.log(KakaoOrderStatus.getValue('CANCEL_PAYMENT'));

  console.log(LogisCode.getKeys());
  console.log(LogisCode.getValue('YELLOWCAP'));

  console.log(PaycoOrderStatus.getKeys());
  console.log(PaycoOrderStatus.getValue('PURCHASE_DECISION'));

  console.log(ScheduledStatus.getKeys());
  console.log(ScheduledStatus.getValue('revoked'));

  console.log(WithholdReturnReason.getKeys());
  console.log(WithholdReturnReason.getValue('RETURN_DELIVERYFEE'));
};