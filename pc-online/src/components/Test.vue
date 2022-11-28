<script setup>
import Terminal from "./Terminal.vue";
let a = defineProps({
    use: Object
})

function b(){
  /*document.querySelector("div").classList.add("animate-bounce")
  setTimeout(function(){
    document.querySelector("div").classList.remove("animate-bounce")
  }, 2000)*/
}

</script>

<template>
    <div @click="b()" :style="{'background-color': a.use[0], 'color': a.use[1]}" >{{a.use[2]}}</div>
</template>
