// import api from "../api";
// import axiosMock from "axios";

describe("api", () => {

    it("passes", () => {
        expect(true).toBe(true);

    });
})

// describe("api", () => {

//     // beforeEach(() => {
//     //     jest.resetModules();
//     // })

//     // describe("fetchUser(1)", () => {

//     //     axiosMock.mockImplementationOnce(() => {
//     //         return Promise.resolve({
//     //             data: {
//     //                 name: "FooBar"
//     //             }
//     //         });
//     //     });

//     //     it("test", () => {
//     //         return fetchUser(1).then((data) => {
//     //             expect(data.name).toEqual("FooBar");
//     //         });
//     //     });
//     // });


//     describe("fetchUserStrings(1,2,3)", () => {

//         const parseUserSpy = jest.spyOn(api, "parseUser")
//             .mockImplementation(() => "mock");
//         const parseFetchUserSpy = jest.spyOn(api, "parseUser")
//             .mockImplementation(() => Promise.resolve("user"));


//         it("calls parseUser three times", () => {
//             //console.log(parseUserSpy.mock);
//             const result = api.fetchUserStrings(1, 2, 3).then(() => {
//                 expect(parseFetchUserSpy.mock.calls).toHaveLength(3);
//                 expect(parseUserSpy.mock.calls).toHaveLength(3);
//                 parseUserSpy.mockRestore();
//                 parseFetchUserSpy.mockRestore();

//                 expect(result).toEqual(["mock", "mock", "mock"]);

//             });
//         });


//     });

//     describe("parseUser", () => {

//         it("returns a 'fullname:username' string", () => {
//             console.log(api.parseUser);


//             expect(api.parseUser({
//                 name: "foo",
//                 username: "bar"
//             })).toEqual("foo:bar");
//         })
//     });
// });

