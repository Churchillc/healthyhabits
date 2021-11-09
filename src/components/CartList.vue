<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <div class="price">
          <button class="auto" v-on:click="addItem(product)">{{isTracked(product)}}</button>
          <div class = "times" v-if="product.tracked">
          <h2> Times Completed: {{getTimes(product)}} </h2>
          </div>

        </div>
        <button class="auto increment" v-on:click="increment(product)">+ times completed</button>
        <button class="auto decrement" v-on:click="decrement(product)">- times completed</button>
        <div v-if="product.onlist">
        <button class="auto addtolist" v-on:click="toggleList(product)">remove from todo list</button>
        </div>
        <div v-else>
          <button class="auto addtolist" v-on:click="toggleList(product)">add to todo list</button>
        </div>

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
  },
  decrement(item){
    if(item.times > 0){
      item.times--;
    }
  },
  toggleList(item){
    item.onlist = !item.onlist;
    if(item.onlist){
      this.$root.$data.todoList.push(item);
    }
    else{
      const index = this.$root.$data.todoList.indexOf(item);
      this.$root.$data.todoList.splice(index, 1);
    }
  }
  }
}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 400px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #CAEBF2;
  color: #000;
  padding: 10px 30px;
  height: 270px;
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


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.times{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #85ffd2;
  width: 250px;
  height: 50px;
}

.auto {
  margin-right: auto;
  margin-top: 10px;
  background-color:#007CC7;
  width: 100px;
}

.increment{
  background-color:#4DA8DA;
  width:165px;
}

.decrement{
  background-color:#FF3B3F;
  width:165px;
}

.addtolist{
  background-color:#203647;
  width:330px;
}
</style>
