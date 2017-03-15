<template>
  <div class="comment">
    <i class="el-icon-information"></i>
    {{ comment.user.email }}<br>
    {{ comment.content }}
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .md-list-item {
    padding-left: 40px;
  }
</style>
