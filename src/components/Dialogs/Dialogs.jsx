import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addBodyActionCreator, UpdateBodyActionCreator } from '../../redux/state';




const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

    let newBody = React.createRef();

    let addBody = () => {
        props.dispatch(addBodyActionCreator());
    }

    let onBodyChange = () => { 
        let info = newBody.current.value;
        props.dispatch(UpdateBodyActionCreator(info))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newBody} onChange={onBodyChange} value={props.newMessageBody}></textarea>
                <button onClick={addBody} className={s.send}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;