<template>
    <mk-main>
      <div slot="body">
        <div class="crumb-nav">
          <div class="crumb-list"><a href="">首页</a></div>
          <div class="crumb-list"><a href="">资料列表名称</a></div>
          <div class="crumb-list"><a href="">列表名称</a></div>
        </div>
        <div class="datum-detail">
          <div class="d-title">
            卖客星球系统应用-聚客操作手册卖客星球系统应用-聚客操作手册卖客星球系统应用-聚客操作手册卖客星球系统应用-聚客操作手册
          </div>
          <div class="d-info">
            <div class="name">名字</div>
            <div class="time">2018-02-26</div>
            <div class="down"><i>↓</i>62</div>
          </div>
          <div class="bnclosure">
            <span class="file-type">PDF</span>
            <span class="f-name">附件标题名称附件标题名称</span>
            <span class="f-size">78kb</span>
            <button class="btn download"><i></i>下载</button>
          </div>
          <div class="d-des">
            简介：数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，透过数据洞察背后的业务规律，数据分析与电商运营业务密不可分，透过数据洞察背后的业务规律，
          </div>
          <div class="d-richText">
            正文或者富文本，正文或者富文本，正文或者富文本，正文或者富文本，正文或者富文本，正文或者富文本，正文或者富文本，正文或者富文本
          </div>
        </div>
      </div>
    </mk-main>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {};
        },
        methods: {},
      components: {
        'mkMain': (resolve) => {
          require(['./main'], resolve);
        },
      }
    };
</script>

<style lang="scss" scoped>
    @import '../assets/fn.scss';
    @import '../assets/datumDetail.scss';

</style>
