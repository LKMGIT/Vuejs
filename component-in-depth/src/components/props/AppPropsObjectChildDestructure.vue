<script setup>
import { computed } from "vue";

const { fruit, totalChecked } = defineProps({
  fruit: Object,
  totalChecked: Number,
});

const emit = defineEmits(["update-count"]);

const imgSrc = computed(() => {
  return new URL(`../../assets/${fruit.id}.png`, import.meta.url).href;
});

function onChange(event) {
  const isChecked = event.target.checked;
  console.log("[child-destructure] onChange, isChecked =", isChecked);

  fruit.checked = isChecked;
  emit("update-count", isChecked);
}
</script>

<template>
  <div class="div-fruit">
    <input
      type="checkbox"
      :id="fruit.id"
      :checked="fruit.checked"
      @change="onChange"
    />
    <label :for="fruit.id">
      <img :src="imgSrc" class="img-fruit" />
      {{ fruit.name }} ({{ fruit.price }}원, {{ fruit.origin }})
    </label>
  </div>
</template>
