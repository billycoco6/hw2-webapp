<template lang="html">
  <div class="left-sidenav">
    <div class="container">
      <div class="line"></div>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">Feeds</template>
          <router-link :to="{ name: 'Post.index' }"><el-menu-item index="2-1">Home</el-menu-item></router-link>
          <router-link :to="{ name: 'Post.new' }"><el-menu-item index="2-2">Create Feed</el-menu-item></router-link>
        </el-submenu>
        <a @click="logOut"><el-menu-item index="1">Log Out</el-menu-item></a>
      </el-menu>
    </div>
  </div>
</template>

<script>
import usersApi from '@/api/user.js'

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
    },
    logOut () {
      console.log('==== Logout ====')
      usersApi.signout(function () {
      })
    }
  }
}
</script>

<style media="screen">
  .container {
    margin-bottom: 20px;
  }
</style>
