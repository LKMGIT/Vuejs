<!-- Practice2.vue -->
<script setup>
import { ref, computed } from 'vue';
import Practice2Child from './Practice2Child.vue';

const pName = ref('');
const childRef = ref(null);

// 자식이 노출한 msg("Hello, 이름") 가져오기
const pMsg = computed(() => {
  return childRef.value?.msg?.value ?? '';
});
</script>

<template>
  <div>
    <h2>Practice2 Parent</h2>

    <!-- 부모에서 name 입력 -->
    <input v-model="pName" placeholder="부모에서 name 입력" />

    <!-- 자식에게 name 전달 + ref로 인스턴스 잡기 -->
    <Practice2Child v-model:name="pName" ref="childRef" />

    <!-- 자식이 만든 Hello 메시지를 부모에서 출력 -->
    <p>부모가 읽은 msg: {{ pMsg }}</p>
  </div>
</template>
