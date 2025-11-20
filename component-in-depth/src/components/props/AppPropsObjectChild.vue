<script setup>
import { computed } from "vue";

const props = defineProps({
  fruit: Object,
  totalChecked: Number,   // 부모 count 내려받기
});

const emit = defineEmits(["update-count"]);

const imgSrc = computed(() => {
  return new URL(`../../assets/${props.fruit.id}.png`, import.meta.url).href;
});

function onChange(event) {
  const isChecked = event.target.checked;
  console.log("[child] onChange, isChecked =", isChecked); // ★ 확인용

  // 부모의 fruits 배열 안 요소를 직접 변경 (참조라서 가능)
  props.fruit.checked = isChecked;

  // 부모에게 이번 상태 알려줌
  emit("update-count", isChecked);
}
</script>

<template>
  <div class="div-fruit">
    <input
      type="checkbox"
      :id="fruit.id"
      :checked="fruit.checked"
      :price="fruit.price"
      :origin="fruit.origin"
      @change="onChange"
    />

    <label :for="fruit.id">
      <img :src="imgSrc" class="img-fruit" />
      {{ fruit.name }} ({{ fruit.price }}원, {{ fruit.origin }})
    </label>

  </div>
</template>

<style scoped>
.div-fruit {
  color: darkgray;
  margin-bottom: 5px;
  font-size: large;
}
.img-fruit {
  width: 20px;
  margin: 0 1px 0 5px;
}
.total {
  font-size: 12px;
  margin-left: 4px;
  opacity: 0.7;
}
</style>
