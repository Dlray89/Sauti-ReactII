import { alertMessages } from "../messages";

export const alertInfo = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertMessages.SUCCESS, message }
}

function error(message) {
    return {type: alertMessages.ERROR, message }
}

function clear(){
    return { type: alertMessages.CLEAR };
}