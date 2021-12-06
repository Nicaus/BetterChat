<template>
    <div class="squares" style="color: black;">
        <div class="square" style="width: 250px; overflow-y: auto;">
            <div v-for="member in members" v-bind:key="member.id">
                <div v-for="i in member.people.length">
                    {{ member.people[i] }}
                </div>
            </div>
        </div>
        <div class="square">
            <div v-for="message in messages" v-bind:key="message.id">
                <div>
                    {{ message.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<!-- La page chat doit utiliser la librarie Vue.js afin d'afficher les messages -->
<!-- (ceux qui arrivent dans la fonction newMessage du fichier chat.js). -->
<!-- Pour la liste des membres connectés, vous pouvez utiliser Vue.js, ou le DOM.-->

<script>
import {messageList, memberList} from './page-chat'
    export default {
        name: "App",
        data(){
            return{
                messages: messageList,
                members: memberList
            };
        }
    }
</script>