import Sorting from './Sorting';
import Status from './Status';
import DeliveryMethod from './DeliveryMethod';
import DeliveryCompany from './DeliveryCompany';
import ReturnReason from './ReturnReason';
import CancelReason from './CancelReason';
import SettleVbankCode from './SettleVbankCode';
import BankCode from './BankCode';
import LogisCode from './LogisCode';
import CardCode from './CardCode';
import IdentifierType from './IdentifierType';
import IdentifierFor from './IdentifierFor';
import KakaoOrderStatus from './KakaoOrderStatus';
import PaycoOrderStatus from './PaycoOrderStatus';
import WithholdReturnReason from './WithholdReturnReason';
import ScheduledStatus from './ScheduledStatus';

abstract class EnumBase {
  public abstract getValue(key: string): string;

  public getKeys(): string[] {
    return Object.values(this);
  }

  public getType() {
    const keys = this.getKeys();
    return <const> [...keys];
  }
}
export default EnumBase;
export {
  Sorting,
  Status,
  DeliveryMethod,
  DeliveryCompany,
  ReturnReason,
  CancelReason,
  SettleVbankCode,
  BankCode,
  LogisCode,
  CardCode,
  IdentifierType,
  IdentifierFor,
  KakaoOrderStatus,
  PaycoOrderStatus,
  WithholdReturnReason,
  ScheduledStatus,
};