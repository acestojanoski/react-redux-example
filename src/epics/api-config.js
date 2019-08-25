export default {
    userByUsername: {
        buildUrl: (request) =>
            `https://jsonplaceholder.typicode.com/users?username=${request.username}`,
        method: 'GET'
    }
};
