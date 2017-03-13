<template>
  <div class="register">

    <el-alert v-if="seen"
      title="password and confirm password don't match"
      type="error">
    </el-alert>
    <h2>Register</h2>
    <el-form ref="form" label-width="150px">
      <el-form-item label="First Name">
        <el-input v-model="firstname"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="lastname"></el-input>
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password">
        <el-input type="password" v-model="confirmPassword"></el-input>
      </el-form-item>

      <el-progress :show-text="false" :stroke-width="10" :percentage="percentage" status="success"></el-progress><br>

      <el-button type="primary" @click="onSubmit">Join now</el-button>
      <router-link :to="{ path: '/' }">
        <el-button>Cancel</el-button>
      </router-link>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: '',
        seen: false,
        percentage: 0,
        fillFirstName: false,
        fillLastName: false,
        fillUsername: false,
        fillPassword: false,
        fillConfirmPassword: false
      }
    },
    watch: {
      firstname () {
        if (this.firstname !== '' && !this.fillFirstName) {
          this.percentage += 20
          this.fillFirstName = true
        } else if (this.firstname === '') {
          this.percentage -= 20
          this.fillFirstName = false
        }
      },
      lastname () {
        if (this.lastname !== '' && !this.fillLastName) {
          this.percentage += 20
          this.fillLastName = true
        } else if (this.lastname === '') {
          this.percentage -= 20
          this.fillLastName = false
        }
      },
      username () {
        if (this.username !== '' && !this.fillUsername) {
          this.percentage += 20
          this.fillUsername = true
        } else if (this.username === '') {
          this.percentage -= 20
          this.fillUsername = false
        }
      },
      password () {
        if (this.password !== '' && !this.fillPassword) {
          this.percentage += 20
          this.fillPassword = true
        } else if (this.password === '') {
          this.percentage -= 20
          this.fillPassword = false
        }
      },
      confirmPassword () {
        if (this.confirmPassword !== '' && !this.fillConfirmPassword) {
          this.percentage += 20
          this.fillConfirmPassword = true
        } else if (this.confirmPassword === '') {
          this.percentage -= 20
          this.fillConfirmPassword = false
        }
      }
    },
    methods: {
      onSubmit () {
        var app = this
        if (app.password !== app.confirmPassword) {
          app.seen = true
        } else {
          console.log('submit!')
          app.$router.push({
            path: '/'
          })
        }
      }
    }
  }
</script>

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
