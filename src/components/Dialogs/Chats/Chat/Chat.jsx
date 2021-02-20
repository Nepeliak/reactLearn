import React from "react";
import s from "./chat.module.css"
import {BrowserRouter, NavLink} from "react-router-dom";



const Chat = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <BrowserRouter>
            <div className={s.chat}>
                <img
                    src="https://img2.freepng.ru/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg"
                    className={s.avatar}/>
                <span className={s.name}>
                    <NavLink to={path} > {props.name}  </NavLink>
                </span>
            </div>
        </BrowserRouter>

    )
}

export default Chat;