<template>
    <div class="centered" style="color: black;">
     {{ message }} 
    </div>
</template>

<!-- La page chat doit utiliser la librarie Vue.js afin d'afficher les messages -->
<!-- (ceux qui arrivent dans la fonction newMessage du fichier chat.js). -->
<!-- Pour la liste des membres connectés, vous pouvez utiliser Vue.js, ou le DOM.-->

<script>
import {newMessage} from './page-chat'
    export default {
        name: "Chat",
        data(){
            return{
                message: newMessage
            }
        }
    }
</script>