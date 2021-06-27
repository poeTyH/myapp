<template>
  <div id="app">
    <h2>red</h2>
    <todolist></todolist>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
    todolist: () => import('./components/todoList/index.vue')
  },
  beforeCreate() {
    console.log('beforeCreate', this, this.$el, this.PI)
  },
  created() {
    console.log('created', this, this.$el, this.PI)
  },
  beforeMount() {
    console.log('beforeMount', this, this.$el, this.PI)
  },
  mounted() {
    console.log('mounted', this, this.$el, this.PI)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this, this.$el, this.PI)
  },
  updated() {
    console.log('updated', this, this.$el, this.PI)
  },
  beforeDestroy() {
    console.log('beforeDestroy', this, this.$el, this.PI)
  },
  destroyed() {
    console.log('destroyed', this, this.$el, this.PI)
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{ 
  color: red;
}
</style>
