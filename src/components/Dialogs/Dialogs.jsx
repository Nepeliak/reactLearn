import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Chats from "./Chats/Chats";

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <Chats chatsItems={props.chatsItems.chats}/>
            <Dialog
                messagesItems={props.messagesItems.messages}
                addMessage={props.addMessage}
            />
        </div>

    )
}

export default Dialogs;
