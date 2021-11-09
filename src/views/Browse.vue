<template>
<div>
  <h1>Your todo list for today</h1>
  <CartList :products="products" />
  <h2 class="empty">{{isEmptyMessage}}</h2>
</div>
</template>

<script>
import CartList from "../components/TodoList.vue"
export default {
  name: 'Browse',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.todoList;
    },
    isEmptyMessage(){
      if(this.$root.$data.todoList.length === 0){
        return "No items added to todo list";
      }
      else{
        return "";
      }
    }
  },

  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>

<style scoped>

h1{
  color: #4DA8DA;
  font-size: 50px;
  text-align: center;
}

.empty{
  color: #4DA8DA;
  text-align: center;
}

</style>
