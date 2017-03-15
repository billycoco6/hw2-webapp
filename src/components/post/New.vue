<template>
  <div class="new-post">
    <el-form label-position="top" label-width="100px">
      <el-form-item label="Title">
        <el-input placeholder="your title" v-model="post.name"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input placeholder="you content" type="textarea" v-model="post.content"></el-input>
      </el-form-item>
      <el-button type="primary" @click="createPost">Post</el-button>
    </el-form>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      console.log('==== Create Post ====')
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Post.index' })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
