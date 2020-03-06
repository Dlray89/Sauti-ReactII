import { userMessages } from "../messages";

export function registration(state = {}, action) {
    switch (action.type) {
        case userMessages.REGISTER_REQUEST:
            return { registering: true };
            case userMessages.REGISTER_SUCCESS:
                return {};
                case userMessages.REGISTER_FAILURE:
                    return {};
                    default:
                        return state
    }
}