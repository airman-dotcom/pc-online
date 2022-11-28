<script setup>
import Terminal from "./Terminal.vue";
let a = defineProps({
    use: Object
})

function b(){
    alert(a.use[2])
}

</script>

<template>
    <div @click="b()" :style="{'background-color': a.use[0], 'color': a.use[1]}" >{{a.use[2]}}</div>
</template>
