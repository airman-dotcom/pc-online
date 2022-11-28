<script setup>
import {ref} from "vue"
let uname = ref("");
let psw = ref("");
function a(){
    alert(uname.value);
    alert(psw.value)
}
</script>
<template>
    <h1>Login</h1>
    <br/>
    <input type="text" v-model="uname"/>
    <br/>
    <input type="password" v-model="psw"/>
    <br/>
    <button @click="a()">Login</button>
</template>