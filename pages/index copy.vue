<template>
  <div class="lp">
    <!-- ========== HEADER ========== -->
    <header class="lp-header">
      <div class="lp-header__main">
        <div class="lp-header__inner">
          <a
            href="https://kllc.jp"
            target="_blank"
            class="lp-header__logo"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 680 230"
              xmlns="http://www.w3.org/2000/svg"
              class="lp-header__logo-svg"
            >
              <g>
                <path
                  fill="#000000"
                  d="M337.1,226H205.3V4.7h49.8v180.8h81.9V226z"
                />
                <path
                  fill="#000000"
                  d="M498.6,226H366.9V4.7h49.8v180.8h81.9V226z"
                />
                <path
                  fill="#000000"
                  d="M679.2,218.1c-16.2,7.8-37.2,11.7-63.3,11.7c-33.9,0-60.6-10-80.1-29.9
                  c-19.4-20-29.2-46.5-29.2-79.8c0-35.4,10.9-64.1,32.8-86.1c21.9-22,50.2-33,85.1-33
                  c21.6,0,39.8,2.7,54.6,8.2v48c-14.8-8.8-31.7-13.3-50.6-13.3c-20.8,0-37.5,6.5-50.3,19.6
                  c-12.8,13.1-19.1,30.8-19.1,53.1c0,21.4,6,38.4,18.1,51.1c12,12.7,28.2,19.1,48.6,19.1
                  c19.4,0,37.2-4.7,53.4-14.2V218.1z"
                />
              </g>
              <g>
                <polygon fill="#cccccc" points="180,5 130,5 130,83.6" />
                <polygon fill="#cccccc" points="130,225 180,225 130,146.4" />
                <polygon
                  fill="#000000"
                  points="10,115.2 50,52.3 50,5 0,5 0,225 50,225 50,178"
                />
                <polygon
                  fill="#cccccc"
                  points="110,114.7 154.9,44.2 130,5 60,115 130,225 155.1,185.6"
                />
                <polygon fill="#cccccc" points="50,5 50,52.1 80,5" />
                <polygon fill="#cccccc" points="50,225 80,225 50,177.9" />
              </g>
            </svg>
          </a>
          <nav class="lp-header__nav">
            <a href="#overview" class="lp-header__nav-link">サービス概要</a>
            <a href="#services" class="lp-header__nav-link">提供メニュー</a>
            <a href="#products" class="lp-header__nav-link">対象製品</a>
            <a href="#flow" class="lp-header__nav-link">支援の流れ</a>
            <a href="#portfolio" class="lp-header__nav-link">実績・関連</a>
            <a
              href="#contact"
              class="lp-header__nav-link lp-header__nav-link--cta"
              >お問い合わせ</a
            >
          </nav>
        </div>
      </div>
    </header>

    <!-- ========== HERO ========== -->
    <section class="lp-hero">
      <div class="lp-hero__bg-stripe"></div>
      <div class="lp-hero__inner">
        <div class="lp-hero__content">
          <div class="lp-hero__badge">
            Microsoft パートナー
          </div>
          <h1 class="lp-hero__title">
            Low-code / No-code で<br /><em class="title-em">AI Agent</em>
            を内製化
          </h1>
          <p class="lp-hero__lead">
            Microsoft Copilot Studio・Power Platform を活用し、<br />
            お客様企業の市民開発者が自ら AI Agent を構築・運用できる環境を、<br />
            K合同会社が伴走しながら実現します。
          </p>
          <div class="lp-hero__actions">
            <a href="#contact" class="btn btn--primary"
              >お問い合わせ・資料請求</a
            >
            <a href="#services" class="btn btn--outline">サービス内容を見る</a>
          </div>
        </div>
        <div class="lp-hero__visual">
          <div class="hero-visual-box">
            <!-- Microsoft 365 Copilot -->
            <div class="hero-visual-item">
              <span class="hero-visual-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <path d="M24 4 A20 20 0 0 1 44 24" stroke="#0078D4" stroke-width="7" stroke-linecap="round"/>
                  <path d="M44 24 A20 20 0 0 1 24 44" stroke="#107C10" stroke-width="7" stroke-linecap="round"/>
                  <path d="M24 44 A20 20 0 0 1 4 24" stroke="#FFB900" stroke-width="7" stroke-linecap="round"/>
                  <path d="M4 24 A20 20 0 0 1 24 4" stroke="#D83B01" stroke-width="7" stroke-linecap="round"/>
                </svg>
              </span>
              <span>Microsoft 365 Copilot</span>
            </div>
            <!-- Copilot Studio -->
            <div class="hero-visual-item">
              <span class="hero-visual-icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <rect x="2" y="2" width="44" height="44" rx="10" fill="#7B2FBE"/>
                  <path d="M24 11 L27 21 L38 24 L27 27 L24 37 L21 27 L10 24 L21 21 Z" fill="white"/>
                </svg>
              </span>
              <span>Copilot Studio</span>
            </div>
            <!-- Power Platform -->
            <div class="hero-visual-item">
              <span class="hero-visual-icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <rect x="2" y="2" width="44" height="44" rx="10" fill="#742774"/>
                  <path d="M27 8 L16 26 H23 L21 40 L32 22 H25 Z" fill="white"/>
                </svg>
              </span>
              <span>Power Platform</span>
            </div>
            <!-- Azure OpenAI -->
            <div class="hero-visual-item">
              <span class="hero-visual-icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <defs>
                    <linearGradient id="azGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#50C0F0"/>
                      <stop offset="100%" stop-color="#0078D4"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#azGrad)"/>
                  <path d="M22 10 L8 36 H19 L24 26 L29 36 H40 L26 10 Z" fill="white"/>
                  <path d="M19 30 H29" stroke="#0078D4" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </span>
              <span>Azure OpenAI</span>
            </div>
            <div class="hero-visual-center">
              <div class="hero-visual-center__circle">
                <span>AI<br />Agent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== OVERVIEW ========== -->
    <section id="overview" class="lp-overview">
      <div class="lp-section-inner">
        <div class="section-head">
          <p class="section-eyebrow">SERVICE OVERVIEW</p>
          <h2 class="section-title">AI Agent 構築支援サービスとは</h2>
          <div class="section-underline"></div>
        </div>
        <div class="lp-overview__content">
          <div class="lp-overview__text">
            <p class="section-body">
              K合同会社は、Microsoft 生成AI
              事業化支援プログラムに参画するパートナーとして、 お客様企業が
              <strong>Low-code / No-code</strong> による AI Agent
              を自ら構築できるよう、
              導入計画の策定から内製化定着まで、一貫して支援します。
            </p>
            <p class="section-body">
              Microsoft Copilot Studio や Power Platform
              を活用し、社内の市民開発者が 業務に即した AI Agent
              を継続的に作れる組織づくりをサポートします。
            </p>
            <div class="offering-card">
              <p class="offering-card__label">
                本サービスが対象とするオファリング
              </p>
              <ul class="offering-card__list">
                <li>
                  お客様企業が Low-code / No-code で AI Agent
                  を構築するための支援
                </li>
                <li>市民開発者による AI Agent の自律的な開発促進</li>
                <li>
                  お客様のニーズ・データ資産に合わせた AI Agent の設計・納品
                </li>
                <li>社内 CoE 組織の立ち上げ・定着支援</li>
                <li>ガバナンス・セキュリティポリシー策定支援</li>
              </ul>
              <p class="offering-card__note">
                ※ Microsoft 365 Copilot / Copilot Studio / Power Platform
                を中心に、Azure
                やサードパーティ技術を組み合わせたオファリングも対象です。
              </p>
            </div>
          </div>

          <!-- 右カラム：課題共感カード -->
          <div class="pain-card">
            <div class="pain-card__header">
              <span class="pain-card__icon">💬</span>
              <h3 class="pain-card__title">こんな課題はありませんか？</h3>
            </div>
            <ul class="pain-card__list">
              <li v-for="pain in pains" :key="pain" class="pain-card__item">
                <span class="pain-card__check">✕</span>
                <span>{{ pain }}</span>
              </li>
            </ul>
            <div class="pain-card__footer">
              <p class="pain-card__footer-text">
                これらの課題、K合同会社が<strong>まるごと支援</strong>します。
              </p>
              <a href="#contact" class="pain-card__cta">まずは相談する →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SERVICES ========== -->
    <section id="services" class="lp-services">
      <div class="lp-section-inner">
        <div class="section-head section-head--center">
          <p class="section-eyebrow">SERVICES</p>
          <h2 class="section-title">5 つの支援サービス</h2>
          <div class="section-underline"></div>
          <p class="section-subtitle">
            お客様のフェーズや課題に合わせて、最適なメニューをご提案・組み合わせてご提供します。
          </p>
        </div>
        <div class="services-grid">
          <div v-for="svc in services" :key="svc.id" class="service-card">
            <div class="service-card__num">0{{ svc.id }}</div>
            <div class="service-card__icon">{{ svc.icon }}</div>
            <h3 class="service-card__name">{{ svc.name }}</h3>
            <p class="service-card__desc">{{ svc.desc }}</p>
            <ul class="service-card__points">
              <li v-for="pt in svc.points" :key="pt">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== PRODUCTS ========== -->
    <section id="products" class="lp-products">
      <div class="lp-section-inner">
        <div class="section-head section-head--center">
          <p class="section-eyebrow">TECH STACK</p>
          <h2 class="section-title">Microsoft 製品を中心とした技術スタック</h2>
          <div class="section-underline"></div>
        </div>
        <div class="products-grid">
          <div v-for="prod in products" :key="prod.name" class="product-card">
            <div class="product-card__icon">{{ prod.icon }}</div>
            <h3 class="product-card__name">{{ prod.name }}</h3>
            <p class="product-card__desc">{{ prod.desc }}</p>
          </div>
        </div>
        <div class="products-note">
          <span class="products-note__icon">ℹ️</span>
          <p>
            上記製品を活用してお客様企業内の市民開発者の AI Agent
            構築を促進するものであれば、<strong
              >Microsoft
              Azure・サードパーティ製品・当社独自技術を組み合わせたオファリングも対象</strong
            >となります。
          </p>
        </div>
      </div>
    </section>

    <!-- ========== FLOW ========== -->
    <section id="flow" class="lp-flow">
      <div class="lp-section-inner">
        <div class="section-head section-head--center">
          <p class="section-eyebrow">HOW IT WORKS</p>
          <h2 class="section-title">導入から定着まで一貫サポート</h2>
          <div class="section-underline"></div>
        </div>
        <div class="flow-steps">
          <div v-for="(step, i) in steps" :key="step.title" class="flow-step">
            <div v-if="i < steps.length - 1" class="flow-step__line"></div>
            <div class="flow-step__num">
              STEP<br /><strong>{{ i + 1 }}</strong>
            </div>
            <div class="flow-step__content">
              <h3 class="flow-step__title">{{ step.title }}</h3>
              <p class="flow-step__desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SCOPE ========== -->
    <!-- ========== PORTFOLIO ========== -->
    <section id="portfolio" class="lp-portfolio">
      <div class="lp-section-inner">
        <div class="section-head section-head--center">
          <p class="section-eyebrow">PORTFOLIO</p>
          <h2 class="section-title">関連サービス・開発実績</h2>
          <div class="section-underline"></div>
          <p class="section-subtitle">
            K合同会社が手がけたプロダクト・パートナーサービスの一部です。
          </p>
        </div>
        <div class="portfolio-grid">
          <div
            v-for="item in portfolio"
            :key="item.name"
            class="portfolio-card"
          >
            <div
              class="portfolio-card__accent"
              :style="{ background: item.color }"
            ></div>
            <div class="portfolio-card__head">
              <span class="portfolio-card__icon">{{ item.icon }}</span>
              <span
                class="portfolio-card__tag"
                :style="{ color: item.color }"
                >{{ item.tag }}</span
              >
            </div>
            <h3 class="portfolio-card__name">{{ item.name }}</h3>
            <p class="portfolio-card__desc">{{ item.desc }}</p>
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="portfolio-card__link"
            >
              詳細を見る <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CONTACT ========== -->
    <section id="contact" class="lp-contact">
      <div class="lp-section-inner">
        <div class="lp-contact__box">
          <div class="lp-contact__text">
            <p class="section-eyebrow" style="color: rgba(255, 255, 255, 0.7)">
              CONTACT
            </p>
            <h2 class="lp-contact__title">
              AI Agent 構築支援について<br />まずはお気軽にご相談ください
            </h2>
            <p class="lp-contact__lead">
              資料請求・ご相談・お見積りなど、下記よりお気軽にお問い合わせください。<br />
              受付時間：平日 9:00〜18:00
            </p>
          </div>
          <div class="lp-contact__action">
            <a
              href="https://assets-jpn.mkt.dynamics.com/23f2df5b-b80d-4ed4-bc44-f84c6fefa764/digitalassets/standaloneforms/0d673110-2d86-ee11-be36-6045bd6839be"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--white-solid"
            >
              お問い合わせ・資料請求はこちら →
            </a>
            <p class="lp-contact__note">無料相談受付中</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FOOTER ========== -->
    <footer class="lp-footer">
      <div class="lp-footer__inner">
        <div class="lp-footer__bottom">
          <p class="lp-footer__copy">©2026 K合同会社</p>
          <p class="lp-footer__note">
            Microsoft、Microsoft 365 Copilot、Microsoft Copilot Studio、Power
            Platform は米国 Microsoft Corporation の登録商標または商標です。
          </p>
        </div>
      </div>
    </footer>

    <!-- Livelp chat widget -->
    <div
      id="livelp"
      data-key="fa8461525e2c881c29622abd622147ae648d2a1181b4959d602ae5af91977721"
    ></div>
    <script
      type="application/javascript"
      src="https://livelp.net/1.2.4/livelp.js"
    ></script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      pains: [
        'AI Agent を導入したいが、どこから手をつければ良いかわからない',
        '市民開発者に作らせたいが、スキル・体制が整っていない',
        'Copilot Studio を導入したが、活用が一向に進まない',
        'AI Agent のガバナンス・セキュリティをどう整備すれば良いか不安',
      ],
      services: [
        {
          id: 1,
          icon: '🤝',
          name: '伴走支援',
          desc: 'AI Agent 活用の計画策定から運用定着まで、専任コンサルタントが継続的に伴走します。',
          points: [
            'ユースケース発掘・優先順位付け',
            '週次・月次での進捗確認・改善提案',
            '活用効果測定レポート',
          ],
        },
        {
          id: 2,
          icon: '🏛️',
          name: 'CoE 支援',
          desc: '社内に AI Agent 活用推進の中核組織（Center of Excellence）を立ち上げ、自走できる体制を構築します。',
          points: [
            'CoE 組織設計・役割定義',
            '推進リーダー育成プログラム',
            '社内展開ロードマップ策定',
          ],
        },
        {
          id: 3,
          icon: '🏭',
          name: '内製化支援',
          desc: '市民開発者が自ら AI Agent を構築・改善できるスキルと環境を整備します。',
          points: [
            'Copilot Studio / Power Platform ハンズオン研修',
            '内製開発テンプレート・ベストプラクティス提供',
            'リリース後の自走サポート',
          ],
        },
        {
          id: 4,
          icon: '🔒',
          name: 'ガバナンス策定支援',
          desc: 'AI Agent の安全・適切な活用に向けたガバナンスポリシーおよびセキュリティ基準を策定します。',
          points: [
            '利用ガイドライン・承認フロー設計',
            'データ保護・プライバシー対応',
            'リスク評価フレームワーク構築',
          ],
        },
        {
          id: 5,
          icon: '🔌',
          name: 'Connector / MCP 開発',
          desc: 'お客様固有のシステムやデータ資産を AI Agent から活用できるよう、カスタム Connector および MCP を開発します。',
          points: [
            '既存基幹システムとの API 連携設計',
            'カスタム Connector 開発・テスト',
            'MCP（Model Context Protocol）対応開発',
          ],
        },
      ],
      products: [
        {
          icon: '🤖',
          name: 'Microsoft 365 Copilot',
          desc: 'Word・Excel・Teams などに統合された AI アシスタント。業務全体の生産性を向上させます。',
        },
        {
          icon: '🛠️',
          name: 'Microsoft Copilot Studio',
          desc: 'Low-code で独自の AI Agent を設計・構築・公開できるプラットフォーム。プログラミング不要で業務特化の Agent を作成可能です。',
        },
        {
          icon: '⚡',
          name: 'Power Platform',
          desc: 'Power Apps・Power Automate・Power BI からなる製品群。データ連携・自動化・アプリ開発を Low-code で実現します。',
        },
        {
          icon: '☁️',
          name: 'Microsoft Azure / その他',
          desc: 'Azure OpenAI Service をはじめとした Azure サービスや、サードパーティ・当社独自技術との組み合わせも対象です。',
        },
      ],
      steps: [
        {
          title: '現状ヒアリング・課題整理',
          desc: '業務課題・既存システム・組織体制を把握し、AI Agent 活用の優先領域を特定します。',
        },
        {
          title: 'ユースケース設計・PoC',
          desc: '優先ユースケースの AI Agent を Copilot Studio / Power Platform で試作し、効果を検証します。',
        },
        {
          title: '本格構築・Connector 開発',
          desc: '検証済みのユースケースを本番環境へ展開。必要に応じてカスタム Connector / MCP を開発します。',
        },
        {
          title: '内製化・CoE 立ち上げ',
          desc: 'ハンズオン研修と CoE 組織設計により、社内チームが自走できる体制を整備します。',
        },
        {
          title: '運用定着・継続改善',
          desc: '効果測定・改善提案を継続的に実施し、AI Agent 活用の組織文化定着をサポートします。',
        },
      ],
      portfolio: [
        {
          icon: '🤖',
          name: 'Alive — 生成AI接客サービス',
          tag: '自社プロダクト',
          color: '#f97316',
          desc: 'ChatGPT搭載の AI チャットボット。管理画面から Q&A・指示を設定するだけで、企業・店舗にカスタマイズされた自動応答を実現。多言語・音声対応。',
          url: 'https://livelp.net/',
        },
        {
          icon: '🗼',
          name: 'TOKYO NEST',
          tag: 'パートナー',
          color: '#6366f1',
          desc: '起業家・副業者向けの自由度の高いレンタルオフィス。CoWorking スペースも完備。東京の新規取引先・顧客紹介サービスも提供。',
          url: 'https://www.tokyo-nest.jp/',
        },
        {
          icon: '🏢',
          name: 'SAPPORO NEST',
          tag: 'パートナー',
          color: '#6366f1',
          desc: 'SapporoNest（サッポロネスト）は札幌・大通駅周辺にあるレンタルオフィスです。アクセス抜群の好立地で鍵つき完全個室を提供。',
          url: 'https://sapporo.nest.co.jp/',
        }
      ],
    }
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Inter:wght@400;600;700;800&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans JP', 'Inter', 'Yu Gothic Medium', YuGothic, sans-serif;
  color: #1d2433;
  background: #fff;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
