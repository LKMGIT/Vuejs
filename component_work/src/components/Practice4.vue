<script setup>
import { reactive, computed } from 'vue';

const cart = reactive([]);

cart.push(
  { price: 1000, count: 1 },
  { price: 2000, count: 2 },
);

const totalPrice = computed(() => {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
});
</script>

<template>
  <div>
    <h3>장바구니</h3>

    <div v-for="(item, index) in cart" :key="index">
      <h4>상품 {{ index + 1 }}</h4>
      <label>가격: <input type="number" v-model.number="item.price" /></label>
      <label>수량: <input type="number" v-model.number="item.count" /></label>
    </div>

    <hr />
    <p>총 금액: {{ totalPrice }}</p>
  </div>
</template>
