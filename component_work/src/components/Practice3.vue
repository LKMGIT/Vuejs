<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');
const warningMessage = computed(() => '10자를 초과했습니다!');
const showMsg = ref('');

function checkMsg() {
  if (searchText.value.length > 10) {
    showMsg.value = warningMessage.value;
  } else {
    showMsg.value = searchText.value;
  }
}
</script>

<template>
  <input v-model="searchText" @input="checkMsg" />
  <span>{{ showMsg }}</span>
</template>
