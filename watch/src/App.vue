<script setup>
// import WatchEx1 from './components/WatchEx1.vue';
// import WatchEx2 from './components/WatchEx2.vue';
// import WatchEx3 from './components/WatchEx3.vue';
// import WatchEx4 from './components/WatchEx4.vue';
//import WatchEffectEx1 from './components/WatchEffectEx1.vue';
//import WatchPostEffectEx1 from './components/WatchPostEffectEx1.vue';

import { reactive, ref } from 'vue';
// import DefineProps from './components/DefineProps.vue';
import DefineEmits from './components/DefineEmits.vue';

const count = ref(0);
const state = reactive({
	count: 0,
});

const countIncrement = () => {
	count.value++;
};
const stateCountIncrement = () => {
	state.count++;
};
</script>
<template>
	<!-- <WatchEx1 />
	<WatchEx2 />
	<WatchEx3 />
	<WatchEx4 /> -->
	<!-- <WatchPostEffectEx1 /> -->
	<!-- <DefineProps :count="count" :state="state" /> -->

	<h1>{{ count }}</h1>
	<h1>{{ state.count }}</h1>

	<DefineEmits
		@count-increment="countIncrement"
		@state-count-increment="stateCountIncrement"
	/>
</template>

<!-- DefineProps 컴포넌트에서는 부모(App.vue)에서 전달한 반응형 데이터를 defineProps()
사용하여 받아서 출력할 수 있다. -->
