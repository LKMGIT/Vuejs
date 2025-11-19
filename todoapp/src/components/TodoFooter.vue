<script>

export default {
  emits: ['clear-all'],
};
</script>


<template>

    <div class="todo-footer">
        <button @click="$emit('clear-all')">전체 삭제</button>
    </div>

</template>