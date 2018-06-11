<template>
  <div>
    <div class="mk-header-box">
      <div class="mk-header-top">
        <div class="mk-header-content">
          <div class="mk-header-top-left">
            <div class="mk-header-list"><a href="#">微商城</a></div>
            <div class="mk-header-list"><a href="#">玲珑塔</a></div>
            <div class="mk-header-list"><a href="#">小程序</a></div>
            <div class="mk-header-list"><a href="#">卖客小店</a></div>
            <div class="mk-header-list"><a href="#">天河系统</a></div>
            <div class="mk-header-list"><a href="#">服务支持</a></div>
            <div class="mk-header-list"><a href="#">资源</a></div>
          </div>
          <div class="mk-header-top-right">
            <div class="mk-header-list"><a href="">商家登录</a></div>
            <div class="mk-header-list"><a href="">注册开店</a></div>
          </div>
        </div>
      </div>
      <div class="mk-header-main">
        <div class="mk-header-content">
          <div class="mk-header-logo b-v-center">
            <div class="mk-header-logo-img"><img src="../assets/img/Logo.png" alt=""></div>
          </div>
          <div class="mk-header-main-right">
            <div class="mk-main-list active"><a href="#">首页</a></div>
            <div class="mk-main-list"><a href="#">课程中心</a></div>
            <div class="mk-main-list"><a href="#">新商家</a></div>
            <div class="mk-main-list"><a href="#"></a></div>
            <div class="mk-main-list b-v-center">
              <div class="search-region b-v-center">
                <div><select name="" id="" class="form-control">
                  <option value="">课程</option>
                  <option value="">资料</option>
                </select></div>
                <div class="search-input"><input type="text" placeholder="请输入关键词"></div>
                <div><button class="btn">O</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot name="body"></slot>
    <div class="mk-footer-box">
      <div class="mk-footer-content">
        <div class="mk-footer-sign">
          <div class="mk-footer-sign-list"><a href="#">卖客商城</a></div>
          <div class="mk-footer-sign-list"><a href="#">关于我们</a></div>
          <div class="mk-footer-sign-list"><a href="#">联系我们</a></div>
          <div class="mk-footer-sign-list"><a href="#">商家入驻</a></div>
          <div class="mk-footer-sign-list"><a href="#">合作伙伴</a></div>
          <div class="mk-footer-sign-list"><a href="#">卖客论坛</a></div>
        </div>
        <div class="mk-footer-copy">
          Copyright © 2013-2016 杭州卖客网络科技有限公司 卖客星球 版权所有 浙ICP备16025474号-1
        </div>
        <div class="mk-footer-logo">
          <div class="mk-footer-logo-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang="scss">
  @import "../assets/fn.scss";

</style>
