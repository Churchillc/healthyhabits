<template>
<div>
  <CartList :products="products" />
  <h2 class="empty">{{isEmptyMessage}}</h2>

</div>
</template>

<script>
import CartList from "../components/CartList.vue"
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
      return this.$root.$data.cart;
    },
    isEmptyMessage(){
      if(this.$root.$data.cart.length === 0){
        return "No habits to track";
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

h2{
  text-align: center;
}

.empty{
  color: #4DA8DA;
}

</style>
