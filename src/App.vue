<template>
  <div id="app">
    <header v-if="$store.getters.loggedIn">
      <side-bar-nav></side-bar-nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SideBarNav: require('./SideBarNav')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
