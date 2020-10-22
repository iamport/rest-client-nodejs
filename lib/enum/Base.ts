import Sorting, { SortingEnum } from './Sorting';
import Status, { StatusEnum } from './Status';
import DeliveryMethod, { DeliveryMethodEnum } from './DeliveryMethod';
import DeliveryCompany, { DeliveryCompanyEnum } from './DeliveryCompany';
import ReturnReason, { ReturnReasonEnum } from './ReturnReason';
import CancelReason, { CancelReasonEnum } from './CancelReason';
import SettleVbankCode, { SettleVbankCodeEnum } from './SettleVbankCode';
import BankCode, { BankCodeEnum } from './BankCode';
import LogisCode, { LogisCodeEnum } from './LogisCode';
import CardCode, { CardCodeEnum } from './CardCode';
import IdentifierType, { IdentifierTypeEnum } from './IdentifierType';
import IdentifierFor, { IdentifierForEnum } from './IdentifierFor';
import KakaoOrderStatus, { KakaoOrderStatusEnum } from './KakaoOrderStatus';
import PaycoOrderStatus, { PaycoOrderStatusEnum } from './PaycoOrderStatus';
import WithholdReturnReason, { WithholdReturnReasonEnum } from './WithholdReturnReason';
import ScheduledStatus, { ScheduledStatusEnum } from './ScheduledStatus';

abstract class EnumBase {
  public static getSortingValue(key: SortingEnum): string {
    return Sorting.getValue(key);
  }

  public static getStatusValue(key: StatusEnum): string {
    return Status.getValue(key);
  }

  public static getDeliveryMethodValue(key: DeliveryMethodEnum): string {
    return DeliveryMethod.getValue(key);
  }

  public static getDeliveryCompanyValue(key: DeliveryCompanyEnum): string {
    return DeliveryCompany.getValue(key);
  }

  public static getReturnReasonValue(key: ReturnReasonEnum): string {
    return ReturnReason.getValue(key);
  }

  public static getCancelReasonValue(key: CancelReasonEnum): string {
    return CancelReason.getValue(key);
  }

  public static getSettleVbankCodeValue(key: SettleVbankCodeEnum): string {
    return SettleVbankCode.getValue(key);
  }

  public static getBankCodeValue(key: BankCodeEnum): string {
    return BankCode.getValue(key);
  }

  public static getLogisCodeValue(key: LogisCodeEnum): string {
    return LogisCode.getValue(key);
  }

  public static getCardCodeValue(key: CardCodeEnum): string {
    return CardCode.getValue(key);
  }

  public static getIdentifierTypeValue(key: IdentifierTypeEnum): string {
    return IdentifierType.getValue(key);
  }

  public static getIdentifierForValue(key: IdentifierForEnum): string {
    return IdentifierFor.getValue(key);
  }

  public static getKakaoOrderStatusValue(key: KakaoOrderStatusEnum): string {
    return KakaoOrderStatus.getValue(key);
  }

  public static getPaycoOrderStatusValue(key: PaycoOrderStatusEnum): string {
    return PaycoOrderStatus.getValue(key);
  }

  public static getWithholdReturnReasonValue(key: WithholdReturnReasonEnum): string {
    return WithholdReturnReason.getValue(key);
  }

  public static getScheduledStatusValue(key: ScheduledStatusEnum): string {
    return ScheduledStatus.getValue(key);
  }
}
export default EnumBase;