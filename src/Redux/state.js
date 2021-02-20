import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello, it is my first post', likesCount: '4'},
            {id: 2, message: 'zhekichans top', likesCount: '29943'},
            {id: 3, message: 'How are you?', likesCount: '11'},
            {id: 4, message: 'Guess What?', likesCount: '17'}
        ],
        newPostText: 'Hello, EasyChamp!'
    },
    dialogsPage: {
        chats: [
            {id: 1, name: 'Zheka'},
            {id: 2, name: 'Vetal'},
            {id: 3, name: 'Pavlo'},
            {id: 4, name: 'Kiril'}
        ],
        messages: [
            {id: 1, message: 'Hello, I am Zheka'},
            {id: 2, message: 'How are You?'},
            {id: 3, message: 'Message 2'},
            {id: 4, message: 'What do you do?'}
        ]
    },
    navbar: {
        navItems: [
            {id: 1, link: '/profile', item: 'Profile'},
            {id: 2, link: '/dialogs', item: 'Dialogs'},
            {id: 3, link: '/music', item: 'Music'},
            {id: 4, link: '/info', item: 'Info'},
        ],
        bestFriendsItem: [
            {id: 1, link: '/dialogs/1', name: 'Zheka'},
            {id: 2, link: '/dialogs/2', name: 'Pavlo'},
            {id: 3, link: '/dialogs/3', name: 'Vetal'},
            {id: 4, link: '/dialogs/4', name: 'Kiril'}
        ]
    }
}

export let addPost = () => {
    let newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '10'
    }
    state.profilePage.posts.push(newPost);

    renderEntireTree(state);
}

export let addMessage = (textMessage) => {
    let newMessage ={
        id: 5,
        message: textMessage
    }
    state.dialogsPage.messages.push(newMessage);

    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export default state;