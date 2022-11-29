<script setup>
import T from "./Terminal.vue";
import Test from "./Test.vue";
import {ref} from "vue";
let s = ref(false)

function show_(thing){
  s = true;
}
function open(element){
  element.classList.add("animate-o");
  setTimeout(function(){
    element.classList.remove("app");
    element.classList.add("appo")
    element.style.color = "transparent !important;"
  }, 1000)
}
function v(e){
console.log(1)
  document.querySelector(`.${e[2]}`).classList.add("animate-bounce")
  setTimeout(function(){
    document.querySelector(`.${e[2]}`).classList.remove("animate-bounce")
    open(document.querySelector(`.${e[2]}`))
  }, 2000)
  
}
const u = [["black", "white", "Terminal"], ["lightGreen", "blue", "Chrome"], ["blue", "white", "Chat"]]
</script>
<template>
  <div class="grid grid-cols-3 gap-4 place-content-center h-48" >
    <Test @click="v(a)" class="app rounded-lg justify-self-center self-stretch" :class="a[2]" v-for="a in u" v-bind:key="u.indexOf(a)" :use=a />
  </div>
</template>

<style scoped>
/*.container{
  width: 100%;
  text-align: center;
  /*justify-content: center;
  height: calc(100vh/5);
  flex-direction:row;
}*/
.app {
  /*display: inline-block;
  margin: 0 auto;*/
  width: calc(100vw/8);
  height: calc(100vw/8);
  text-align: center;
  line-height: calc(100vw/8);
}
.appo {
  width: calc(100vw/3);
  height: calc(100vw/3);
  text-align: center;
  line-height: calc(100vw/3);
  color: transparent;
}
@keyframes o {
    from: {width: calc(100vw/8);}
    to: {width: calc(100vw/4);}
  }
.animate {
  animation: o 2s linear;
}
</style>
