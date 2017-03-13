import Vue from 'vue'
import store from '../store'

export default {
  checkLoggedIn (callback) {
    console.log(store)
    Vue.$http.get('/users/check_signed_in.json')
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },

  signin (username, password, callback) {
    console.log(store)
    var signinParams = {
      user: {
        username: username,
        password: password
      }
    }
    Vue.$http.post('/users/api_sign_in.json', signinParams)
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },

  signout (callback) {
    console.log(store)
    Vue.$http.delete('/users/api_sign_out.json')
    .then(function (response) {
      store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  }
}
