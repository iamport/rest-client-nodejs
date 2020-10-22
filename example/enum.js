const {
  Base,
  SortingEnum,
  StatusEnum,
  DeliveryMethodEnum,
  DeliveryCompanyEnum,
  ReturnReasonEnum,
  CancelReasonEnum,
  CardCodeEnum,
  BankCodeEnum,
  SettleVbankCodeEnum,
  IdentifierTypeEnum,
  IdentifierForEnum,
  KakaoOrderStatusEnum,
  LogisCodeEnum,
  PaycoOrderStatusEnum,
  ScheduledStatusEnum,
  WithholdReturnReasonEnum,
} = require('../lib/enum');

module.exports = () => {
  console.log(Object.keys(SortingEnum));
  console.log(Base.getSortingValue('updated'));

  console.log(Object.keys(StatusEnum));
  console.log(Base.getStatusValue('paid'));

  console.log(Object.keys(DeliveryMethodEnum));
  console.log(Base.getDeliveryMethodValue('RETURN_DESIGNATED'));

  console.log(Object.keys(DeliveryCompanyEnum));
  console.log(Base.getDeliveryCompanyValue('CHUNIL'));

  console.log(Object.keys(ReturnReasonEnum));
  console.log(Base.getReturnReasonValue('INTENT_CHANGED'));

  console.log(Object.keys(CancelReasonEnum));
  console.log(Base.getCancelReasonValue('PRODUCT_UNSATISFIED'));

  console.log(Object.keys(CardCodeEnum));
  console.log(Base.getCardCodeValue('361'));

  console.log(Object.keys(BankCodeEnum));
  console.log(Base.getBankCodeValue('023'));

  console.log(Object.keys(SettleVbankCodeEnum));
  console.log(Base.getSettleVbankCodeValue('003'));

  console.log(Object.keys(IdentifierTypeEnum));
  console.log(Base.getIdentifierTypeValue('person'));

  console.log(Object.keys(IdentifierForEnum));
  console.log(Base.getIdentifierForValue('person'));

  console.log(Object.keys(KakaoOrderStatusEnum));
  console.log(Base.getKakaoOrderStatusValue('CANCEL_PAYMENT'));

  console.log(Object.keys(LogisCodeEnum));
  console.log(Base.getLogisCodeValue('YELLOWCAP'));

  console.log(Object.keys(PaycoOrderStatusEnum));
  console.log(Base.getPaycoOrderStatusValue('PURCHASE_DECISION'));

  console.log(Object.keys(ScheduledStatusEnum));
  console.log(Base.getScheduledStatusValue('revoked'));

  console.log(Object.keys(WithholdReturnReasonEnum));
  console.log(Base.getWithholdReturnReasonValue('RETURN_DELIVERYFEE'));
};