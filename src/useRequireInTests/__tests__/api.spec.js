import * as api from '../api';
import axiosMock from "axios";

describe('api tests', () => {

    it('makeApiCall should use axios', async () => {
        const response = { data: [] };
        axiosMock.mockResolvedValue(response);

        const myApi = require("../api");
        const value = await myApi.makeApiCall('foo');
        expect(axiosMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/foo');
        expect(value).toBe(response.data);
    });


    /**
     * This is a failing test
     * This demonstrates the issue we have. 
     */
    describe("fetchUsers", () => {
        it('fetchUsers should call makeApiCall', async () => {
            const value = [];
            jest.doMock("../api", () => ({
                ...jest.requireActual("../api"),
                makeApiCall: jest.fn().mockResolvedValue(value)
            }));
            const myApi = require("../api");
            const users = await myApi.fetchUsers();
            expect(myApi.makeApiCall).toHaveBeenCalledWith('/users');
            expect(users).toBe(value);
        });
    });

});