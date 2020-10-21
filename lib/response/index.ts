import Item from './Item';
import List from './List';
import Collection from './Collection';
import AuthResponse from './Auth';
import PaymentResponse from './Payment';
import PaymentAmountResponse from './PaymentAmount';
import NaverProductOrderResponse from './NaverProductOrder';
import NaverCashAmountResponse from './NaverCashAmount';
import NaverReviewResponse from './NaverReview';
import EscrowResponse from './Escrow';
import PrepareResponse from './Prepare';
import VbankHolderResponse from './VbankHolder';
import CertificationResponse from './Certification';
import CardCodeResponse from './CardCode';
import BankCodeResponse from './BankCode';
import ReceiptResponse from './Receipt';
import ExternalResponse from './External';
import KakaoOrderResponse from './KakaoOrder';
import PaycoStatusResponse from './PaycoStatus';
import ScheduledResultResponse from './ScheduledResult';
import CustomerResponse from './Customer';

abstract class ResponseBase {
  public abstract setAttributes(response: ResponseBase): void;

  protected timeToDate(time: any): number | Date {
    return time === 0 ? 0 : new Date(time*1000);
  }

  public getAttributes(): ResponseBase {
    return this;
  }
}

export {
  Item,
  List,
  Collection,
  AuthResponse,
  PaymentResponse,
  PaymentAmountResponse,
  NaverProductOrderResponse,
  NaverCashAmountResponse,
  NaverReviewResponse,
  EscrowResponse,
  PrepareResponse,
  VbankHolderResponse,
  CertificationResponse,
  CardCodeResponse,
  BankCodeResponse,
  ReceiptResponse,
  ExternalResponse,
  KakaoOrderResponse,
  PaycoStatusResponse,
  ScheduledResultResponse,
  CustomerResponse,
};
export default ResponseBase;