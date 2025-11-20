<script setup>
import { ref, watch } from 'vue';
//1.   객체 자료형 속성 count 에 값 0을 할당하여 반응형데이터로 만들어 주세요
const state = ref({ count: 0 });

watch(
	state,
	(currentValue, preValue) => {
		console.log(currentValue, preValue);
	},
	{ deep: true }
);
</script>

<template>
	<h1>ref : {{ state.count }}</h1>
	<button @click="state.count++">ref 증가</button>
</template>
