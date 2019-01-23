jest.mock("./index");
import { beta } from "./index";
const { alpha } = jest.requireActual("./index");

beta.mockReturnValue("x");

//Just proving that beta really is returning x
describe("beta", () => {
    it("sanity test", () => {
        expect(beta(3)).toEqual("x");
    });
});

describe("alpha", () => {
    //Sanity test
    it("works", () => {
        expect(alpha(3)).toEqual("3x3");
    });
});
