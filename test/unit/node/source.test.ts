/**
 * @author WMXPY
 * @namespace Logic
 * @description Source
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Source } from '../../../src';

describe('Given an {Source} class', (): void => {

    const chance: Chance.Chance = new Chance('logic-source');

    it('should be able to construct', (): void => {

        const source: Source = Source.create();

        expect(source).to.be.instanceOf(Source);
    });
});
