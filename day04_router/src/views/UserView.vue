<script setup>
    import { useRoute } from 'vue-router';
    
    const route = useRoute();

    // ? ㄷ뒤에 오는 갑 전달 
            const name = route.query.name;
            const age = route.query.age;

</script>

<template>
    <h1>UserView</h1>

    <h1> name : {{ name }} age : {{ age }}</h1>

    </template>