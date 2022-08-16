<template>
  <el-container>
    <Header />
    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #fd9534" class="box-title">
              Live LP
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://livelp.net/top/logo.svg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://livelp.net/top/icon02.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">オンライン接客ツール</h2>
            <p>
              LiveLPは、ホームページに設置して、オンラインで直接顧客を獲得できるツールです。<br />
              ランディングページやECサイトに設置して、売上UPに貢献します。<br /><br />
              今訪問中のお客様と直接チャットができ、ZoomやTeamsなど、任意のURLからお客様とオンライン商談ができます。<br />
              Lineに連携することもできるため、出先からでも対応することができます。<br />
              無料でお試しいただけますので、すぐに効果を確認できます。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">登録はこちら</div>
            <a
              href="https://livelp.net/"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>登録ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #fd9534" class="box-title">
              ドローンマッチング
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://kllc.github.io/repo/img/pointlogo.png"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://agri.dronematching.com/_nuxt/img/matching.e737fdc.png"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">
              農家とドローンパイロットをつなぐマッチングサービス
            </h2>
            <p>
              アーカス・ジャパン株式会社が提供する、農家とドローンパイロットをつなぐマッチングサービス「ドローンマッチング」です。<br /><br />
              アーカス・ジャパンはリベルダージが運営するドローンスクール管理団体「ドローンビジネスアカデミー（UBA）」に所属する講習団体であり、実際に農業散布ドローンの販売や散布代行を行っており、そこで得た経験や知識をAIアルゴリズムとして取り入れました。<br />
              CRM（顧客管理）とAIが一体となり、ドローンの仕事を依頼したい方と受注したいドローンパイロットをマッチングするサービスを提供しています。<br /><br />
              K合同会社のエンジニアが本件システムの開発、保守を担当しています。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">登録はこちら</div>
            <a
              href="https://agri.dronematching.com/"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>登録ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #fd9534" class="box-title">
              QAChat
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://www.ikazuchi.biz/marketplace/kanri/image.php?file=service_detail.19.1.jpg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://www.ikazuchi.biz/marketplace/kanri/image.php?file=service_detail.19.11.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">問合わせ支援のチャットボットサービス</h2>
            <p>
              社内／社外向けにチャットボットを導入する場合、問い合わせの回答をチャットボットで自動化することで、コールセンターやカスタマーサポートの対応コストを削減できます。<br /><br />
              例えば、社内向けでは、総務手続きの申請方法についての問い合わせサポート、社外向けでは、ECサイトの商品の問い合わせのサポートなど、よくある質問・問い合わせをチャットボットで対応可能です。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">デモページ詳細はこちら</div>
            <a
              href="https://kllc.jp/demo/qachat/"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>デモページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #388bf3" class="box-title">
              SAPPORO NEST
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://sapporo.nest.co.jp/wp-content/themes/sapporonest/images/header_logo.svg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img class="col-image" src="/kllc-service/img-kllc.jpg" alt="" />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">経験と価値の交換所「SAPPORO NEST」</h2>
            <p>
              オフィスという形に捉われない自由度の高さをコンセプトに、あなたの起業、副業をサポートいたします。<br />デスクワーク以外の業態にも対応できるプランもご用意しております。<br /><br />
              起業家向けの様々な支援サービスのほか、事業内容により、東京の新規お取引先・顧客のご紹介も可能です。<br />
              また、CoWorking(共有)スペースもございますので、交流会などビジネス利用以外での使用も可能です。
              <br />我々は、チャレンジするすべての人の『NEST』を目指しています。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://sapporo.nest.co.jp/"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>公式ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #ff0401" class="box-title">
              ミイダス
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://cdn2.hubspot.net/hub/5179987/hubfs/LP-dr-vol1/images/illust-p4.png?width=780&height=564&name=illust-p4.png"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://cdn2.hubspot.net/hub/5179987/hubfs/LP-dr-vol1/images/graph-p1.jpg?width=880&height=552&name=graph-p1.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">追加料金なし！採用し放題の採用支援サービス</h2>
            <p>
              追加料金一切なしで、年間採用し放題の採用支援サービスです。
              定額制だから採用すればするほどオトクなプラン。<br /><br />
              37万人以上が登録する豊富なデータベースから優秀な人材を取り放題！<br />
              都心のみならず地方企業の採用にも絶大な成果！
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/hubspot-2000-331"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #7e868a" class="box-title">
              コピー機革命
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://cdn2.hubspot.net/hubfs/5179987/%E3%82%B3%E3%83%94%E3%83%BC%E3%82%AD%E9%9D%A9%E5%91%BD%EF%BC%88%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%EF%BC%89/c_ph05.jpg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://cdn2.hubspot.net/hubfs/5179987/%E3%82%B3%E3%83%94%E3%83%BC%E3%82%AD%E9%9D%A9%E5%91%BD%EF%BC%88%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%EF%BC%89/c_ph01.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">
              定価100万円を超える複合機が、4000円/月（印刷代4000円込）でレンタル可能。
            </h2>
            <p>
              業務用複合機の０円レンタルサービスをご存知ですか？月額リース費用が無料で、しかも格安の印刷コストで利用可能です！<br /><br />
              全国対応開始。まずは設置費用などのご確認を！リース料無料で印刷費用のみでご利用いただけます。起業時、サブ機などのご利用が増えています。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/copy-1-0-203?copier_agency=kllc"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #008953" class="box-title">
              MG研修（無料体験）
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://cdn2.hubspot.net/hub/5179987/hubfs/mg-online-logo2.jpg?width=185&name=mg-online-logo2.jpg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://cdn2.hubspot.net/hubfs/5179987/mg_boad.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">『あの』MG研修が、無料で体験可能！！</h2>
            <p>
              マネジメントＭＧ（ＭＧ研修）は、約４０年前にソニーが開発した経営者育成研修です。<br />自社のエンジニアにマネジメントのノウハウを短期間で、”面白く”学んでもらうにはどうすればいいか？を考え抜き、創り上げたものです。<br /><br />
              元々、ソニーの社内用研修でしたが、他社でも活用されるようになり、米国や韓国を始め近年では中国や東南アジアなど世界中で実施されています。<br />
              ＭＧ研修の最大の特徴は、「ゲームを通じて」「楽しく」「経営体験」ができることです。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/mg-tpl-02-165-18"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
            <!-- <el-button class="button" @click="urlopen('https://kllc.jp')" >デモページ</el-button>&nbsp;&nbsp;QAChatデモページへ -->
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #164ca4" class="box-title">
              Jシステム
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://www.jengine.jp/assets/images/_top-illust-ph03.jpg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://www.jmatch.jp/assets/images/about_ph02.jpg"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">
              約１分で、受給可能な補助金、助成金の総額がわかります。
            </h2>
            <p>
              受給「最低金額」と「最高金額」が自動診断されます。常に最新情報に自動更新されるため、非常に「正確な」金額です。<br /><br />
              独自のヒヤリング項目を最大１０種類まで設定可能。更には関連する自社サービスを自動表示することができます。本業売上アップのための重要な機能です。<br /><br />
              新しい助成金ほど申請手順は不明確なところも多く手間がかかります。本システムではその場で申請依頼まで実施できオンライン対応のみで申請まで進むことが可能です。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/jdnjsys-63"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #ffe584" class="box-title">
              Jコンサル
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://www.jengine.jp/assets/images/_top-illust-ph02.jpg"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://5179987.fs1.hubspotusercontent-na1.net/hub/5179987/hubfs/jcon%EF%BC%88LP%EF%BC%89/m2-img1.png?width=600&height=312&name=m2-img1.png"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">最大受給額を目指してサポート致します</h2>
            <p>
              格安で、その年に活用できる助成金をご紹介し、受給するまでサポートいたします。<br />※返金保障制度あり。<br /><br />
              まずは、無料で「助成金の無料診断」を依頼することができます。<br />後日、弊社コンサルタントからお電話でご連絡させていただき、「助成金の受給見込額」をお伝えいたします。<br /><br />
              正式にお申込みを頂くまでは、費用は一切発生しません。<br />「真面目に申請を考えてみたい」とお考えの方は、お気軽にご相談ください。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/jcon-jdn-398"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <el-row class="container">
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14" class="content-wrap">
        <el-row class="row-1st">
          <el-col :span="20" class="col-title">
            <h1 style="border-bottom: 4px solid #077fdd" class="box-title">
              WEBコンサルタント
            </h1>
          </el-col>
          <el-col :span="4" class="col-logo">
            <img
              class="img-logo"
              src="https://f.hubspotusercontent30.net/hubfs/5179987/WEB%E3%82%B3%E3%83%B3LP/top_intro_img01.png"
              alt=""
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="col-image"
              src="https://f.hubspotusercontent30.net/hubfs/5179987/WEB%E3%82%B3%E3%83%B3LP/top_intro_figure01.png"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-lead">
            <h2 class="ttl">制作・分析・集客まで、ワンストップでサポート</h2>
            <p>
              販売実績130社以上！<br />中小企業向けの安価なホームページ制作から競合分析、広告による集客まで全てサポートいたします。<br /><br />公的支援制度コンサルによるコスト削減提案も可能です。
            </p>
          </el-col>
        </el-row>
        <el-row class="row-button">
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="col-button">
                <el-row> -->
          <el-col class="col-button">
            <div class="btn-copy">お問い合わせはこちら</div>
            <a
              href="https://writeup-5179987.hs-sites.com/jdn-webconsulting-24"
              target="_blank"
              class="btn btn--orange"
              ><i class="fas fa-phone-alt fa-position-left"></i>詳細ページ</a
            >
          </el-col>
          <!-- </el-row>
            </el-col> -->
        </el-row>
      </el-col>
    </el-row>

    <!-- <div
      id="live-ec"
      data-key="nhLlRdOIFSC8fbeHE8O6A856JKqxeIw7UrrC1QmKqxo="
      data-icon="mdi-microsoft-teams"
      data-right="30"
      data-bottom="50"
    ></div>
    <script src="https://kllc.github.io/repo/script/live-ec.js"></script> -->
    <div
      id="livelp"
      data-key="fa8461525e2c881c29622abd622147ae648d2a1181b4959d602ae5af91977721"
    ></div>
    <script
      type="application/javascript"
      src="https://livelp.net/1.2.2/livelp.js"
    ></script>

    <el-footer class="footer">©2021KLLC </el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      value: null,
      dialogVisible: false,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
    }
  },
  methods: {
    handleClose(done: any) {
      this.$confirm('Are you sure to close this dialog?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    urlopen(url: string) {
      window.open(url)
    },
  },
})
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  /* font-family: -apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"; */
  font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic, '游ゴシック体',
    sans-serif;
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
  background-color: #edf2f7;
}
.content-wrap {
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
}
.el-progress {
  margin-bottom: 1em;
}

