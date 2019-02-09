import axios from 'axios';

export class ApiClient {
    constructor({ baseUrl, client }) {
        this.baseUrl = baseUrl;
    }

    async makeApiCall(uri) {
        try {
            const response = await axios(`${this.baseUrl}${uri}`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async fetchUsers() {
        return this.makeApiCall('/users');
    }

    async fetchUser(id) {
        return this.makeApiCall(`/users/${id}`);
    }

    async fetchUserStrings(...ids) {
        const users = await Promise.all(ids.map(id => this.fetchUser(id)));
        return users.map(user => this.parseUser(user));
    }

    parseUser(user) {
        return `${user.name}:${user.username}`;
    }
}

export default new ApiClient({
    url: "https://jsonplaceholder.typicode.com/"
});