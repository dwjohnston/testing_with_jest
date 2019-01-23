import { beta } from "./index";

//Simple atomic test
describe("beta", () => {
    //jest.resetModules();
    it("beta(3) returns '...'", () => {
        expect(beta(3)).toEqual("...");
    });
});

