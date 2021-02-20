import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://www.bollywoodhungama.com/wp-content/uploads/2019/07/%E2%80%9CI-was-offered-Avatar-I-even-gave-the-title%E2%80%99s-suggestion-to-James-Cameron%E2%80%9D-%E2%80%93-Govinda.jpg" className={s.avatar} />
            {props.message} <br/>
            {props.likesCount} likes
        </div>
    )
}

export default Post;
