<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix" v-for="address in addressInfo" :key="address.id">
        <span class="username" :class="{selected:address.isDefault === '1'}">{{ address.consignee }}</span>
        <p @click="changeDefault(address,addressInfo)">
          <span class="s1">{{ address.userAddress }}</span>
          <span class="s2">{{ address.phoneNum }}</span>
          <span class="s3" v-if="address.isDefault === '1'">默认地址</span>
        </p>
      </div>

      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left:5px;">货到付款</span>

      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul class="list clearFix" v-for="detail in detailArrayList" :key="detail.skuId">
          <li>
            <img :src="detail.imgUrl" alt="" style="width: 100px; height: 80px">
          </li>
          <li>
            <p>{{ detail.skuName }}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>{{ detail.orderPrice }}</h3>
          </li>
          <li>X{{ detail.skuNum }}</li>
          <li>有货</li>
        </ul>

      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea placeholder="建议留言前先与商家沟通确认" class="remarks-cont" v-model="message"></textarea>

      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>{{ tradeInfo.totalNum }}</i>件商品，总商品金额</b>
          <span>¥{{ tradeInfo.totalAmount }}.00</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">应付金额:　<span>¥{{ tradeInfo.totalAmount }}.00</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ defaultUserAddress.fullAddress }}</span>
        收货人：<span>{{ defaultUserAddress.consignee }}</span>
        <span>{{ defaultUserAddress.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <!--<router-link class="subBtn" to="/pay">提交订单</router-link>-->
      <a href="javascript:" class="subBtn" @click="submitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
// import {reqSubmitOrder} from "@/api";

export default {
  name: 'Trade',
  data() {
    return {
      message: '',
      // orderNo:''
    }
  },
  mounted() {
    this.getTradeInfo()
    this.getUserAddress()
  },
  methods: {
    getTradeInfo() {
      this.$store.dispatch('getTradeInfo')
    },
    getUserAddress() {
      this.$store.dispatch('getUserAddress')
    },
    //修改默认收货地址
    changeDefault(address, addressInfo) {
      addressInfo.forEach(item => item.isDefault = '0')
      address.isDefault = '1'
    },
    async submitOrder() {
      //带上交易编号和交易信息发请求创建订单获取订单编号
      let tradeNo = this.tradeInfo.tradeNo
      let tradeDate = {
        consignee: this.defaultUserAddress.consignee, //最终收件人的名字
        consigneeTel: this.defaultUserAddress.phoneNum, //最终收件人的手机号
        deliveryAddress: this.defaultUserAddress.fullAddress, //收件人的地址
        paymentWay: "ONLINE", //支付方式
        orderComment: this.message, //买家的留言信息
        orderDetailList: this.tradeInfo.detailArrayList, //商品清单
      }
      try {
        const result = await this.$API.reqSubmitOrder(tradeNo, tradeDate)
        if (result.code === 200) {
          //这里是存储订单编号，存不存都行，因为订单编号是要带到下个页面的
          // this.orderNo = result.data
          alert('提交成功，准备跳转支付页面')
          //跳转支付页面需要带上请求回来的订单编号
          await this.$router.push('/pay?orderId=' + result.data)
        }
      } catch (e) {
        alert('提交失败')
      }
    }
  },
  computed: {
    ...mapGetters(['detailArrayList', 'orderDetailVoList']),
    addressInfo() {
      return this.$store.state.trade.address
    },
    tradeInfo() {
      return this.$store.state.trade.tradeInfo
    },
    //计算最终确定的用户信息，根据上面点击修改默认而发生变化的
    defaultUserAddress() {
      return this.addressInfo.find(item => item.isDefault === '1') || {}
    }
  }
}
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;

        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {

            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {

            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;

    }
  }

}
</style>