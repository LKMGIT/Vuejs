<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	count: Number, // count 값의 자료형 Number
	state: [Object, Array], // state 값의 자료형은 Object Array 중 하나일 꺼야
});
</script>
<template>
	<h1>{{ props.count }}</h1>
	<h1>{{ props.state.count }}</h1>
</template>
