<template>
  <div class="post">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-message"></i><br><span style="line-height: 36px;">{{ post.name }}</span>
      </div>
      <div class="text item">
        <p class="content"> {{ post.content }} </p>
      </div>
    </el-card>
    <br>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 100%;
  }

  .content {
    color: #999;
  }
</style>
