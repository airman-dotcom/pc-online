<script setup>
import Terminal from "./Terminal.vue";
import {ref} from "vue";
let u = [["black", "white", "Terminal"], ["lightGreen", "blue", "Chrome"], ["blue", "white", "Chat"]]
let a = defineProps({
    use: Object,
    open: Boolean
})
function open(element){
  element.classList.add("animate-o");
  setTimeout(function(){
    element.classList.remove("app");
    element.classList.add("appo")
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

</script>

<template>
    <div class="grid grid-cols-3 gap-4 place-content-center h-48" >
        <div @click="v(a)" class="app rounded-lg justify-self-center self-stretch" :class="a[2]" v-for="a in u" v-bind:key="u.indexOf(a)" :style="{'background-color': a[0], 'color': a[1]}" ><p>{{a[2]}}</p></div>
    </div>
</template>
<style scoped>
.app {
    /*display: inline-block;
    margin: 0 auto;*/
    width: calc(100vw/8);
    height: calc(100vw/8);
    text-align: center;
    line-height: calc(100vw/8);
  }
  .appo {
    width: calc(100vw/1.3);
    height: calc(100vw/2.6);
    text-align: center;
    line-height: calc(100vw/2.6);
    color: transparent;
    position: absolute;
    left: 10vw;
  }
  @keyframes o {
      from {width: calc(100vw/8);}
      to {width: calc(100vw/4);}
    }
  .animate {
    animation: o 2s linear;
  }
  .appo > p {
    opacity: 0;
  }
  </style>