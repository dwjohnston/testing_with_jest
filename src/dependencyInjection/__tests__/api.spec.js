import { makeApiCall, parseUser, _fetchUser, _fetchUserStrings } from "../api";
import axiosMock from "axios";


/**
 * Here we are mocking the behavior of axios. 
 */
describe("makeApiCall", () => {

    describe("successful response", () => {
        axiosMock.mockImplementationOnce(() => {
            return Promise.resolve({
                data: {
                    name: "FooBar"
                }
            });
        });

        it("returns a data object", async () => {

            const data = await makeApiCall("/foo");
            expect(data.name).toEqual("FooBar");
        });

    });

    describe("error response", () => {
        axiosMock.mockImplementationOnce(() => {
            return Promise.reject({
                data: {
                    message: "Fail"
                }
            });
        });

        it("throws an error object", async () => {
            expect.assertions(1);
            try {
                const data = await makeApiCall("/foo");
            }
            catch (err) {
                expect(err).toBeDefined();
            }
        });

    });
});


/**
 * This is the easiest kind of function to test. 
 */
describe("parseUser", () => {

    it("returns the name, and username seperated by a ':'", () => {
        expect(parseUser({
            username: "foo",
            name: "bar"
        })).toEqual("bar:foo");
    });
})

/**
 * We mock the behavior of makeApiCall and check that we are calling it correctly
 */
describe("_fetchUser", () => {

    const makeApiCallMock = jest.fn(() => new Promise());
    const fetchUser = _fetchUser.bind(null, makeApiCallMock, "foo/");
    it("calls makeApiCall against the /users uri and id ", () => {
        const result = fetchUser(1);
        expect(makeApiCallMock).toHaveBeenCalledWith("foo/1");
        expect(result).toBeDefined();
    });
})


/**
 * Our most complicated test
 *  
 */

describe("_fetchUserStrings", () => {

    describe("happy flow", () => {

        const fetchUserMock = jest.fn((i) => Promise.resolve({
            username: "foo",
            name: "bar"
        }));
        const parseUserMock = jest.fn(user => "string");
        const fetchUserStrings = _fetchUserStrings.bind(null, fetchUserMock, parseUserMock);

        it("returns an array of three strings", async () => {

            expect.assertions(3);
            const result = await fetchUserStrings(1, 2, 3);

            // I'm being a bit lazy here, you could be checking that 
            // The strings are actually there etc, but whatevs. 

            expect(fetchUserMock).toHaveBeenCalledTimes(3);
            expect(parseUserMock).toHaveBeenCalledTimes(3);
            expect(result).toHaveLength(3);
        })

    });
}); 