/* ===== TOKENS ===== */
/* Blue: #0078D4  DarkBlue: #005a9e  LightBlue: #deecf9  Gray: #f5f7fa  Border: #e2e8f0 */

.lp {
  min-height: 100vh;
}
.lp-section-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ===== HEADER ===== */
.lp-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background: #fff;
  box-shadow: 0 1px 0 #e2e8f0;
}
.lp-header__top {
  background: #0078d4;
  padding: 6px 0;
}
.lp-header__top-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lp-header__top-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}
.lp-header__top-cta {
  display: inline-block;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 4px 14px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.2s;
}
.lp-header__top-cta:hover {
  background: rgba(255, 255, 255, 0.3);
}
.lp-header__main {
  background: #fff;
}
.lp-header__inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.lp-header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
.lp-header__logo-svg {
  height: 52px;
  width: auto;
  display: block;
}
.lp-header__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}
.lp-header__nav-link {
  text-decoration: none;
  color: #3d4759;
  font-size: 0.84rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  transition: color 0.15s, background 0.15s;
}
.lp-header__nav-link:hover {
  color: #0078d4;
  background: #f0f7ff;
}
.lp-header__nav-link--cta {
  background: #0078d4;
  color: #fff !important;
  padding: 7px 18px;
  border-radius: 4px;
  margin-left: 8px;
}
.lp-header__nav-link--cta:hover {
  background: #005a9e !important;
}

