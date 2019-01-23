import { alpha, beta } from "./index";

//Not what we want to do, because we want to mock the functionality of beta
describe("alpha, large test", () => {
    it("alpha(1) returns '1.1'", () => {
        expect(alpha(1)).toEqual("1.1");
    });

    it("alpha(3) returns '3...3'", () => {
        expect(alpha(3)).toEqual("3...3");
    });
});

//Simple atomic test
describe("beta", () => {
    //jest.resetModules();
    it("beta(3) returns '...'", () => {
        expect(beta(3)).toEqual("...");
    });
});


// jest.mock("./index", () => ({
//     beta: (n) => "x"
// }));


// describe("alpha", () => {
//     //Sanity test
//     it("works", () => {
//         expect(alpha(3)).toEqual("3x3");
//     });
// });
