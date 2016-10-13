import { Node } from './node';

describe('Node', () => {

    it('instantiates', () => {

        let node = new Node();

        expect(node.key).toBe('');

        expect(node.value).toBeUndefined();

        expect(node.parent).toBeUndefined();

        expect(node.children.size).toBe(0);
    });
});