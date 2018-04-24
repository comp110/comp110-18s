import { print } from "introcs";

type List<T> = Node<T> | null;

class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T, next: List<T>) {
        this.value = value;
        this.next = next;
    }
}

export let cons = <T> (value: T, next: List<T>): Node<T> => {
    return new Node(value, next);
};

export let first = <T> (list: List<T>): T => {
    if (list !== null) {
        return list.value;
    } else {
        throw new Error("Can't call first on empty list!");
    }
};

export let rest = <T> (list: List<T>): List<T> => {
    if (list !== null) {
        return list.next;
    } else {
        throw new Error("Can't call rest on null!");
    }
};

export let listify = <T> (...args: T[]): List<T> => {
    let list: List<T> = null;
    for (let i = args.length - 1; i >= 0; i--) {
        list = cons(args[i], list);
    }
    return list;
};

export let printList = <T> (list: List<T>): void => {
    if (list === null) {
        return;
    } else {
        print(first(list));
        printList(rest(list));
    }
};

let a = 1;
let b = 2;
print(a === first(cons(a, null)));
print(null === rest(cons(a, null)));
print(b === first(rest(cons(a, cons(b, null)))));
print(null === rest(rest(cons(a, cons(b, null)))));

let l = cons(1, cons(2, cons(3, null)));
printList(listify(1, 2, 3, 4, 5));