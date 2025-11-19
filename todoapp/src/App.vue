<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


const STORAGE_KEY = 'todos';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoFilter,
    TodoList,
    TodoFooter,
  },

  data() {
    return {
      todos: [],      // { id, text, completed } 배열
      current: 'all', // all | active | completed
    };
  },

  // ✅ 앱 시작 시 localStorage에서 todos 복원
  created() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.todos = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error('저장된 todos JSON 파싱 실패:', e);
        this.todos = [];
      }
    }
  },

  // ✅ todos가 변할 때마다 JSON으로 저장
  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
      },
      deep: true, // completed 변경 같은 것도 감지
    },
  },

  computed: {
    filteredTodos() {
      if (this.current === 'all') {
        return this.todos;
      } else if (this.current === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.current === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
  },

  methods: {
    
    addTodoItem(todoText) {
      if (!todoText || todoText.trim() === '') return;

      const newTodo = {
        id: Date.now(),          // 고유 ID
        text: todoText.trim(),   // 입력 텍스트
        completed: false,
      };

      this.todos.push(newTodo);
    },

    
    removeTodoItem(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },

    updateTodoItem(todoId) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === todoId) {
          const newText = prompt('새로운 할 일 내용을 입력하세요:', todo.text);
          if (newText !== null && newText.trim() !== '') {
            return { ...todo, text: newText.trim() }; 
          }
        }
        return todo;
      });
    },

    // 🔹 completed 토글도 map으로 처리 (체크박스용)
    toggleTodoItem(todoId) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },

    updateCurrentFilter(newFilter) {
      this.current = newFilter;
    },

    clearAll() {
      this.todos = [];
      localStorage.removeItem(STORAGE_KEY);
    }

  },
};
</script>

<template>
  <div id="todoapp">
    <TodoHeader />

    <!-- 입력: text를 받아서 addTodoItem에 그대로 전달 -->
    <TodoInput @add-todo="addTodoItem" />

    <TodoFilter
      :current="current"
      @update:current="updateCurrentFilter"
    />

    <!-- 리스트: filteredTodos + 수정/삭제/토글 이벤트 -->
    <TodoList
      :todos="filteredTodos"
      @remove-todo="removeTodoItem"
      @update-todo="updateTodoItem"
      @toggle-todo="toggleTodoItem"
    />

    <TodoFooter @clear-all="clearAll" />
  </div>
</template>
