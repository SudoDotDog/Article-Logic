/**
 * @author WMXPY
 * @namespace Logic
 * @description Evidence
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Evidence } from '../../../src';

describe('Given an {Evidence} class', (): void => {

    const chance: Chance.Chance = new Chance('logic-evidence');

    it('should be able to construct', (): void => {

        const evidence: Evidence = Evidence.create();

        expect(evidence).to.be.instanceOf(Evidence);
    });
});
