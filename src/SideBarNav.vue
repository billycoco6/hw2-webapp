<template lang="html">
  <div class="left-sidenav">
    <div class="container">
      <div class="line"></div>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">Feeds</template>
          <router-link :to="{ name: 'Post.index' }"><el-menu-item index="2-1">Home</el-menu-item></router-link>
          <router-link :to="{ name: 'Post.new' }"><el-menu-item index="2-2">New Feed</el-menu-item></router-link>
        </el-submenu>
        <router-link :to="{ name: 'SignIn' }"><el-menu-item index="1">Log Out</el-menu-item></router-link>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style media="screen">
  .container {
    margin-bottom: 20px;
  }
</style>
