import { NodeInterface, NodeConstructor } from './node';

export class Tree<T> {

    private _root: NodeInterface<T>;
    private _ctor: NodeConstructor<T>;
    private _delimiter: string;
    private _wildcard: string;

    constructor (nodeConstructor: NodeConstructor<T>, delimiter: string = '.', wildcard: string = '*') {

        this._ctor = nodeConstructor;
        this._delimiter = delimiter;
        this._wildcard  = wildcard;
    }
}