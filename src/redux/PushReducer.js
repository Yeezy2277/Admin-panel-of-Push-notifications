import {broadcastAPI} from "../API/api";

let initialState = {
    title:null,
    text:null
}

const PUSH_NOTE = 'PUSH/PUSH_NOTE';

const PushReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_NOTE: {
            return {...state, ...action.payload}
        }
        default: return state
    }
};

export const sendPush = (title,text) => {
    return { type: PUSH_NOTE, payload: {title,text}
    }
}

export const getPush = (title,text) => async (dispatch) => {
    const response = await broadcastAPI.sendPush();
    if (response.data.resultCode === 0) {
        dispatch(sendPush(title,text));
    }
}
export default PushReducer;