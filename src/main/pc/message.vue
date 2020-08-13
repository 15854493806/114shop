<template>
  <div class="message">
    <div class="chat w-100p">
      <div class="chat-list sxf-p-15" v-for="(v, i) in chatList" :key="i" >
        <!--用户发来的信息-->
        <div  class="flex column-center row-start" v-if="v.type === 1">
          <div class="flex column-center ">
            <img class="w-80 h-80 br-50p"
                 :src="v.head_img" />
          </div>
          <div class="sxf-ml-15">
            <div>
              <div class="sxf-mb-10 fc-666666 t-a-left">
                {{v.nickname}}
              </div>
            </div>
            <div class="row-start flex">
              <!--文本-->
              <div class="bg-c-ffffff br-20 t-a-left" v-if="v.sendType === 2">
                {{v.message}}
              </div>
            </div>

            <!--图片-->
            <div class="bg-c-ffffff br-20 t-a-left" v-if="v.sendType === 1">
              <img :src="v.message" class="w-471  h-390" />
            </div>
          </div>
        </div>

        <!--商家发的-->
        <div v-else class="flex column-center row-end">
          <div class="sxf-mr-15">
            <div>
              <div class="sxf-mb-10 fc-666666 t-a-right">
                {{v.nickname}}
              </div>
            </div>
            <!--todo ‘content_type’ : 1, // 内容类型 1文字 2图片 3商品-->
            <!--todo ‘message_type’ : ‘receipt’, // 消息类型 receipt 消息回执，ordinary 普通消息-->
            <div class="row-end flex">
              <!--文本信息-->
              <div class="bg-c-ffffff br-20 t-a-right " v-if="v.sendType === 2">
                {{v.message}}
              </div>
            </div>
            <!--图片信息-->
            <div class="bg-c-ffffff br-20 t-a-right" v-if="v.sendType === 1">
              <img :src="v.message" class="w-471 h-390" />
            </div>
          </div>


          <div class="flex column-center">
            <img class="w-80 h-80 br-50p" :src="v.head_img" />
          </div>
        </div>
      </div>
    </div>

    <div class="foot w-100p ">
      <div class="flex column-center sxf-p-20 bg-c-ffffff">
        <input type="text" class="w-100p br-20 sxf-mr-20 h-30 br-bd" v-model="sendText">
        <button @click="send" class="w-300 br-20 h-30 br-bd">
          发送
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sendText: '',
        chatList: [
          {
            type: 1, // 1是用户2是我发的
            message: '发送的消息',
            sendType: 2, // 1是图片2是文字
            nickname: '用户名1',
            head_img: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          },
          {
            type: 1, // 1是用户2是我发的
            message: '发送的消息',
            sendType: 2, // 1是图片2是文字
            nickname: '用户名1',
            head_img: 'https://www.baidu.com/img/flexible/logo/pc/result.png',

          },
          {
            head_img: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
            type: 1, // 1是用户2是我发的
            message: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597038490701&di=871ad6251db1fb7eabb3d85ee5c012a4&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png',
            sendType: 1, // 1是图片2是文字
            nickname: '用户名1'
          },
          {
            head_img: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
            type: 1, // 1是用户2是我发的
            message: '发送的消息',
            sendType: 2, // 1是图片2是文字
            nickname: '用户名1'
          },
          {
            head_img: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1',
            type: 2, // 1是用户2是我发的
            message: '发送的消息',
            sendType: 2, // 1是图片2是文字
            nickname: '用户名2'
          }
        ],
        wsUrl:''
      }
    },
    methods: {

      //初始化weosocket
      initWebSocket() {
        if (typeof WebSocket === "undefined") {
          alert("您的浏览器不支持WebSocket");
          return false;
        }
        const wsUri = 'wss://echo.websocket.org';  // websocket地址
        this.websock = new WebSocket(wsUri);
        this.websock.onopen = this.websocketonopen;
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      send () {
        this.websocketonopen()
      },
      //连接成功
      websocketonopen() {
        console.log("WebSocket连接成功");
        // 添加心跳检测，每30秒发一次数据，防止连接断开（这跟服务器的设置有关，如果服务器没有设置每隔多长时间不发消息断开，可以不进行心跳设置）
        let self = this;
        this.timer = setInterval(() => {
          try {
            self.websock.send(this.sendText)
            self.sendText = '';
            console.log('发送消息');
          }catch(err){
            console.log('断开了：' + err);
            self.connection()
          }
        }, 30000)
      },
      //接收后端返回的数据，可以根据需要进行处理
      websocketonmessage(e) {
        console.log(e, 'eeee')
        var vm = this;
        let data1Json = JSON.parse(e.data);
        console.log(data1Json);
      },
      //连接建立失败重连
      websocketonerror(e) {
        console.log(`连接失败的信息：`, e);
        this.initWebSocket(); // 连接失败后尝试重新连接
      },
      //关闭连接
      websocketclose(e) {
        console.log("断开连接", e);
      }
    },
    created() {
      if (this.websock) {
        this.websock.close(); // 关闭websocket连接
      }
      this.initWebSocket();
    },
    destroyed() {
      //页面销毁时关闭ws连接
      if (this.websock) {
        this.websock.close(); // 关闭websocket
      }
    }
  }
</script>


<style scoped lang="scss">
  .message {
    /*background: url(https://www.waishang114.com/theme/hanshang114.ver1.0/image/body_bg.gif) repeat 0 0;*/
    height: 100vh;
    .chat {
      height: 100vh;
      .chat-list {
        &:last-child {
          margin-bottom: 80px;
        }
      }
    }
    .foot {
      position: fixed;
      bottom: 0;
    }
  }
</style>
