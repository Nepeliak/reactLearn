import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return(

         <div className={s.header}>
             <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' className={s.logo} />
         </div>

    );
}

export default Header;