/* ===== HERO ===== */
.lp-hero {
  background: linear-gradient(160deg, #f0f7ff 0%, #fff 60%);
  padding: 80px 0 90px;
  position: relative;
  overflow: hidden;
}
.lp-hero__bg-stripe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%;
  background: #f5f9ff;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 0;
}
.lp-hero__inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.lp-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #deecf9;
  color: #005a9e;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 3px;
  margin-bottom: 24px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.badge-dot {
  width: 7px;
  height: 7px;
  background: #0078d4;
  border-radius: 50%;
  flex-shrink: 0;
}
.lp-hero__title {
  margin: 0 0 24px;
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  font-weight: 900;
  color: #0f1a2e;
  line-height: 1.3;
}
.title-em {
  font-style: normal;
  color: #0078d4;
  border-bottom: 4px solid #0078d4;
}
.lp-hero__title ruby rt {
  font-size: 0.4em;
  font-weight: 400;
  color: #666;
}
.lp-hero__lead {
  margin: 0 0 36px;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.95;
}
.lp-hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* ===== HERO VISUAL ===== */
.lp-hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-visual-box {
  position: relative;
  width: 340px;
  height: 340px;
}
.hero-visual-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 14px 18px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #3d4759;
  width: 130px;
  text-align: center;
}
.hero-visual-item:nth-child(1) {
  top: 0;
  left: 0;
}
.hero-visual-item:nth-child(2) {
  top: 0;
  right: 0;
}
.hero-visual-item:nth-child(3) {
  bottom: 0;
  left: 0;
}
.hero-visual-item:nth-child(4) {
  bottom: 0;
  right: 0;
}
.hero-visual-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}
.hero-visual-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-visual-center__circle {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0078d4, #005a9e);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 900;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0 0 0 8px #deecf9, 0 0 0 16px rgba(0, 120, 212, 0.1);
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 13px 30px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}
.btn--primary {
  background: #0078d4;
  color: #fff;
  border: 2px solid #0078d4;
}
.btn--primary:hover {
  background: #005a9e;
  border-color: #005a9e;
}
.btn--outline {
  background: #fff;
  color: #0078d4;
  border: 2px solid #0078d4;
}
.btn--outline:hover {
  background: #f0f7ff;
}
.btn--white-solid {
  background: #fff;
  color: #0078d4;
  border: 2px solid #fff;
  font-size: 1.05rem;
  padding: 15px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
}
.btn--white-solid:hover {
  background: #deecf9;
  border-color: #deecf9;
}

