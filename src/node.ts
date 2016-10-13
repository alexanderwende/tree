export interface NodeInterface<T> {
    key: string | undefined;
    value: T | undefined;
    parent: NodeInterface<T> | undefined;
    children: Map<string, NodeInterface<T>>
}

export interface NodeConstructor<T> {
    new (key?: string, value?: T): NodeInterface<T>;
}

export class Node<T> implements NodeInterface<T> {

    public readonly key: string;
    public value: T;
    public parent: NodeInterface<T>;
    public children: Map<string, NodeInterface<T>> = <Map<string, NodeInterface<T>>> new Map();

    constructor (key: string = '', value: T = undefined) {

        this.key   = key;
        this.value = value;
    }

    append (node: NodeInterface<T>) {

        node.parent = this;

        this.children.set(node.key, node);
    }

    remove (node: NodeInterface<T>): NodeInterface<T> {

        this.children.delete(node.key);

        node.parent = undefined;

        return node;
    }
}
