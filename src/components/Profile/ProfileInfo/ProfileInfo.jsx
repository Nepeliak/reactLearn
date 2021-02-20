import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return(
        <div >
            <div className={s.imageBlock}>
            <img src="https://3dnews.ru/assets/external/illustrations/2020/10/01/1021947/01.jpg" className={s.image}/>
            </div>
            <div className={s.discriptionBlock}>
                AVA + DISCRIPTION
            </div>
        </div>

    );
}

export default ProfileInfo;