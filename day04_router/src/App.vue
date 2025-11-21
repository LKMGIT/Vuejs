<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav>
        <RouterLink to="/">home</RouterLink> &nbsp;&nbsp;
        <RouterLink to="/about">about</RouterLink> &nbsp;&nbsp;
        <!-- <RouterLink to="/user/mike/profile">UserInfo</RouterLink> &nbsp;&nbsp; -->
        <!-- <RouterLink to="/user/mike">UserView</RouterLink>&nbsp;&nbsp; -->
        <RouterLink to="/user/id">UserViewComposition</RouterLink>&nbsp;&nbsp;
        <RouterLink to="/user/info">UserView</RouterLink>&nbsp;&nbsp;
    </nav>
    <RouterView />
</template>