export interface NodeInterface {
    key: string;
    value: string;
}

export interface NodeConstructor {
    new (key?: string, value?: any): NodeInterface;
}

export class Node implements NodeInterface {

    private _key: string;
    private _value: any;
    private _parent: Node;
    private _children: Map<string, Node>;

    constructor (key: string = '', value: any = undefined) {

        this.key   = key;
        this.value = value;
    }

    set key (key: string) {

        this._key = key;
    }

    get key (): string {

        return this._key;
    }

    set value (value: any) {

        this._value = value;
    }

    get value (): any {

        return this._value;
    }
}