<template>
  <div class="detail">
    <div class="br-tope5e5e5 br-bottome5e5e5">
      <div class="t-a-center h-26 fs-12 lineH-26 bg-F5F5F5">
        欢迎欢迎欢迎欢迎
      </div>
    </div>

    <div class=" br-bottome5e5e5">
      <div class=" h-26 lineH-26 bg-F5F5F5 flex row-center">
        <div class="sxf-mr-20 fs-12" @click="goToLog(1)">登录</div>
        <div class="fs-12"  @click="goToLog(2)">
          注册
        </div>
      </div>
    </div>
    <!--logo-->
    <div class="margin-au-to sxf-mt-20 sxf-mb-20">
      <img src="../../../static/img/logo.png" class="w-198 h-70" alt="">
    </div>
    <!--搜索-->
    <div class="flex column-center row-center br-bottome5e5e5 sxf-pb-20">
      <div>
        <select class="h-44 w-85">
          <option value ="商品名称">商品名称</option>
          <option value ="公司名称">公司名称</option>
        </select>
      </div>
      <div>
        <input type="text" class="h-40 w-221 sxf-p-0">
      </div>
    </div>


    <div class="sxf-p-5 t-a-left sxf-mb-15" style="border-bottom: 3px solid #E70E0E;" @click="changeMenu">
      <img src="../../../static/img/menu.png" class="w-44 h-34" alt="">
    </div>

    <!--商品信息-->
    <div class="sxf-pl-20 sxf-pr-20">
      <div class="">
        <img src="https://www.waishang114.com/data/file/product/1848497068_SuCt2zHF_1ad3d4b2753da4fb9d4b201747f22746b88704ef.jpg" class="w-320 h-320" alt="" style="border: 1px solid #000">
      </div>
      <div class="br-bottome5e5e5">
        <div class="fs-26 sxf-pb-15">
          黎明黎明黎明黎明黎明黎明黎明黎明
        </div>
      </div>
      <div class="flex fs-14 sxf-mt-10">
        <div class="sxf-mr-4">
          品牌：
        </div>
        <div>
          黎明
        </div>
      </div>
      <div class="flex fs-14">
        <div class="sxf-mr-4">
          品牌：
        </div>
        <div>
          黎明
        </div>
      </div>
      <div class="flex fs-14">
        <div class="sxf-mr-4">
          品牌：
        </div>
        <div>
          黎明
        </div>
      </div>
      <div class="flex fs-14 sxf-mb-10">
        <div class="sxf-mr-4">
          品牌：
        </div>
        <div>
          黎明
        </div>
      </div>
    </div>



    <div class="flex-wr-ap flex br-bottome5e5e5 br-tope5e5e5 sxf-pb-15 sxf-pt-15 sxf-mb-20">
      <div class="fs-14 w-150" v-for="(v,i) in footList" :key="i">
        {{v.name}}
      </div>
    </div>

    <div class="fs-13">
      <div>
        <span style="font-weight: bold;">外商114</span>
        <span>대표이사 : 김 일</span>
        <span>青岛市城阳区天安数码城32号楼224 (266109)</span>
        <span>대표메일 : mangtoo@126.com</span>
        <span>대표번호 : +86 180-5323-8485</span>
      </div>

      <div>
        <span>COPYRIGHT ⓒ 2017 WAISHANG114.COM ALL RIGHT RESERVED.</span>
      </div>


      <div>
        <img src="../../../static/img/weixin.jpg" class="w-177 h-177 sxf-mt-5" alt="">
        <div class="fs-12">
          外商114微信公众号
        </div>



        <div class="sxf-mt-15 sxf-mb-10">
          <img src="../../../static/img/pic.gif"  alt="">
        </div>
      </div>
    </div>

    <!--抽屉-->
    <drawer
      class="testtt"
      title=" "
      align="left"
      :visible.sync='isMenu'
      width="280px"
      close-on-click-modal
    >
      <div class="t-a-left br-bottome5e5e5">
        <p>内容</p>
      </div>
      <div class="t-a-left br-bottome5e5e5">
        <p>内容</p>
      </div>
      <div class="t-a-left br-bottome5e5e5">
        <p>内容</p>
      </div>
      <div class="t-a-left br-bottome5e5e5">
        <p>内容</p>
      </div>
    </drawer>
  </div>
</template>
<script>
  import drawer from '../../component/drawer/drawer.vue'
  export default {
    components: {drawer},
    data () {
      return {
        isMenu: false,
        footList: [
          {
            name: '와이상114 소개'
          },
          {
            name: '와이상114 입점'
          },
          {
            name: '중국 홍보 방법'
          },
          {
            name: '중국뉴스/정보'
          },
          {
            name: '서비스 이용약관'
          },
          {
            name: '개인정보 처리방침'
          }
        ],
        tabIndex: 0,
        tabList: [
          {
            name: '首页'
          },{
            name: '首页1'
          },{
            name: '首页2'
          },{
            name: '首页3'
          },{
            name: '首页4'
          },{
            name: '首5'
          },{
            name: '首页6'
          }
        ]
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
      changeTab (i) {
        this.tabIndex = i;
      },
      changeMenu () {
        this.isMenu = !this.isMenu;
        console.log(this.isMenu, 'false')
      },
      goToFootDetail (v) {
        console.log('进入foot详情')
      }
    }
  }
</script>


<style scoped lang="scss">
  .detail {
    height: 100vh;
    background: url(https://www.waishang114.com/theme/hanshang114.ver1.0/image/body_bg.gif) repeat 0 0;
    .commodityBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px;
      .commodityItem {
        width: 47%;
        box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.2);
        padding: 10px;
        cursor: pointer;
        background: gold;
        margin-bottom: 30px;
        box-sizing: border-box;
        &:hover {
          color: red;
        }
      }
    }

  }
</style>
