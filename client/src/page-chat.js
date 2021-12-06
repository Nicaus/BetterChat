import Vue from 'vue'
import App from './App.vue'
import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import { ctx } from './page-register';

//- La page chat doit utiliser la librarie Vue.js afin d'afficher les messages 
// (ceux qui arrivent dans la fonction newMessage du fichier chat.js). 
// Pour la liste des membres connectés, vous pouvez utiliser Vue.js, ou le DOM.

export let messageList = []
export let memberList = []
export let image = new Image;
new Vue({
    el: '#message',
    components: { App },
    template: '<App/>'
})

// new Vue({
//     el: '#member',
//     components: { Member },
//     template: '<Member/>'
// })

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
let id = 0;
export const newMessage = (fromUser, message, isPrivate) => {
    console.log(fromUser, message, isPrivate);
    messageList.push({
        content: fromUser + ": " + message,
        id: id++
    });
}

let id2 = 0
// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    memberList.splice(0, 1)
    console.log(members);
    memberList.push({
        people: members,
        id2: id2++
    })
}