.col-title {
  height: 40px;
}
.col-logo {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-logo {
  height: 80px;
  max-width: 140px;
}

.row-button {
  /* height: 80px;
    padding: 20px; */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.col-button {
  /* height: 80px;
    padding: 20px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.col-image {
  width: 90%;
  height: 300px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.col-lead {
  padding: 20px;
}

.col-lead .ttl {
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
  /* margin: 5px 0 0 0; */
  /* padding: 8px 27px; */
  margin: 0;
  padding: 0;
  color: #000;
  /* border-radius: 10px; */
  font-size: 2em;
  /* background-image: -webkit-gradient(linear, left top, right top, from(#308bbe), to(#4eb4ad));
  background-image: -webkit-linear-gradient(left, #308bbe 0%, #4eb4ad 100%);
  background-image: linear-gradient(to right, #308bbe 0%, #4eb4ad 100%); */
  /* background-image: -webkit-gradient(linear, left top, right top, from(#0d6ea3), to(#fff));
  background-image: -webkit-linear-gradient(left, #0d6ea3 0%, #fff 100%);
  background-image: linear-gradient(to right, #0d6ea3 0%, #fff 100%); */
}

/* .box-title:after {
  position: absolute;
  bottom: -9px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: #0d6ea3 transparent transparent transparent;
} */

/*まずはお決まりのボックスサイズ算出をborer-boxに */
/* button */
.btn--orange,
a.btn--orange {
  color: #fff;
  background-color: #ee6033;
  border: 2px solid #ee6033;
  width: 20%;
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #ee6033;
  background: #fff;
  border: 2px solid #ee6033;
}

.fa-position-left {
  position: absolute;
  top: calc(50% - 0.5em);
  left: 1rem;
}

.btn--radius,
a.btn--radius,
button.btn--radius {
  border-radius: 100vh;
}
/* button */

.btn,
a.btn,
button.btn {
  font-size: 3vmin;
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
  margin-bottom: 0.2em;
}

.btn-copy:before {
  margin-right: 0.5rem;
  content: '＼';
}

.btn-copy:after {
  margin-left: 0.5rem;
  content: '／';
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #777;
}
</style>
