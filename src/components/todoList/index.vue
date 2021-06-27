<template>
  <div class="todo">
    <div class="todo-opr">
      <template>
        <label form="todo"></label>
        <input id="todo" v-model="nowTodo"/>
        <button @click="add">添加</button>
      </template>
    </div>
    <div class="todoList">
        <h2>未完成</h2>
        <ul>
          <li v-for="(todo, index) in immatrueTodo" :key="index">
            <span>{{todo.text}}</span>
          </li>
        </ul>
    </div>
    <div class="todoList">
        <h2>已完成</h2>
        <ul>
          <li v-for="(todo, index) in doneTodo" :key="index">
            <span>{{todo.item}}</span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      todoList: [],
      nowTodo: ''
    }
  },
  computed: {
    doneTodo() {
      return this.todoList.filter(item => item.active)
    },
    immatrueTodo() {
      return this.todoList.filter(item => !item.active)
    }
  },
  methods: {
   add() {
     this.todoList.push({
       text: this.nowTodo,
       active: false
     })
     this.nowTodo = ''
   }
  }

}
</script>

<style scoped>

</style>