/* ===== SECTION HEAD ===== */
.section-head {
  margin-bottom: 52px;
}
.section-head--center {
  text-align: center;
}
.section-eyebrow {
  margin: 0 0 8px;
  font-size: 0.72rem;
  font-weight: 800;
  color: #0078d4;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.section-title {
  margin: 0 0 14px;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 900;
  color: #0f1a2e;
  line-height: 1.35;
}
.section-underline {
  width: 48px;
  height: 4px;
  background: #0078d4;
  border-radius: 2px;
  margin-bottom: 18px;
}
.section-head--center .section-underline {
  margin-left: auto;
  margin-right: auto;
}
.section-subtitle {
  margin: 0;
  color: #637087;
  font-size: 0.95rem;
}
.section-body {
  color: #4a5568;
  font-size: 0.97rem;
  margin: 0 0 18px;
  line-height: 1.9;
}
.section-body strong {
  color: #0078d4;
  font-weight: 700;
}

/* ===== OVERVIEW ===== */
.lp-overview {
  padding: 96px 0;
  background: #fff;
}
.lp-overview__content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 64px;
  align-items: start;
}
.offering-card {
  background: #f5f9ff;
  border-left: 4px solid #0078d4;
  border-radius: 0 8px 8px 0;
  padding: 24px 28px;
  margin-top: 28px;
}
.offering-card__label {
  font-size: 0.8rem;
  font-weight: 800;
  color: #0078d4;
  margin: 0 0 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.offering-card__list {
  margin: 0 0 16px;
  padding-left: 1.4em;
  color: #3d4759;
  font-size: 0.9rem;
  line-height: 2.1;
}
.offering-card__list li::marker {
  color: #0078d4;
}
.offering-card__note {
  margin: 0;
  font-size: 0.8rem;
  color: #637087;
  background: #fff;
  border-radius: 4px;
  padding: 10px 14px;
  line-height: 1.7;
  border: 1px solid #e2e8f0;
}
/* ===== PAIN CARD ===== */
.pain-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.pain-card__header {
  background: #1a1a2e;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.pain-card__icon {
  font-size: 1.4rem;
  line-height: 1;
}

.pain-card__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

.pain-card__list {
  list-style: none;
  margin: 0;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.pain-card__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.88rem;
  color: #3d4759;
  line-height: 1.55;
  transition: background 0.15s;
}

.pain-card__item:hover {
  background: #fef2f2;
}

.pain-card__check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: #fee2e2;
  color: #dc2626;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 900;
  margin-top: 1px;
}

