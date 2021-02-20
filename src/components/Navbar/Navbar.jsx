import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import BestFriends from "./best friends/BestFriend";



const Navbar = (props) => {


    let navElements = props.navElements.navItems.map ( navEl =>
        <div className={s.item}>
        <NavLink id={navEl.id} to={navEl.link}> {navEl.item} </NavLink>
    </div>)

    let bestFriendElements = props.navElements.bestFriendsItem.map( fr => <BestFriends id={fr.id} link={fr.link} name={fr.name}/> )

    return (
        <div className={s.navbar}>

            {navElements}
            {bestFriendElements}

        </div>

    );
}

export default Navbar;