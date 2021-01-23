<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{ activeTodoCount }}</strong>
      item(s) left
    </span>
    <button
        class="clear-completed"
        @click="$emit('clear-todos-action')"
        v-show="completedTodoCount">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    activeTodoCount: {
      type: Number,
      required: true
    },
    completedTodoCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>