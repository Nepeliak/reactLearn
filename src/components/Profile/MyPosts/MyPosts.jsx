import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {updateNewPostText} from "../../../Redux/state";
import Profile from "../Profile";

const MyPosts = (props) => {

    let postsElements = props.postsItems.map ( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost( );
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h2> My Posts </h2>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={ onPostChange}
                    value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Send</button>
            </div>

            <div>
                <h3> New Posts </h3>
            </div>
            <div className={s.posts}>

                {postsElements}


            </div>
        </div>
    );
}

export default MyPosts;