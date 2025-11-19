<script setup>

import { ref } from 'vue';
const inputRef = ref(null);


//1초 뒤에 콘솔에 함수 실행
setTimeout(
() =>{
console.log(inputRef.value); // h1 태그 해당하는 dom 객체 
console.log(inputRef.value.innerText); // dom 객체의 속성, 메서드 모두 사용 
}, 1000

);
</script>

<template>

<h1 ref="inputRef">Hello Refs</h1>


</template>