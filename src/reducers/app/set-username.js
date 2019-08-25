const setUsername = (state, action) => {
    return state.set('username', action.name);
};

export default setUsername;
