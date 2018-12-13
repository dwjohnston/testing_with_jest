import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const URI_USERS = 'users/';

export const _fetchUsers = async function (_makeApiCall, _URI_USERS) {
    return _makeApiCall(_URI_USERS);
}


export const _fetchUser = async function (_makeApiCall, _URI_USERS, id) {
    return _makeApiCall(_URI_USERS + id);
}


export const _fetchUserStrings = async function (_fetchUser, _parseUser, ...ids) {
    const users = await Promise.all(ids.map(id => _fetchUser(id)));
    return users.map(user => _parseUser(user));
}
export const _makeApiCall = async function (uri) {
    try {
        const response = await axios(BASE_URL + uri);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}

export function _parseUser(user) {
    return `${user.name}:${user.username}`;
}



/**
 * Real exports
 */
export const makeApiCall = _makeApiCall;
export const parseUser = _parseUser;

export const fetchUsers = _fetchUsers.bind(null, _makeApiCall, URI_USERS);
export const fetchUser = _fetchUser.bind(null, _makeApiCall, URI_USERS);
export const fetchUserStrings = _fetchUserStrings.bind(null, _fetchUser, _parseUser);

