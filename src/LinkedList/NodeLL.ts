export class NodeLL<T> {
  public value: T;
  public next: null | NodeLL<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}