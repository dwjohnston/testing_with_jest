import * as indexModule from "./index";

//Not what we want to do, because we want to mock the functionality of beta
describe("alpha, large test", () => {
    it("alpha(1) returns '1.1'", () => {
        expect(indexModule.alpha(1)).toEqual("1.1");
    });

    it("alpha(3) returns '3...3'", () => {
        expect(indexModule.alpha(3)).toEqual("3...3");
    });
});

//Simple atomic test
describe("beta", () => {
    it("beta(3) returns '...'", () => {
        expect(indexModule.beta(3)).toEqual("...");
    });
});

//Here we are trying to mutate the beta function to mock its functionality
describe("alpha", () => {

    indexModule.beta = (n) => "x";
    it("works", () => {
        expect(indexModule.alpha(3)).toEqual("3x3"); //Fails, recieved: '3...3'
    });
});
