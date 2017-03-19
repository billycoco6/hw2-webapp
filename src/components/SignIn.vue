<template>
  <div class="sign-in">
    <h2>{{ msg }}</h2>
    <el-form ref="form" label-width="120px">
      <el-form-item label="username">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
    </el-form>
    <div class="">
      <el-button @click="signin" type="primary">Sign in</el-button>
    </div>
    <br>Not a member? <router-link :to="{ path: 'register' }">Join now</router-link>
  </div>
</template>

<script>
import UsersApi from '../api/user.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      username: '',
      password: '',
      msg: 'Welcome to your personal feeds'
    }
  },
  methods: {
    signin () {
      var app = this
      console.log('signin')
      UsersApi.signin(app.username, app.password, function (_response) {
        router.push({ name: 'Post.index' })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
