<template>
<div class="wrapper">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <div class = buttons>
          <div class = "times" v-if="product.tracked">
          <h2> Times Completed: {{getTimes(product)}} </h2>
          </div>
          <button class="auto addtolist" v-on:click="increment(product)">Complete Task</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addItem(product) {
      if(product.tracked === false){
        this.$root.$data.cart.push(product);
      }
      else{
        const index = this.$root.$data.cart.indexOf(product);
        this.$root.$data.cart.splice(index, 1);
      }
      product.tracked = !product.tracked;
    },
    isTracked(item){
      if(item.tracked === true){
        return "Untrack Habit";
      }else{
        return "Track Habit";
      }
    },
  getTimes(item){
    return item.times.toString();
  },
  increment(item){
    item.times++;
    const index = this.$root.$data.todoList.indexOf(item);
    this.$root.$data.todoList.splice(index, 1);
    item.onlist = false;
  },
  decrement(item){
    if(item.times > 0){
      item.times--;
    }
  }
  }
}
</script>



<style scoped>

.product {
  margin: 10px;
  margin-top: 50px;
  background-color: #CAEBF2;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.times{
  height: 50px;
  width: 150px;
  background-color: #85ffd2;

}

.buttons{
  display: flex;
}


.addtolist{
  background-color:#007CC7;
  width:100px;
}
</style>
