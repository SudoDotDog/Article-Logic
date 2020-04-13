/**
 * @author WMXPY
 * @namespace Logic
 * @description Reference
 */

import { Source } from "./source";

export class Reference {

    public static create(): Reference {

        return new Reference();
    }

    private readonly _sources: Source[];

    private constructor() {

        this._sources = [];
    }
}
