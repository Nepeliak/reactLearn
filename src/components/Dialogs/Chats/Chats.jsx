import React from "react";
import s from "./Chats.module.css"
import Chat from "./Chat/Chat";

const Chats = (props) => {

    let chatsElemets = props.chatsItems.map ( c => <Chat id={c.id} name={c.name}/> );

    return (
        <div className={s.chats}>

            {chatsElemets}

        </div>
    )
}

export default Chats;