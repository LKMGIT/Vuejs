<script setup>

import {reactive, watch} from 'vue';


const state = reactive({count : 0});


watch( () => state.count, 
(oldValue, newValue) =>{
    console.log(oldValue, newValue);
}
);

</script>

<template>

<h1> count : {{ state.count }}</h1>
<button  @click="state.count++"> 증가 </button>

</template>