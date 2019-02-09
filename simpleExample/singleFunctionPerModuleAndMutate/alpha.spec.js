import { alpha } from "./alpha";
import * as betaModule from "./beta";

describe("alpha", () => {
    betaModule.beta = (n) => "x";
    it("works", () => {
        expect(alpha(3)).toEqual("3x3");   //PASS
    });
});
