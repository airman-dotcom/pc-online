

<script setup>
import {ref} from "vue";
let show = ref(false)
defineProps({
    show: Boolean
})
</script>
<template>
    <h1>Im shown</h1>
</template>
