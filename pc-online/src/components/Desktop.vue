<script setup>
import T from "./Terminal.vue";
import Test from "./Test.vue";
import App from "./Apps.vue"
import {ref} from "vue";
let s = ref(false)
function show_(thing){
  s = true;
}
let u = [["black", "white", "Terminal"], ["lightGreen", "blue", "Chrome"], ["blue", "white", "Chat"]]



</script>
<template>
  <Test/>
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
