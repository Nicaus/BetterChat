import Vue from 'vue'
import Chat from './Chat.vue'
import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';

new Vue({
    el: '#main',
    components: { Chat },
    template: '<Chat/>'
})

//- La page chat doit utiliser la librarie Vue.js afin d'afficher les messages 
// (ceux qui arrivent dans la fonction newMessage du fichier chat.js). 
// Pour la liste des membres connectés, vous pouvez utiliser Vue.js, ou le DOM.

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    console.log(fromUser, message, isPrivate);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {    
    console.log(members);
}
