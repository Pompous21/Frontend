<template>
  <div class="bg-e-white">
    <div class="bgImg">
    </div>
    <div class="outer" style="height: 75px; margin-bottom: 10px">
      <div class="inner bg-white" style="height: 100%; padding: 0 15px; display: flex">
        <div style="flex: auto; display: flex">
          <div class="module" @click="$router.push('/')"><i class="el-icon-s-home"></i> 主页</div>
          <div class="module"><i class="el-icon-star-on"></i> 收藏功能</div>
          <div class="module"><i class="el-icon-star-off"></i> 收藏图片</div>
          <div class="module" @click="$router.push('/personal-center/settings')"><i class="el-icon-setting"></i> 设置</div>
        </div>

        <div style="display: flex">
          <a href="localhost:8080" class="data-block" style="">
            <p class="data-title">服务数</p>
            <p class="data-details">200</p>
          </a>
          <a href="localhost:8080" class="data-block" style="">
            <p class="data-title">余额</p>
            <p class="data-details">￥200</p>
          </a>
          <a href="localhost:8080" class="data-block" style="">
            <p class="data-title">会员有效期</p>
            <p class="data-details">29天</p>
          </a>
        </div>
      </div>
    </div>

    <div class="outer" style="height: 2000px">
      <div class="inner bg-white" style="height: 100%">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PersonalCenter"
  }
</script>

<style scoped>
  .bgImg {
    height: 180px;
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    background: url("../assets/header_banner.png") no-repeat;
    background-size: 100%;
  }
  .bg-white {
    background: #FFFFFF;
  }
  .bg-e-white {
    background: #EEEEEE;
  }
  .outer {
    padding: 0 200px
  }

  .module {
    margin: 0 15px;
    height: 100%;
    line-height: 75px;
    cursor: pointer;
  }
  .data-block {
    margin: 0 10px;
    height: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .data-title {
    height: 15px;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    color: #99A2AA;
  }
  .data-details {
    height: 15px;
    margin-top: 5px;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    color: #222222;
  }
</style>