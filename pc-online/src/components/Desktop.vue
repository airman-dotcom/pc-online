<script setup>
import T from "./Terminal.vue";
import Test from "./Test.vue";
import {ref} from "vue";
let s = ref(false)
function show_(thing){
  s = true;
}
const u = [["black", "white", "Terminal"], ["lightGreen", "blue", "Chrome"], ["blue", "white", "Chat"]]
</script>
<template>
  <div class="grid grid-cols-3 gap-4 place-content-center h-48" >
    <Test class="app rounded-lg justify-self-center self-stretch" v-for="a in u" v-bind:key="u.indexOf(a)" :use=a />
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
</style>
