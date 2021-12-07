
<template>
  <el-container>
    <Header />
    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="16" :lg="16" :xl="12" class="content-wrap">
          <el-row :gutter="0">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="background-color:red;">
              a
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="background-color:green">
              b
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="col-image" src="https://www.ikazuchi.biz/marketplace/kanri/image.php?file=service_detail.19.11.jpg" alt="">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <h2 class="ttl">問合わせ支援のチャットボットサービス</h2>
              <p>
                社内／社外向けにチャットボットを導入する場合、問い合わせの回答をチャットボット自動化することで、コールセンターやカスタマーサポートの対応コストを削減できます。<br /><br />
                例えば、社内向けでは、経費や総務手続きの申請方法についての問い合わせサポート、社外向けでは、ECサイトの商品や配送料の問い合わせのサポートなど、よくある質問・問い合わせをチャットボットで対応可能です。
              </p>
            </el-col>
          </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="container">
      <el-col :xs="24" :sm="20" :md="16" :lg="16" :xl="12" class="content-wrap">
        abc
      </el-col>
    </el-row>
        <div class="content-wrap">
          <el-rate v-model="value" :colors="colors" :max="10"></el-rate>
        </div>
        <div class="content-wrap">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </div>
        <div class="content-wrap">
          <el-button type="text" @click="dialogVisible = true">ダイアログを開きます</el-button>

          <el-dialog
            title="ダイアログタイトル"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>ダイアログです。</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">キャンセル</el-button>
              <el-button type="primary" @click="dialogVisible = false">OK</el-button>
            </span>
          </el-dialog>
        </div>

    <el-footer>: container for footers.
    </el-footer>

  </el-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      value: null,
      dialogVisible: false,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  },
  methods: {
    handleClose(done: any) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
});
</script>

<style>
body {
    margin: 0px;
    padding: 0px;
    /* font-family: -apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"; */
    font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", sans-serif;
}
</style>
<style scoped>
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* min-height: calc(100vh - 60px); */
    align-items: center;
    /* text-align: center; */
    width: 100%;
    background-color:#edf2f7;
  }

  .content-wrap {
    background-color:#fff;
    border-radius: 10px;
    margin-top:10px;
    padding:10px;
  }

  .el-progress {
    margin-bottom: 1em;
  }

  .col-logo{

  }

  .col-button{

  }

  .col-image{
    width: 100%;
    object-fit: contain;
    margin-top: 20px;
  }

  .col-lead{

  }

  .col-lead .ttl{
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #dcdcdc;
  }
  

</style>