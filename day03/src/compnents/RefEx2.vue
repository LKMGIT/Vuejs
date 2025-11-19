<script set up>

import {ref} from 'vue';
import RefEx2Child from './RefEx2Child.vue';


const componentRef = ref(null);


setTimeout(
() => {

    console.log(componentRef.number);
    console.log(componentRef.doubleNumber);

}, 1000


) 

</script>

<template>
 <RefEx2Child ref="componentRef"/>
</template>