import React from "react";
import s from "./Dialog.module.css"
import Message from "./Message/Message";


const Dialog = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text)
        newMessageElement.current.value = '';
    }

    let messagesElement = props.messagesItems.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialog}>

            <div className={s.messages}>

                {messagesElement}
                
            </div>
            <div className={s.sendMess}>
                <textarea className={s.text} ref={newMessageElement}/>
                <button className={s.button} onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialog;