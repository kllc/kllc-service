<template>
  <el-container>
    <Header />
    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="20" :lg="18" :xl="16" class="content-wrap">
          <el-row class="row-1st">
            <el-col :span="20" class="col-title">
              <h1 class="box-title">QAChat</h1> 
            </el-col>
            <el-col :span="4" class="col-logo">
              <img class="img-logo" src="https://www.ikazuchi.biz/marketplace/kanri/image.php?file=service_detail.19.1.jpg" alt="">
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="col-image" src="https://www.ikazuchi.biz/marketplace/kanri/image.php?file=service_detail.19.11.jpg" alt="">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
              <h2 class="ttl">問合わせ支援のチャットボットサービス</h2>
              <p>
                社内／社外向けにチャットボットを導入する場合、問い合わせの回答をチャットボットで自動化することで、コールセンターやカスタマーサポートの対応コストを削減できます。<br /><br />
                例えば、社内向けでは、経費や総務手続きの申請方法についての問い合わせサポート、社外向けでは、ECサイトの商品や配送料の問い合わせのサポートなど、よくある質問・問い合わせをチャットボットで対応可能です。
              </p>
            </el-col>
          </el-row>
          <el-row class="row-button">
            <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
                  <el-col class="col-button">
                    <div class="btn-copy">デモページ詳細はこちら</div>
                    <a href="https://kllc.jp/demo/qachat/" target="_blank" class="btn btn--orange"><i class="fas fa-phone-alt fa-position-left"></i>デモページ</a>
                    <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
                  </el-col>
                <!-- </el-row>
            </el-col> -->
          </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="20" :lg="18" :xl="16" class="content-wrap">
          <el-row class="row-1st">
            <el-col :span="20" class="col-title">
              <h1 class="box-title">ミイダス</h1> 
            </el-col>
            <el-col :span="4" class="col-logo">
              <img class="img-logo" src="https://cdn2.hubspot.net/hub/5179987/hubfs/LP-dr-vol1/images/illust-p4.png?width=780&height=564&name=illust-p4.png" alt="">
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="col-image" src="https://cdn2.hubspot.net/hub/5179987/hubfs/LP-dr-vol1/images/illust-p1.png?width=460&height=452&name=illust-p1.png" alt="">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
              <h2 class="ttl">追加料金一切なしで、年間採用し放題の採用支援サービス</h2>
              <p>
                ああああああああああああああああああああああああああああああああああああああああああ。<br /><br />
                ああああああああああああああああああああああああああああああああああああああああああ。
              </p>
            </el-col>
          </el-row>
          <el-row class="row-button">
            <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
                  <el-col class="col-button">
                    <div class="btn-copy">お問い合わせ資料請求はこちら</div>
                    <a href="https://writeup-5179987.hs-sites.com/hubspot-2000-331" target="_blank" class="btn btn--orange"><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a>
                    <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
                  </el-col>
                <!-- </el-row>
            </el-col> -->
          </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="20" :lg="18" :xl="16" class="content-wrap">
          <el-row class="row-1st">
            <el-col :span="20" class="col-title">
              <h1 class="box-title">コピー機革命</h1> 
            </el-col>
            <el-col :span="4" class="col-logo">
              <img class="img-logo" src="https://cdn2.hubspot.net/hubfs/5179987/%E3%82%B3%E3%83%94%E3%83%BC%E3%82%AD%E9%9D%A9%E5%91%BD%EF%BC%88%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%EF%BC%89/c_ph05.jpg" alt="">
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="col-image" src="https://cdn2.hubspot.net/hubfs/5179987/%E3%82%B3%E3%83%94%E3%83%BC%E3%82%AD%E9%9D%A9%E5%91%BD%EF%BC%88%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%EF%BC%89/c_ph01.jpg" alt="">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
              <h2 class="ttl">定価100万円を超える複合機が、4000円/月（印刷代4000円込）でレンタル可能。</h2>
              <p>
                ああああああああああああああああああああああああああああああああああああああああああ。<br /><br />
                ああああああああああああああああああああああああああああああああああああああああああ。
              </p>
            </el-col>
          </el-row>
          <el-row class="row-button">
            <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
                  <el-col class="col-button">
                    <div class="btn-copy">お問い合わせ資料請求はこちら</div>
                    <a href="https://writeup-5179987.hs-sites.com/copy-1-0-203?copier_agency=kllc" target="_blank" class="btn btn--orange"><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a>
                    <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
                  </el-col>
                <!-- </el-row>
            </el-col> -->
          </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="20" :lg="18" :xl="16" class="content-wrap">
          <el-row class="row-1st">
            <el-col :span="20" class="col-title">
              <h1 class="box-title">MG研修（無料体験）</h1> 
            </el-col>
            <el-col :span="4" class="col-logo">
              <img class="img-logo" src="https://cdn2.hubspot.net/hub/5179987/hubfs/mg-online-logo2.jpg?width=185&name=mg-online-logo2.jpg" alt="">
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <img class="col-image" src="https://cdn2.hubspot.net/hub/5179987/hubfs/RELO_CLUB%E7%94%BB%E5%83%8F/illust-04-mg.png?width=200&height=214&name=illust-04-mg.png" alt="">
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
              <h2 class="ttl">『あの』MG研修が、無料で体験可能！！</h2>
              <p>
                ああああああああああああああああああああああああああああああああああああああああああ。<br /><br />
                ああああああああああああああああああああああああああああああああああああああああああ。
              </p>
            </el-col>
          </el-row>
          <el-row class="row-button">
            <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
                  <el-col class="col-button">
                    <div class="btn-copy">お問い合わせ資料請求はこちら</div>
                    <a href="https://writeup-5179987.hs-sites.com/mg-tpl-02-165-18" target="_blank" class="btn btn--orange"><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a>
                    <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
                  </el-col>
                <!-- </el-row>
            </el-col> -->
          </el-row>
      </el-col>
    </el-row>


■MG研修（無料体験）：
たかがゲームで終わらないすごさがここにある。。。
『あの』MG研修が、無料で体験可能！！
  ■MG研修（無料体験）：
> https://writeup-5179987.hs-sites.com/mg-tpl-02-165-18


■Jシステム（補助金・助成金自動診断システム）：
約１分で、受給可能な補助金、助成金の総額がわかります。
> ■Jシステム：
> https://writeup-5179987.hs-sites.com/jdnjsys-63


■Jコンサル：
格安で、その年に活用できる助成金をご紹介し、
受給するまで最大受給額を目指してサポート致します。
※返金保障制度あり。
> ■Jコンサル：
> https://writeup-5179987.hs-sites.com/jcon-jdn-398

■WEBコンサル：
制作・分析・集客まで、ワンストップでサポート
> ■WEBコンサル：
> https://writeup-5179987.hs-sites.com/jdn-webconsulting-24








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
    },
    urlopen(url:string){
      window.open(url);
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
    /* font-family:  "neue-haas-grotesk-text", "source-han-sans-japanese", "游ゴシック体", "Yu Gothic", "YuGothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", "Meiryo", "sans-serif"; */
}
</style>
<style scoped>
  .row-1st {
    margin-top: 10px;
    margin-left: 10px;
  }
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
    margin:10px 0;
    padding:10px;
  }
  .el-progress {
    margin-bottom: 1em;
  }

  .col-title{
    height: 40px;
  }
  .col-logo{
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }

  .img-logo{
    height: 80px;
  }

  .row-button {
    /* height: 80px;
    padding: 20px; */
    margin-bottom:20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }

  .col-button{
    /* height: 80px;
    padding: 20px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .col-image{
    width: 90%;
    height: 300px;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 20px;
  }

  .col-lead{
    padding: 20px;
  }

  .col-lead .ttl{
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #dcdcdc;
  }

 /* .box-title { */
	/* margin: 5px 0 0 0;
	padding: 8px 27px;
	font-size: 2em;
	font-weight: bold; */
	/* background: #edf2f7;
  border-radius: 10px; */
  /* padding: 1rem 2rem;
  color: #fff;
  border-radius: 10px;
  background-image: -webkit-gradient(linear, left top, right top, from(#f83600), to(#f9d423));
  background-image: -webkit-linear-gradient(left, #f83600 0%, #f9d423 100%);
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%); */
/* } */

.box-title {
  position: relative;
	margin: 5px 0 0 0;
	padding: 8px 27px;
  color: #fff;
  border-radius: 10px;
  /* background-image: -webkit-gradient(linear, left top, right top, from(#308bbe), to(#4eb4ad));
  background-image: -webkit-linear-gradient(left, #308bbe 0%, #4eb4ad 100%);
  background-image: linear-gradient(to right, #308bbe 0%, #4eb4ad 100%); */
  background-image: -webkit-gradient(linear, left top, right top, from(#0d6ea3), to(#fff));
  background-image: -webkit-linear-gradient(left, #0d6ea3 0%, #fff 100%);
  background-image: linear-gradient(to right, #0d6ea3 0%, #fff 100%);
}

.box-title:after {
  position: absolute;
  bottom: -9px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: #0d6ea3 transparent transparent transparent;
}

/*まずはお決まりのボックスサイズ算出をborer-boxに */
/* button */
  .btn--orange,
  a.btn--orange {
    color: #fff;
    background-color: #ef7353;
    border:1px solid #773929;
    width:20%;
  }
  .btn--orange:hover,
  a.btn--orange:hover {
    color: #fff;
    background: #f2915c;
    border:1px solid #773929;
  }

  .fa-position-left {
    position: absolute;
    top: calc(50% - .5em);
    left: 1rem;
  }

  .btn--radius,
  a.btn--radius,
  button.btn--radius
  {
      border-radius: 100vh;
  }
/* button */

  .btn,
  a.btn,
  button.btn {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 0.5rem 2rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    border-radius: 0.5rem;
  }

/*その他と主な共通部分は省略*/

  .btn-copy {
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    margin-bottom: .2em;
  }

  .btn-copy:before {
    margin-right: 1rem;
    content: '＼';
  }

  .btn-copy:after {
    margin-left: 1rem;
    content: '／';
  }

</style>