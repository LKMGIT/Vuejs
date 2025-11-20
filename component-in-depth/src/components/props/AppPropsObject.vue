<script setup>
import { reactive, ref } from "vue";

import AppPropsObjectChild from "./AppPropsObjectChild.vue";
import AppPropsObjectChildDestructure from "./AppPropsObjectChildDestructure.vue";

const props = defineProps({
  viewTitle: String,
});

const fruits = reactive([
  { id: "f1", name: "사과", checked: true,  price: 1200, origin: "한국" },
  { id: "f2", name: "파인애플", checked: false, price: 1500, origin: "미국" },
  { id: "f3", name: "포도", checked: false,  price: 1400, origin: "한국" },
  { id: "f4", name: "딸기", checked: true,  price: 1600, origin: "한국" },
  { id: "f5", name: "아보카도", checked: false, price: 1100, origin: "미국" },
  { id: "f6", name: "메론", checked: false , price: 1700, origin: "미국" },
]);

// 초기 체크 개수
const count = ref(
  fruits.filter((f) => f.checked).length
);

// 자식에서 체크/해제 상태(true/false)를 넘겨줄 때 호출
function updateCount(isChecked) {
  console.log("[parent] updateCount called, isChecked =", isChecked); // ★ 확인용
  if (isChecked) {
    count.value++;
  } else {
    count.value--;
  }
}
</script>

<template>
  <div>
    <h2>{{ props.viewTitle }}</h2>

    <div class="fruits">
      <h3>일반 props 객체로 사용</h3>
      <h2>전체 체크 개수 : {{ count }}</h2>

      <AppPropsObjectChild
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
        @update-count="updateCount"
      />

      <hr />

      <h3>props 구조 분해 할당 버전</h3>
      <h2>전체 체크 개수 : {{ count }}</h2>

      <AppPropsObjectChildDestructure
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
        @update-count="updateCount"
      />
    </div>
  </div>
</template>

<style scoped>
.fruits {
  display: inline-block;
  width: 250px;
  text-align: left;
}
</style>