.pain-card__footer {
  border-top: 1px solid #e2e8f0;
  padding: 20px 24px;
  background: #f8faff;
  text-align: center;
}

.pain-card__footer-text {
  margin: 0 0 14px;
  font-size: 0.88rem;
  color: #444;
  line-height: 1.6;
}

.pain-card__cta {
  display: inline-block;
  background: #0078d4;
  color: #fff;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: 4px;
  transition: background 0.2s;
}

.pain-card__cta:hover {
  background: #005a9e;
}

/* ===== SERVICES ===== */
.lp-services {
  padding: 96px 0;
  background: #f5f7fa;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
}
.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0078d4, #60a5d4);
}
.service-card:hover {
  box-shadow: 0 12px 40px rgba(0, 120, 212, 0.12);
  transform: translateY(-4px);
}
.service-card__num {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.7rem;
  font-weight: 800;
  color: #deecf9;
  letter-spacing: 0.04em;
}
.service-card__icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}
.service-card__name {
  margin: 0 0 10px;
  font-size: 1.05rem;
  font-weight: 800;
  color: #0078d4;
}
.service-card__desc {
  margin: 0 0 16px;
  font-size: 0.87rem;
  color: #4a5568;
  line-height: 1.8;
}
.service-card__points {
  margin: 0;
  padding-left: 1.2em;
  font-size: 0.82rem;
  color: #637087;
  line-height: 1.95;
}
.service-card__points li::marker {
  color: #0078d4;
}

