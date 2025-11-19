<script>
export default {
  emits: ['update:current'],
  methods: {
    setFilter(filter) {
      this.$emit('update:current', filter);
    },
  },
};
</script>

<template>
  <div class="todo-filter">
    <button
      @click="setFilter('all')"
    >
      전체
    </button>
    <button
      @click="setFilter('active')"
    >
      진행 중
    </button>
    <button
      @click="setFilter('completed')"
    >
      완료
    </button>
  </div>
</template>
