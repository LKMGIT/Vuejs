<script setup>

    import { computed, reactive, ref} from 'vue';

    // 얜 그냥
    const refCount = ref(0);

    // 얜 객체로
    const reactiveCount = reactive({count : 0});

    //값에다가 * 2 를 해야해서 value
    const refDoubleCOunt = computed(() => refCount.value * 2); 

    // reactive 객체에는 reactive 자체에 * 2 가능 
    const refDoubleReactiveCount = computed(() => reactive *  2);

    //computed 로 계산된 값은 vlaue 사용
    console.log(refDoubleCOunt.value);
    console.log(refDoubleReactiveCount.value);

</script>

<template>

    <h1> {{ refDoubleCOunt }}</h1>
    <h1> {{ refDoubleReactiveCount }}</h1>

</template>
