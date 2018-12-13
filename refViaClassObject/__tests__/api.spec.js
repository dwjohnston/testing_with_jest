import { ApiClient } from '../api';
import axiosMock from "axios";



describe('api tests', () => {
    let api;
    beforeEach(() => {
        api = new ApiClient({
            baseUrl: 'http://test.com',
            client: jest.fn()
        });
    });

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


    it("fetchUserString returns an array of three strings", async () => {
        jest.spyOn(api, 'fetchUser').mockResolvedValue("foo");
        jest.spyOn(api, 'parseUser').mockReturnValue("zzz");

        const result = await api.fetchUserStrings(1, 2, 3);
        expect(api.fetchUser).toHaveBeenCalledTimes(3);
        expect(api.parseUser).toHaveBeenCalledTimes(3);
        expect(result).toHaveLength(3);
    });


    it("returns the name, and username seperated by a ':'", () => {
        expect(api.parseUser({
            username: "foo",
            name: "bar"
        })).toEqual("bar:foo");
    });
});