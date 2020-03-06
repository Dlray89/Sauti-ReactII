import { userMessages } from "../messages";


const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user} : {};


export function authentication(state = initialState, action) {
    switch ( action.type ) {
        case userMessages.LOGIN_REQUEST:
            return{
                loggingIn: true,
                user: action.user
            };
            case userMessages.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
            case userMessages.LOGIN_FAILURE:
                return{};
                case userMessages.LOGOUT:
                    return {};
                    default:
                        return state
    }
}