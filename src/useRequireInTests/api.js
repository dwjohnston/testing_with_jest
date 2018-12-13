import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";
const URI_USERS = 'users/';

export async function makeApiCall(uri) {
    try {
        const response = await axios(BASE_URL + uri);
        return response.data;
    } catch (err) {
        throw err.message;
    }
}

export async function fetchUsers() {
    return makeApiCall(URI_USERS);
}

export async function fetchUser(id) {
    return makeApiCall(URI_USERS + id);
}

export async function fetchUserStrings(...ids) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users.map(user => parseUser(user));
}

export function parseUser(user) {
    return `${user.name}:${user.username}`;
}