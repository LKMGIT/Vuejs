<script setup>
import {computed , ref, watch} from 'vue';

const refCount = ref(0);
const doubledCount = computed(() =>  refCount.value * 2);

  function increase() {
    refCount.value++;
  }

  watch(refCount, (newValue) => {
    console.log(`reCount: ${newValue}`)
  })


</script>

<template>
    <p>Count: {{ refCount }}</p>
    <p>Doubled Count: {{ doubledCount }}</p>
    <button @click="increase">Increment</button>
</template>