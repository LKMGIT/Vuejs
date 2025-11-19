<script setup>

// reactive 는 객체 내부의 값이 변경될 때도 반응성을 가진다.
// 배열도 객체의 한 종류이기 때문에 배열 내부의 값이 변경될 때도 반응성을 가진다.
import { reactive } from 'vue';

const state = reactive(0);

setTimeout(() => {
    state.value++;
}, 1000);
</script>


<template>

    <h1> state value {{ state.value }}</h1>

</template>