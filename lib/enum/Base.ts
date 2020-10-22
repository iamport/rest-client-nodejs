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