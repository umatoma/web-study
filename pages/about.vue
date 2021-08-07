<template>
  <main-container title="このサイトについて">
    <template #main>
      <div>
        <section-title>
          運営者情報
        </section-title>
        <p class="pt-4">
          <ul>
            <li>運営者：umatoma</li>
            <li>連絡先：umatomakun☆gmail.com</li>
          </ul>
          <span class="text-xs">ご連絡される際には、☆を@に変えて送信お願い致します。</span>
        </p>
      </div>
      <div>
        <section-title>
          プライバシーポリシー・免責事項
        </section-title>
        <ul>
          <li>制定日：2021年08月01日</li>
          <li>最終改定日：2021年08月01日</li>
        </ul>
        <div>
          <section-sub-title>
            広告の配信について
          </section-sub-title>
          <p>
            当サイトでは、第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は <a href="https://policies.google.com/technologies/ads?hl=ja" class="underline">「広告 – ポリシーと規約 – Google」</a> をご覧ください。<br>
            また当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。<br>
          </p>
        </div>
        <div>
          <section-sub-title>
            アクセス解析ツールについて
          </section-sub-title>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br>
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは <a href="https://policies.google.com/technologies/partner-sites" class="underline">こちら</a> をクリックしてください。<br>
          </p>
        </div>
        <div>
          <section-sub-title>
            著作権について
          </section-sub-title>
          <p>
            当サイトは著作権の侵害を目的とするものではありません。使用している版権物の知的所有権はそれぞれの著作者・団体に帰属しております。著作権や肖像権に関して問題がありましたら御連絡下さい。著作権所有者様からの警告及び修正・撤去のご連絡があった場合は迅速に対処または削除致します。<br>
          </p>
        </div>
        <div>
          <section-sub-title>
            リンクについて
          </section-sub-title>
          <p>
            当サイトは基本的にリンクフリーですが、画像への直リンクや、インラインフレームの使用はお断りいたします。<br>
          </p>
        </div>
        <div>
          <section-sub-title>
            免責事項
          </section-sub-title>
          <p>
            当サイトは、アフィリエイトプログラムを使って商品を紹介しており、直接の販売は行っておりません。商品に関するお問い合わせは、販売店様のほうに直接ご連絡くださいますようお願い致します。当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。<br>
            当サイトに関する記事は、個人的な主観をもとに書いており、すべての人に当てはまるというものではありません。商品やサービスのご購入に関する最終的な判断はご自身の責任でお願い致します。<br>
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもそれらの正確性や安全性等を保証するものではありません。誤情報が入り込んだり、情報が古くなっていることもございます。万が一、当サイトをご利用することで発生したトラブルに関しては一切の責任を負いかねます。あらかじめご了承くださいますようお願いいたします。<br>
            また、本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。 予めご了承下さい。<br>
          </p>
        </div>
      </div>
    </template>
    <template #nav>
      <div>
        nav
      </div>
    </template>
  </main-container>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { State } from '~/store'

export default defineComponent({
  setup () {
    const store = useStore<State>()
    return {
      title: store.state.title
    }
  },
  head () {
    return {
      title: `このサイトについて | ${this.title}`
    }
  }
})
</script>
