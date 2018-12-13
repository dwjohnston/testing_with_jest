import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const URI_USERS = 'users/';

async function makeApiCall(uri) {
    try {
        const response = await axios(BASE_URL + uri);
        return response.data;
    } catch (err) {
        throw err.message;
    }
}

async function fetchUsers() {
    return lib.makeApiCall(URI_USERS);
}

async function fetchUser(id) {
    return lib.makeApiCall(URI_USERS + id);
}

async function fetchUserStrings(...ids) {
    const users = await Promise.all(ids.map(id => lib.fetchUser(id)));
    console.log(users);
    return users.map(user => lib.parseUser(user));
}

function parseUser(user) {
    return `${user.name}:${user.username}`;
}

const lib = {
    makeApiCall,
    fetchUsers,
    fetchUser,
    fetchUserStrings,
    parseUser
};

export default lib;

