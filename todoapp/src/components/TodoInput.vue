<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  // todo 추가
  emits: ['add-todo'],
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (!text) {
        alert('할 일을 입력해주세요.');
        return;
      }

      this.$emit('add-todo', text);

      this.newTodo = '';
    },
  },
};
</script>

<template>
  <div class="todo-input">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="새 할 일을 입력하세요"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>
