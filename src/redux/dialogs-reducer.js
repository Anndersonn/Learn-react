const ADD_BODY = 'ADD-BODY';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {
    switch (action.type) { 
        case ADD_BODY:
            let newBody = {
                id: 6,
                message: state.newMessageBody
            }
            state.messages.push(newBody);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        default: 
            return state;
    }
}

export const UpdateBodyActionCreator = (info) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newBody: info
    }
}
export const addBodyActionCreator = () => {
    return {
        type: ADD_BODY
    }
}


export default dialogsReducer;