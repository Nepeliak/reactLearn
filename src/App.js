import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import YourInfo from "./components/YourInfo/YourInfo";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navElements={props.appState.navbar}/>
                <div className='content'>

                    <Route path='/profile' render={() =>
                        <Profile
                            postsItems={props.appState.profilePage}
                            updateNewPostText = {props.updateNewPostText}
                            addPost={props.addPost}/>}/>

                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            chatsItems={props.appState.dialogsPage}
                            messagesItems={props.appState.dialogsPage}
                            addMessage={props.addMessage}
                        />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/info' component={YourInfo}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
