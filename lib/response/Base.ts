abstract class ResponseBase {
  public abstract setAttributes(response: ResponseBase): void;

  protected timeToDate(time: any): number | Date {
    return time === 0 ? 0 : new Date(time*1000);
  }

  public getAttributes(): ResponseBase {
    return this;
  }
}

export default ResponseBase;