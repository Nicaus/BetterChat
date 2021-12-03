<template>
    <div class="centered" style="color: black;">
     <div v-for="messages in message" v-bind:key="messages.value">
        {{ message }} 
     </div>
    </div>
</template>

<!-- La page chat doit utiliser la librarie Vue.js afin d'afficher les messages -->
<!-- (ceux qui arrivent dans la fonction newMessage du fichier chat.js). -->
<!-- Pour la liste des membres connectés, vous pouvez utiliser Vue.js, ou le DOM.-->

<script>
import {messageList} from './page-chat'
    export default {
        name: "Chat",
        data(){
            return{
                message: messageList
            }
        }
    }
</script>