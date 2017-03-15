<template>
  <div class="posts">
    <h2>Feeds</h2>
    <div class="container" v-for="post in posts">
      <router-link :to="{ name: 'Post.show', params: {id: post.id} }">
        <iccs340-post :post='post'></iccs340-post>
      </router-link>
    </div>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'posts',
  components: {
    Iccs340Post: require('./Post')
  },
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
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

.posts {
    padding: 0 10px;
  }

.container {
    margin-bottom: 20px;
}
</style>
