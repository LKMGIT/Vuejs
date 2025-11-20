<script setup>
import { ref, watch } from 'vue';
//1.  기본 자료형 0을 반응형데이터로 만들어 주세요
const count = ref(0);

watch(count, (currentValue, preValue) => {
	console.log(currentValue, preValue);
});
</script>

<template>
	<h1>ref : {{ count }}</h1>
	<button @click="count++">ref 증가</button>
</template>
