import { alertMessages } from "../messages";


export function alert(state = {}, action) {
    switch (action.type){
        case alertMessages.SUCCESS:
            return {
                type: "alert-success",
                message: action.message
            };
            case alertMessages.ERROR:
                return{
                    type: "alert-danger",
                    message: action.message
                };
                case alertMessages.CLEAR:
                    return {};
                    default:
                        return state
    }
}