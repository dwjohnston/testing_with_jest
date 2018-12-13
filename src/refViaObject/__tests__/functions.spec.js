import { sum, sumAll } from "../functions";


describe("sum(x,y)", () => {
    it("1 + 2 = 3", () => {
        expect(sum(1, 2)).toEqual(3);
    });

    it("-1 + 1 =0", () => {
        expect(sum(-1, 1)).toEqual(0);
    });
})

describe("sumAll(...numbers)", () => {
    it("1,2,3 =6", () => {
        expect(sumAll(1, 2, 3)).toEqual(6);
    });
});

