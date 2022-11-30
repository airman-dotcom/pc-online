<script setup>
import {ref} from "vue"
/*let props = defineProps({
    type: String
})*/
let props = {
    type: "terminal",
    width: '75vw',
    height: '25vw',
}
let command = ref("Hellow");
function change(a){
    console.log(a.key)
}
</script>
<template>
    <div v-if="props.type == 'terminal'">
        <textarea @keydown="change($event)" v-model=command></textarea>
    </div>
    <div v-else-if="props.type == 'chrome'">Merminal</div>
    <div v-else-if="props.type == 'messenger'"></div>
</template>