/* ===== PRODUCTS ===== */
.lp-products {
  padding: 96px 0;
  background: #fff;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.product-card {
  background: #f5f9ff;
  border: 1px solid #deecf9;
  border-radius: 8px;
  padding: 28px 20px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.product-card:hover {
  box-shadow: 0 8px 24px rgba(0, 120, 212, 0.1);
  transform: translateY(-3px);
}
.product-card__icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}
.product-card__name {
  margin: 0 0 10px;
  font-size: 0.88rem;
  font-weight: 800;
  color: #0078d4;
  line-height: 1.4;
}
.product-card__desc {
  margin: 0;
  font-size: 0.8rem;
  color: #637087;
  line-height: 1.75;
}
.products-note {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 18px 24px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 0.88rem;
  color: #4a4a3a;
  line-height: 1.8;
}
.products-note__icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 2px;
}
.products-note p {
  margin: 0;
}
.products-note strong {
  color: #92400e;
}

/* ===== FLOW ===== */
.lp-flow {
  padding: 96px 0;
  background: #f5f7fa;
}
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.flow-step {
  display: flex;
  gap: 0;
  align-items: stretch;
  position: relative;
}
.flow-step__line {
  position: absolute;
  left: 56px;
  top: 80px;
  bottom: -20px;
  width: 2px;
  background: #deecf9;
  z-index: 0;
}
.flow-step__num {
  width: 80px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
  font-size: 0.65rem;
  font-weight: 700;
  color: #0078d4;
  letter-spacing: 0.08em;
  text-align: center;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}
