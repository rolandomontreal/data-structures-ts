import { describe, expect, test } from 'vitest';
import { LinkedList } from "../../src/LinkedList/LinkedList";

describe('Linked List Constructor', () => {
  test('Empty constructor should create linked list with length 0', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
  });

  test('Constructor with number value should have length 1', () => {
    const initialValue = 7;
    const linkedList = new LinkedList(initialValue);
    expect(linkedList.length).toBe(1);
    expect(linkedList.head!.value).toBe(initialValue);
    expect(linkedList.head).toBe(linkedList.tail);
  });
});

describe('Push', () => {
  test('Pushing a node to an empty linked list', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBe(null);
    linkedList.push(5);
    expect(linkedList.length).toBe(1);
    expect(linkedList.tail!.value).toBe(5);
  });

  test('Pushing a node to a non empty linked list', () => {
    const initialValue = 12;
    const linkedList = new LinkedList(initialValue);
    linkedList.push(6);
    expect(linkedList.length).toBe(2);
    expect(linkedList.head!.value).toBe(initialValue);
    expect(linkedList.tail!.value).toBe(6);
  });
});