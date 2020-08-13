<template>
  <div class="home">
    <div style="background: skyblue;    border-bottom: 1px solid #e5e5e5;    border-top: 1px solid #e5e5e5;">
      <div class="top bg-common w-1200 margin-au-to">
        <!--登录注册位置-->
        <div style="background: skyblue" class="fs-14 sxf-pt-3 sxf-pb-4 ">
          <div class="flex column-center row-space-between">
            <div>
              <div class="fc-common">
                欢迎来到PcHome外商114！
              </div>
            </div>
            <div class="flex">
              <div class="sxf-mr-20" @click="goToLog(1)">
                登录
              </div>
              <div @click="goToLog(2)">
                注册
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="">
      <!--搜索-->
      <div style="background: skyblue">
        <div class="flex w-1200 margin-au-to sxf-p-20 ">
          <div class="flex column-center ">
            <div class="sxf-mr-60">
              <img src="../../../static/img/logo.png" class="w-198 h-70" alt="">
            </div>
            <div class="flex column-center">
              <div>
                <select class="h-44 w-151">
                  <option value ="商品名称">商品名称</option>
                  <option value ="公司名称">公司名称</option>
                </select>
              </div>
              <div>
                <input type="text" class="h-40 w-390 sxf-p-0">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--tab标签-->
      <div style="background: skyblue;border-top:1px solid red;border-bottom:1px solid red;">

        <div class="w-1200 margin-au-to">
          <div>
            <ul class="flex sxf-m-0 sxf-p-0 bg-c-ffffff" >
              <li class="w-100 h-40 lineH-40"
                  v-for="(v, i) in tabList"
                  :key="i"
                  @click="changeTab(i)"
                  :class="tabIndex === i ? 'on' : 'off'">
                {{v.name}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      // 登录|注册
      goToLog (i) {
        switch (i) {
          case 1:
            console.log('登录')
            break
          case 2:
            console.log('注册')
            break
        }
      },
    }
  }
</script>


<style scoped lang="scss">
</style>