.flow-step__num strong {
  display: block;
  font-size: 1.8rem;
  font-weight: 900;
  color: #0078d4;
  line-height: 1;
  background: #fff;
  width: 52px;
  height: 52px;
  border: 3px solid #0078d4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}
.flow-step__content {
  flex: 1;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 28px 32px;
  margin: 12px 0;
  margin-left: 16px;
}
.flow-step__title {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 800;
  color: #0f1a2e;
}
.flow-step__desc {
  margin: 0;
  font-size: 0.88rem;
  color: #637087;
  line-height: 1.75;
}

/* ===== PORTFOLIO ===== */
.lp-portfolio {
  padding: 96px 0;
  background: #fff;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.portfolio-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 28px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
}
.portfolio-card:hover {
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.09);
  transform: translateY(-3px);
}
.portfolio-card__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}
.portfolio-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.portfolio-card__icon {
  font-size: 2rem;
}
.portfolio-card__tag {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.portfolio-card__name {
  margin: 0 0 10px;
  font-size: 0.97rem;
  font-weight: 800;
  color: #0f1a2e;
}
.portfolio-card__desc {
  margin: 0 0 16px;
  font-size: 0.83rem;
  color: #637087;
  line-height: 1.8;
}
.portfolio-card__link {
  font-size: 0.82rem;
  font-weight: 700;
  color: #0078d4;
  text-decoration: none;
  transition: opacity 0.2s;
}
.portfolio-card__link:hover {
  opacity: 0.7;
}
.portfolio-card__link span {
  transition: transform 0.2s;
  display: inline-block;
}
.portfolio-card__link:hover span {
  transform: translateX(3px);
}

/* ===== CONTACT ===== */
.lp-contact {
  background: linear-gradient(135deg, #004e99 0%, #0078d4 100%);
  padding: 80px 40px;
}
.lp-contact .lp-section-inner {
  max-width: 960px;
}
.lp-contact__box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}
.lp-contact__title {
  margin: 12px 0 16px;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.4;
}
.lp-contact__lead {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.93rem;
  margin: 0;
  line-height: 1.9;
}
.lp-contact__action {
  flex-shrink: 0;
  text-align: center;
}
.lp-contact__note {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 600;
}

/* ===== FOOTER ===== */
.lp-footer {
  background: #0f1a2e;
  padding: 48px 40px 28px;
}
.lp-footer__inner {
  max-width: 1140px;
  margin: 0 auto;
}
.lp-footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.lp-footer__nav {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.lp-footer__nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.82rem;
  padding: 4px 10px;
  transition: color 0.2s;
}
.lp-footer__nav-link:hover {
  color: rgba(255, 255, 255, 0.85);
}
.lp-footer__bottom {
  text-align: center;
}
.lp-footer__copy {
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
}
.lp-footer__note {
  margin: 0;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.72rem;
  line-height: 1.8;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .lp-overview__content {
    grid-template-columns: 1fr;
  }
  .lp-hero__inner {
    grid-template-columns: 1fr;
  }
  .lp-hero__visual {
    display: none;
  }
}
@media (max-width: 768px) {
  .lp-header__top {
    display: none;
  }
  .lp-header__nav {
    display: none;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .lp-hero {
    padding: 60px 0 70px;
  }
  .lp-hero__inner {
    padding: 0 20px;
  }
  .lp-section-inner {
    padding: 0 20px;
  }
  .lp-contact__box {
    flex-direction: column;
    gap: 28px;
  }
  .lp-footer__top {
    flex-direction: column;
    gap: 20px;
  }
  .lp-overview,
  .lp-services,
  .lp-products,
  .lp-flow,
  .lp-portfolio {
    padding: 64px 0;
  }
}
@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  .lp-hero__title {
    font-size: 1.7rem;
  }
  .lp-hero__actions {
    flex-direction: column;
  }
}
</style>
