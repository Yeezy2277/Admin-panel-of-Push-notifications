let initialState = {
    login: null,
    password: null
}

const SET_USER_DATA = 'LOGIN/SET_USER_DATA'

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default: return state
    }
};

export const setLoginUserData = (login,password) => {
    return {
        type: SET_USER_DATA, payload: { login,password }
    }
}

export default LoginReducer;