<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ['remove-todo', 'update-todo', 'toggle-todo'],
};
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id">
      <label>
        <!-- 완료 토글: 체크 변경 시 toggle-todo 이벤트 -->
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="$emit('toggle-todo', todo.id)"
        />
        <span :class="{ done: todo.completed }">
          {{ todo.text }}
        </span>
      </label>

      <div>
        <!-- 수정: update-todo 이벤트 -->
        <button @click="$emit('update-todo', todo.id)">수정</button>
        <!-- 삭제: remove-todo 이벤트 -->
        <button @click="$emit('remove-todo', todo.id)">삭제</button>
      </div>
    </li>
  </ul>
</template>
