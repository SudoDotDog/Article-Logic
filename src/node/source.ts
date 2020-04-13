/**
 * @author WMXPY
 * @namespace Logic
 * @description Source
 */

export class Source {

    public static create(name: string): Source {

        return new Source(name);
    }

    private readonly _name: string;

    private constructor(name: string) {

        this._name = name;
    }

    public get name(): string {

        return this._name;
    }
}
