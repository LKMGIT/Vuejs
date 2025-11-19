<script setup>


//ref 는 재할당시에만 반응성을 가진다. 
//배열이나 객체 내부의 값을 변경할 때는 반응성을 가지지 않는다.
import { ref } from 'vue';


const arr1 = ref([10]);
const arr2 = ref([10]);

setTimeout(() => {
    arr1.value = [10, 20];
}, 1000);

setTimeout(
() => {
    arr2.push(20);
}, 1000
)
</script>


<template>

    <h1> count: {{ arr1 }}</h1>
    <h1> state count {{ arr2 }}</h1>
    </template>