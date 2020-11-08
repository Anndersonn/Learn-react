const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_BODY = 'ADD-BODY';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {

    _renderEntireTree() {
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'Blabla', likesCount: 11 },
                { id: 4, message: 'Dada', likesCount: 11 }
            ],
            newPostText: ''

        },

        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._renderEntireTree(this._state);
         } 
         else if (action.type === ADD_BODY) {
            let newBody = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newBody);
            this._state.dialogsPage.newMessageBody = '';
            this._renderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newBody;
            this._renderEntireTree(this._state);
        }

    },
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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }

}

export default store;