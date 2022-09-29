<style scoped>
  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
  }
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 200px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  .layout-content-main{
      padding: 10px;
  }
  .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      color: #9ea7b4;
  }
  .layout-menu-left{
      background: #464c5b;
  }
  .layout-header{
      height: 60px;
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
  }
  .layout-ceiling-main a{
      color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
      display: none;
  }
  .ivu-col{
      transition: width .2s ease-in-out;
  }
  i{
    font-size: 24px;
  }
</style>
<template>
  <div id="app">
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" style="height:100%">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Menu-item v-for="item in router" :name="item.id" :to="item.path" :key="item.id">
                        <!-- <Icon type="ios-navigate" :size="iconSize"></Icon> -->
                        <i :class="item.icon"></i>
                        <span class="layout-text">{{item.name}}</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <i style="padding-top:10px;height: 48px;" v-if="spanLeft==5" class="el-icon-s-fold" size="24"></i>
                        <i style="padding-top:10px;height: 48px;" v-if="spanLeft==1" class="el-icon-s-unfold" size="24"></i>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view />
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              spanLeft: 5,
              spanRight: 19,
              router: []
          }
      },
      mounted: function(){
        this.router = [{
            name: '首页',
            path: '/home',
            id: 1,
            icon: 'el-icon-s-home'
        },{
            name: '菜单',
            path: '/menu',
            id: 2,
            icon: 'el-icon-s-operation'
        },{
            name: '账单',
            path: '/august',
            id: 3,
            icon: 'el-icon-s-finance'
        }]
      },
      computed: {
          iconSize () {
              return this.spanLeft === 5 ? 14 : 24;
          }
      },
      methods: {
          toggleClick () {
              if (this.spanLeft === 5) {
                  this.spanLeft = 1;
                  this.spanRight = 23;
              } else {
                  this.spanLeft = 5;
                  this.spanRight = 19;
              }
          }
      }
  }
</script>
<style>
  body{
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
  }
  #app{
    height: 100vh;
  }
</style>
