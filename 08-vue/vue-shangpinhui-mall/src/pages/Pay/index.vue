<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">请您在提交订单<em class="orange time">
            4小时</em>之内完成支付，超时订单会自动取消。订单号：
            <em>{{ orderId }}</em></span>
          <span class="fr"><em class="lead">应付金额：</em>
            <em class="orange money">￥{{ payInfo.totalFee }}</em></span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明：</h4>
        <ol>
          <li>尚品汇商城支付平台目前支持<span class="zfb">支付宝</span>支付方式。</li>
          <li>其它支付渠道正在调试中，敬请期待。</li>
          <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
        </ol>
        <h4>支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）</h4>
        <ul>
          <li>支付帐号：11111111</li>
          <li>密码：111111</li>
          <li>支付密码：111111</li>
        </ul>
      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li><img src="./images/pay2.jpg"></li>
            <li><img src="./images/pay3.jpg"></li>
          </ul>

        </div>
        <div class="hr"></div>

        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付网银</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li><img src="./images/pay10.jpg"></li>
              <li><img src="./images/pay11.jpg"></li>
              <li><img src="./images/pay12.jpg"></li>
              <li><img src="./images/pay13.jpg"></li>
              <li><img src="./images/pay14.jpg"></li>
              <li><img src="./images/pay15.jpg"></li>
              <li><img src="./images/pay16.jpg"></li>
              <li><img src="./images/pay17.jpg"></li>
              <li><img src="./images/pay18.jpg"></li>
              <li><img src="./images/pay19.jpg"></li>
              <li><img src="./images/pay20.jpg"></li>
              <li><img src="./images/pay21.jpg"></li>
              <li><img src="./images/pay22.jpg"></li>

            </ul>
          </div>

        </div>
        <div class="hr"></div>

        <div class="submit">
          <!--<router-link class="btn" to="/paysuccess">立即支付</router-link>-->
          <a href="javascript:" class="btn" @click="open">立即支付</a>
        </div>
        <div class="otherpay">
          <div class="step-tit">
            <h5>其他支付方式</h5>
          </div>
          <div class="step-cont">
            <span><a href="weixinpay.html" target="_blank">微信支付</a></span>
            <span>中国银联</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'Pay',
  data() {
    return {
      orderId: '',
      payInfo: {},
      payStatus: 0,
    }
  },
  beforeMount() {
    this.orderId = this.$route.query.orderId
  },
  mounted() {
    this.getPayInfo()
  },
  methods: {
    async getPayInfo() {
      const result = await this.$API.reqPayInfo(this.orderId)
      //如果成功：组件当中存储支付信息
      if (result.code === 200) {
        this.payInfo = result.data
      }
    },

    //1、点击按钮能够弹出消息盒子(配置盒子)
    //2、生成二维码图片（请求回来的支付信息当中包含了一个生成二维码所有的数据并不是图片url（微信给我们的一个数据））
    //3、轮询
    async open() {
      //1、点击立即支付后，先生成二维码
      try {
        const imgUrl = await QRCode.toDataURL(this.payInfo.codeUrl)
        //2、生成二维码图片url成功之后，再去弹出消息盒子
        this.$alert(`<img src="${imgUrl}" >`, '请使用微信扫码支付', {
          dangerouslyUseHTMLString: true,
          showClose: false,
          showCancelButton: true,
          cancelButtonText: "支付遇到问题",
          confirmButtonText: "我已成功支付",
          center: true,
          //5、处理按钮,可以自己选择关闭还是不关闭消息盒子
          beforeClose: (action, instance, done) => {
            //action  确认  还是取消  还是close
            //instance 代表当前弹出的消息盒子实例
            //done  就是给我们的开关   是一个函数
            if (action === 'confirm') {
              //点击确认按钮的逻辑
              //开发人员：为了自己方便，这里判断先不要了
              /*if (this.payStatus) {
                clearInterval(this.timer)
                this.timer = null
                done()
                this.$router.push('/paysuccess')
              } else {
                this.$message.success('请确保支付成功，支付成功会自动跳转')
              }*/
              clearInterval(this.timer)
              this.timer = null
              done()
              this.$router.push('/paysuccess')

            } else if (action === 'cancel') {
              //点击取消按钮的逻辑
              this.$message.warning('请联系管理员')
              clearInterval(this.timer)
              this.timer = null
              done()
            }
          }
        })
            .then(() => {
            })  //对应的是点击确定按钮的逻辑，只要点击了按钮，就会强制关闭消息盒子，我们控制不了关闭不关闭
            .catch(() => {
            }) //对应的是点击取消按钮的逻辑，只要点击了按钮，就会强制关闭消息盒子，我们控制不了关闭不关闭

        //3、设置循环定时器（轮询），发送请求看用户对于这个订单是否支付成功
        if (!this.timer) {
          this.timer = setInterval(async () => {
            const result = await this.$API.reqPayStatus(this.orderId)
            if (result.code === 200) {
              //4、如果支付成功
              // 1）跳转支付成功页面
              // 2）清除定时器
              // 3）关闭消息盒子
              // 4）存储支付成功状态  是为了后期用户点击按钮的时候的判断依据
              this.payStatus = 200
              clearInterval(this.timer)
              this.timer = null
              this.$msgbox.close() //关闭消息盒子
              await this.$router.push('/paysuccess')
            }
          }, 1000)
        }
      } catch (e) {
        //生成失败，不需要弹出
        console.error(e);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;

  .pay-container {
    margin: 0 auto;
    width: 1200px;

    a:hover {
      color: #4cb9fc;
    }

    .orange {
      color: #e1251b;
    }

    .money {
      font-size: 18px;
    }

    .zfb {
      color: #e1251b;
      font-weight: 700;
    }

    .checkout-tit {
      padding: 10px;

      .tit-txt {
        font-size: 14px;
        line-height: 21px;

        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(./images/icon.png) no-repeat 0 0;
        }

        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
        }
      }

      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;

        .fl {
          float: left;
        }

        .fr {
          float: right;

          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }

    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;

      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }

      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }

      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }

    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;

      .hr {
        height: 1px;
        background-color: #ddd;
      }

      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }

      .step-cont {
        margin: 0 10px 12px 20px;

        ul {
          font-size: 0;

          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
    }

    .submit {
      text-align: center;

      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>