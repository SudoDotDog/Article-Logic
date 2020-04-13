/**
 * @author WMXPY
 * @namespace Logic
 * @description Article
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Article } from '../../src';

describe('Given an {Article} class', (): void => {

    const chance: Chance.Chance = new Chance('logic-article');

    it('should be able to construct', (): void => {

        const article: Article = Article.create();

        expect(article).to.be.instanceOf(Article);
    });
});
