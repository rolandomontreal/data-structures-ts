import { NodeLL } from "./NodeLL";

export class LinkedList<T> {
  public head: NodeLL<T> | null;
  public tail: NodeLL<T> | null;
  public length: number;

  constructor(initialValue?: T) {
    // Create node here..
    const initialNode = initialValue ? new NodeLL(initialValue) : null;
    this.head = initialNode || null;
    this.tail = initialNode || null;
    this.length = initialNode ? 1 : 0;
  }

  push(value: T) {
    const newNode = new NodeLL(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
}
