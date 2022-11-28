<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Login from './components/Login.vue'
import Welcome from "./components/Welcome.vue"
import Desktop from './components/Desktop.vue';
import Terminal from "./components/Terminal.vue"
const routes = {
  "/": Welcome,
  "/login": Login,
  "/desktop": Desktop
}

export default {
  data(){
    return {
      currentPath: window.location.href.slice(window.location.href.lastIndexOf("/"))
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath] || Welcome
    }
  },
  mounted(){
    window.addEventListener("popstate", () => {
      this.currentPath = window.location.href.slice(window.location.href.lastIndexOf("/"))
    })
  }
}
</script>

<template>
  <component :is="currentView"/>
</template>
