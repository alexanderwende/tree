import { NodeInterface } from './node';

export class Tree {

    private _root: NodeInterface;
    private _delimiter: string;
    private _wildcard: string;

    constructor (delimiter: string = '.', wildcard: string = '*') {

        this._delimiter = delimiter;
        this._wildcard  = wildcard;
    }
}