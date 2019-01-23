import { alpha } from "./alpha";

jest.mock("./beta", () => ({
    beta: (n) => "x",
}));

//Trying to mock the functionality of beta
describe("alpha", () => {
    it("works", () => {
        expect(alpha(3)).toEqual("3x3");
    });
});
