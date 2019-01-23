import { _a } from "../functions";

describe("_a", () => {

    it("_a(1,2,3) calls _b three times.", () => {
        const mockFn = jest.fn();
        const a = _a.bind(null, mockFn);

        a(1, 2, 3);

        expect(mockFn.mock.calls).toHaveLength(3);
    })

}); 