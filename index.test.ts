import assert from 'node:assert';
import { it } from 'node:test';
import { add } from '.';

it('add', () => {
    assert.equal(add(1, 1), 2);
});
