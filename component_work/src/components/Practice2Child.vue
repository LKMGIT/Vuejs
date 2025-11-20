<!-- Practice2Child.vue -->
<script setup>
import { computed } from 'vue';

// 부모가 넘겨줄 prop
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
});

// v-model:name용 emit
const emit = defineEmits(['update:name']);

// v-model:name에 사용할 computed
const modelName = computed({
  get() {
    return props.name;          // 부모에서 전달된 name
  },
  set(value) {
    emit('update:name', value); // 부모로 값 다시 올려보냄
  },
});

// "Hello, name" 메시지
const msg = computed(() => `Hello, ${modelName.value}`);

// 부모에서 childRef로 접근할 수 있게 노출
defineExpose({ msg });
</script>

<template>
  <div>
    <!-- 자식에서도 name을 바꿀 수 있게 input 제공 (옵션) -->
    <input v-model="modelName" placeholder="자식에서 name 수정" />
    <p>Child msg: {{ msg }}</p>
  </div>
</template>
