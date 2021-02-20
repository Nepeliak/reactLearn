import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state";
import {addMessage} from "./Redux/state";


export let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText = {updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

