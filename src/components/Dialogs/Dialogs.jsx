import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {


    let dialogsElements =  props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> );

    let something = React.createRef();

    let intoSomething = () => {
        let inside = something.current.value;
        alert(inside);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
            <textarea ref={something}></textarea>
            <button onClick={intoSomething} className={s.send}>Отправить</button></div>
        </div>
    )
}

export default Dialogs;