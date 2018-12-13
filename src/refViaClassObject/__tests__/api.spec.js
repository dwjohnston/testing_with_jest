import { ApiClient } from '../api';
import axiosMock from "axios";


let api;
beforeAll(() => {
    console.log("before");
    api = new ApiClient({
        baseUrl: 'http://test.com',
    });

});

describe('api tests', () => {


    it('makeApiCall should use axios', async () => {
        const response = { data: [] };
        axiosMock.mockResolvedValue(response);
        const value = await api.makeApiCall('/foo');
        expect(axiosMock).toHaveBeenCalledWith('http://test.com/foo');
        expect(value).toBe(response.data);
    });

    it('fetchUsers should call makeApiCall', async () => {
        const value = [];
        jest.spyOn(api, 'makeApiCall').mockResolvedValue(value);
        const users = await api.fetchUsers();
        expect(api.makeApiCall).toHaveBeenCalledWith('/users');
        expect(users).toBe(value);
    });


    it("returns an array of three strings", async () => {
        expect.assertions(3);
        jest.spyOn(api, 'fetchUser').mockResolvedValue("foo");
        jest.spyOn(api, 'parseUser').mockReturnValue("zzz");

        const result = await api.fetchUserStrings(1, 2, 3);
        console.log(result);
        expect(api.fetchUser).toHaveBeenCalledTimes(3);
        expect(api.parseUser).toHaveBeenCalledTimes(3);
        expect(result).toHaveLength(3);
    });


    it("returns the name, and username seperated by a ':'", () => {


        console.log(api.parseUser);
        expect(api.parseUser({
            username: "foo",
            name: "bar"
        })).toEqual("bar:foo");
    });
});