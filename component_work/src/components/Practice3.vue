<script setup>
import {ref, computed} from 'vue';

const searchText = ref('');

const warningMessage = computed(() => "10자를 초과했습니다!");

const showMsg = ref('');


function checkMsg(searchText){
    if(searchText.legth > 10){
        showMsg = warningMessage;
    }
    else{
        showMsg = searchText;
    }
}


</script>

<template>

<input v-model="searchText">    </input>
<span> {{ showMsg }}</span>

</template>