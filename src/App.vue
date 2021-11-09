<template>
<div id="app">
    <div id="brand">
      <router-link to="/">
        <h1> Healthy Habits</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <p>My Todo List</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <p> My {{cartSize}} tracked habits </p>
        </div>
      </router-link>
    </div>
  <router-view />
</div>

</template>


<script>
export default {
  computed: {
    cartSize(){
      return this.$root.$data.cart.length;
    }
  }
}
</script>







<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #12232E;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #EEFBFB;
}

#brand {
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  display: flex;
  justify-content: center;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

p{
  font-size: 30px;
}

h1{
  font-size: 80px;
  text-decoration: none;
}

a:link{
  text-decoration: none;
  color: #EEFBFB;
}

a:visited{
  text-decoration: none;
  color: #EEFBFB;
}

.browse {
  margin-right: 50px;
}
</style>
