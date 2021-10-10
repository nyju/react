import {
    LOGIN_USER
} from '../_action/types';

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // 스프레드오퍼레이터
            return { ...state, loginSuccess: action.payload }
            break;

        default:
            return state;
    }
}