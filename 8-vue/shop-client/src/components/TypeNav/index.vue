<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item" v-for="(c1) in categoryList" :key="c1.categoryId">
            <h3>
              <a href="javascript:"
                 :data-categoryName="c1.categoryName"
                 :data-category1Id="c1.categoryId"
              >{{ c1.categoryName }}</a>
              <!--<a href="javascript:" @click="$router.push(`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`)">{{ c1.categoryName }}</a>-->
              <!--<router-link :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`">
                {{ c1.categoryName }}
              </router-link>-->
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                    <a href="javascript:"
                       :data-categoryName="c2.categoryName"
                       :data-category2Id="c2.categoryId"
                    >{{ c2.categoryName }}</a>
                    <!--<router-link :to="`/search?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`">
                      {{ c2.categoryName }}
                    </router-link>-->
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="javascript:"
                         :data-categoryName="c3.categoryName"
                         :data-category3Id="c3.categoryId"
                      >{{ c3.categoryName }}</a>
                      <!--<router-link :to="`/search?categoryName=${c3.categoryName}&category3Id=${c3.categoryId}`">
                        {{ c3.categoryName }}
                      </router-link>-->
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
1.dispatch()触发发请求的异步action调用 ==> 数据从后台接口请求到vuex的state中
2.store.state / mapState() 读取vuex中state数据，数据从state到组件的computed
3.在模板中动态显示
*/
import {mapState} from "vuex";

export default {
  name: "TypeNav",
  computed: {
    /*categoryList() {
      return this.$store.state.home.categoryList
    }*/
    // ...mapState(['categoryList']) //不行
    // ...mapState({categoryList: 'categoryList'})//不可以
    ...mapState({
      categoryList: state => state.home.categoryList //函数接收的是总状态，返回值作为计算属性
    })
  },
  methods: {
    toSearch(event) {
      const target = event.target
      // alert(target.tagName)
      console.dir(target)
      //取出data自定义属性值
      const {categoryname, category1id, category2id, category3id} = target.dataset
      // if (target.tagName.toUpperCase() === 'A') {
      if (categoryname) {
        //准备query参数
        const query = {
          categoryName: categoryname
        }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else if (category3id) {
          query.category3Id = category3id
        }
        //跳转到search
        this.$router.push({
          name: 'search',
          query
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>