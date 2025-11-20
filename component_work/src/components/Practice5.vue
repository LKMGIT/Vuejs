<script setup>
import { ref } from 'vue';


const inputRef = ref(null);


const inputValue = ref('');   

function makealter() {
  
  if (inputRef.value) {
    inputRef.value.focus();
  }

  // 현재 입력값 alert로 출력
  alert(inputValue.value);
}
</script>

<template>
  <input
    ref="inputRef"
    v-model="inputValue"
    type="text"
  />

  <button type="button" @click="makealter">버튼</button>
</template>
