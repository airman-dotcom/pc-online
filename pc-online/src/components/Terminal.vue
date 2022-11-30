

<script setup>
import {ref} from "vue";
let value = ref("C:/>")
/*defineProps({
    coors: Array
})*/
let coors = ['50vw', '10vh']
function change(e){
    let element = document.querySelector("textarea")
    if (element.value.length < 4) {
        
    }
}
</script>
<template>
    <p style="background-color: black; color: white;">C:/></p><textarea @keydown="change($event)" :style="{'width': coors[0], 'height': coors[1], 'color': 'white'}" class="bg-black" v-model="value"></textarea>
</template>