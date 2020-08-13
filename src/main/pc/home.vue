<template>
  <div class="home">
    <div class=" bg-F5F5F5 br-bottome5e5e5 br-tope5e5e5">
      <div class="top bg-F5F5F5 w-1200 margin-au-to">
        <!--登录注册位置-->
        <div class=" bg-F5F5F5 fs-14 sxf-pt-3 sxf-pb-4 ">
          <div class="flex column-center row-space-between">
            <div>
              <div class="fc-999999">
                欢迎来到PcHome外商114！
              </div>
            </div>
            <div class="flex">
              <div class="sxf-mr-20 fc-999999 cPointer"  @click="goToLog(3)">
                进入消息
              </div>
              <div class="sxf-mr-20 fc-999999 cPointer"  @click="goToLog(1)">
                登录
              </div>
              <div @click="goToLog(2)" class="fc-999999 cPointer">
                注册
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="">
      <!--搜索-->
      <div>
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
      <div style="border-top:1px solid #F5F5F5;border-bottom:1px solid red;">
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
    <!--轮播图-->
    <div style="" class="sxf-mt-20">
      <div class="w-1200 margin-au-to br-bd">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item, idx) in carouselList" :key="idx">
            <img :src="item.img" class="w-100p h-100p" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- todo 面包屑 待修改-->
    <div style="" class="sxf-mt-20">

      <div class="w-1200 margin-au-to">
        <div>
          <div class="flex">
            <div class="w-47 h-24 br-bd sxf-mr-10">首页</div>
            <div class="w-47 h-24 br-bd sxf-mr-10">首页</div>
            <div class="w-47 h-24 br-bd sxf-mr-10">首页</div>
          </div>
        </div>
      </div>
    </div>
    <!--列表-->
    <div style="" class="sxf-mt-20">
      <div class="w-1200 margin-au-to">
        <div class="commodityBox">
          <div class="commodityItem" v-for="(v, i) in commodityList" :key="i" @click="goToDetail(v)">
            <div>
              <img :src="v.img" class="h-233 w-100p" alt="">
            </div>
            <div class="sxf-mt-10 t-a-left">
              <span>{{v.name}}</span>
            </div>
            <div class="sxf-mt-10 fw-700 t-a-left">
              <span>{{v.comName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--隐私政策-->
    <div class="sxf-mt-10 foot-style-dadada" >

      <div class="w-1200 margin-au-to fs-13 h-50 lineH-50">
        <div class="flex privacy">
          <div v-for="(v, i) in footList" :key="i" class="sxf-mr-20" @click="goToFootDetail(v)">{{v.name}}</div>
        </div>
      </div>
    </div>
    <!--公司信息-->
    <div style="" class="sxf-pt-15">
      <div class="w-1200 margin-au-to fs-13 flex row-space-between">
        <div>
          <div class="flex">
            <div class="fc-848484">外商114</div>
            <div class="fc-848484">
              대표이사 : 김 일青岛市城阳区天安数码城32号楼224 (266109) 대표메일 : mangtoo@126.com 대표번호 : +86 180-5323-8485
            </div>
          </div>
          <div class="t-a-left sxf-mt-5">
            <div class="fc-848484">
              COPYRIGHT ⓒ 2017 WAISHANG114.COM ALL RIGHT RESERVED.
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src="https://www.waishang114.com/theme/hanshang114.ver1.0/image/weixin.jpg" class="w-90 h-90" alt="">
          </div>
          <div class="t-a-center">
            <span class="fc-848484">
              外商114微信公众号
            </span>
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
        carouselList: [
          {  img: '../../static/img/logo.png',},
          {  img: '../../static/img/logo.png',},
          {  img: '../../static/img/logo.png',},
          {  img: '../../static/img/logo.png',},
        ],
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
        commodityList: [
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          },
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          },
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          },
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          },
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          },
          {
            img: '../../static/img/logo.png',
            name: 'commm',
            comName: 'commm'
          }
        ],
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
            this.$router.push({
              path: '/PcLogin'
            })
            break
          case 2:
            console.log('注册')
            this.$router.push({
              path: '/PcRig'
            })
            break
          case 3:
            console.log('message')
            this.$router.push({
              path: '/PcMessage'
            })
            break
        }
      },
      changeTab (i) {
        this.tabIndex = i;
      },
      goToDetail (v) {
        console.log('进入详情')
        this.$router.push({
          path: '/PcDetails/' + 1
        })
      },
      goToFootDetail (v) {
        console.log('进入foot详情')
        this.$router.push({
          path: '/PcEnterpriseInfo'
        })
      }
    }
  }
</script>


<style scoped lang="scss">
  .home {
    background: url(https://www.waishang114.com/theme/hanshang114.ver1.0/image/body_bg.gif) repeat 0 0;
    height: 100vh;
    ul li {
      list-style: none;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: yellowgreen;
      }
    }
    .on {
      background: yellowgreen;
    }
    .off {
      background: #ffffff;
    }
    .commodityBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .commodityItem {
        width: 24.5%;
        padding: 10px;
        cursor: pointer;
        background: gold;
        margin-bottom: 10px;
        box-sizing: border-box;
        &:hover {
          color: red;
        }
      }
    }
    .privacy {
      div {
        cursor: pointer;
      }
    }
  }
</style>
