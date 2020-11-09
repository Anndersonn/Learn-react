const ADD_BODY = 'ADD-BODY';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialDialogs = { 
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialDialogs, action) => {
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