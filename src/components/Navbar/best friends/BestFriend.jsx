import React from 'react'
import s from './BestFriend.module.css'
import {NavLink} from "react-router-dom";

const BestFriends = (props) => {
    return (
        <div className={s.friends}>
            <img src={'https://ytimg.googleusercontent.com/vi/ZKZL77D5hEA/0.jpg'} className={s.imgFriends}/>
            <div className={s.friendItem}>
                <NavLink to={props.link}> {props.name}  </NavLink>
            </div>
        </div>
    )
};

export default BestFriends;