/**
 * @author WMXPY
 * @namespace Logic
 * @description Reference
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Reference } from '../../../src';

describe('Given an {Reference} class', (): void => {

    const chance: Chance.Chance = new Chance('logic-reference');

    it('should be able to construct', (): void => {

        const reference: Reference = Reference.create();

        expect(reference).to.be.instanceOf(Reference);
    });
});
