---
title: Webサイトを公開する
description: Netlifyを使ってWebサイトを公開してみよう！
slug: website-10
---

## Webサイト公開

これまで、HTML・CSS・JavaScriptを使ってWebサイトを作るための基礎知識を学んできました。
「Webサイト入門」の最後として、自分だけのドメインが設定されたWebサイトを公開しましょう。

## NetlifyでWebサイトを公開

「Netlify」は世界中で使われている、Webサイトを公開するためのサービスです。
簡単にWebサイトを公開でき、無料で使い始めることができます。

- Netlify
    - https://www.netlify.com/

実際にNetlifyを使い、Webサイトを公開してみます。

まずは、アカウントを登録します。
画面の指示に従って登録を進めてください。

![](/images/website/netlify-01.png)

登録が完了すると、管理画面が表示されます。
HTMLファイルを含んだフォルダをドラッグ＆ドロップでアップロードできます。

![](/images/website/netlify-02.png)

アップロード用に`public`という名前でフォルダを作成し、その中に`index.html`という名前のファイルを作ります。
`index.html`の中身は先程紹介したエディタなどで以下のHTMLを記述します。

```html[public/index.html]
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HELLO WORLD</title>
</head>
<body>
    <h1>HELLO WORLD</h1>
</body>
</html>
```

記述できたら、`public`フォルダを管理画面へとドラッグ＆ドロップでアップロードします。
成功すると以下のような画面に切り替わります。

![](/images/website/netlify-03.png)

「https://***.netlify.app」と表示されているURLが作成したWebサイトのURLです。
リンクを開くとアップロードしたHTMLがWebサイトとして公開できています。

![](/images/website/netlify-hello.png)

これで、自身のWebサイトを簡単に公開できました。

また、再度アップロードする場合は「Deploys」を選択し、同じくドラッグ＆ドロップでアップロードできます。

![](/images/website/netlify-05.png)


## 独自ドメイン

Netlifyを使い公開したWebサイトのドメインは、`***.netlify.app`となっています。
しかし、`www.google.com`・`www.youtube.com`のように、Webサイト専用のドメインを設定したい方も多いでしょう。
そのような、自身で取得したドメインのことを「独自ドメイン」と呼んだりします。

ドメインは、ドメインを販売しているサービスから購入できます。
ドメインを販売しているサービスには次のようなものがあります。

- [Google Domains](https://domains.google/)
- [お名前.com](https://www.onamae.com/)
- [ムームードメイン](https://muumuu-domain.com/)

どのサービスを利用しても問題ありません。
ですが、Google Domainsを利用すると、Googleから提供されているその他サービスを使う際に設定が簡単になるメリットがあります。

## Google Domainsでドメインを取得

ここでは、Google Domainsを使ってドメインを取得していきます。

まず、自身で取得したいドメイン名を検索します。

![](/images/website/google-domains-1.png)

検索すると販売されいているドメインの一覧が表示されます。
ドメイン名によって料金が異なっていますが、機能自体に違いはありません。
お財布と相談しながら好きなドメインをカートに追加し、購入します。

![](/images/website/google-domains-2.png)

購入し、マインドメインとして一覧に表示されていればOKです。

![](/images/website/google-domains-3.png)

これで、独自ドメインが取得できました。


## Netlifyで独自ドメインを使う

取得した独自ドメインをNetlifyで使えるよう設定してみます。

公開したWebサイトの管理画面から、「Site settings > Domain management > Domains」を選択します。
ドメイン設定画面が表示され、「Add custom domains」からドメインを追加します。

![](/images/website/netlify-domain-1.png)

Webサイトに設定したいドメイン名を入力します。
例えば、`web-study.dev`というドメインを取得している場合は`www.web-study.dev`や`netlify.web-study.dev`といったドメイン名を設定できます。

![](/images/website/netlify-domain-2.png)

Webサイト用のドメイン名を登録すると、ドメイン設定画面に戻ります。

![](/images/website/netlify-domain-3.png)

ここで、ドメイン自体を管理しているのは購入したGoogle Domainsです。
なので、Google Domainsの管理画面から、Netlifyでドメインを使えるよう設定する必要があります。

Netlifyのドメイン設定画面に表示されている「Check DNS configuration」を開くと、Google Domainsで設定すべき情報が表示されます。
`netlify CNAME nifty-lalande-9f2f4b.netlify.app.`のように表示されている部分がGoogle Domainsで設定すべき情報です。
忘れないようこの情報をメモしておきましょう。

![](/images/website/netlify-domain-4.png)

今度は、Google Domainsの管理画面を開きます。

取得したドメインの管理画面から、「DNS」を選択します。
DNS管理画面の「リソースレコード > カスタムレコード」から、先程Netlifyで表示されていた情報を登録します。

例えば、`netlify CNAME nifty-lalande-9f2f4b.netlify.app.`と表示されていた場合は、次のように情報を入力します。

- ホスト名：`netlify`
- タイプ：`CNAME`
- データ：`nifty-lalande-9f2f4b.netlify.app.`

「保存」を選択し、Google Domainsでの設定は完了です。

![](/images/website/netlify-domain-5.png)

Google Domainsで設定した後、Netlifyでドメインが使えるようになるまで最大で24時間程度かかります。
しばらく待って、"Check DNS configuration"の表示が消えていればOKです。

![](/images/website/netlify-domain-6.png)

これで、自分のドメインで自分のWebサイトを公開できました。

## Webサイト入門を終えて

お疲れさまでした、以上で「Webサイト入門」は終了です。

ここまで学んだ内容は、Webサイトを作っていくために必要となる基礎知識です。
この知識を元にして、作りたいWebサイトが作れるようスキルアップしていってもらえると嬉しいです。

Webサイトを作る上でHTML・CSSは重要な要素です、これらに関するスキルアップが出来るよう学んでいくと良いでしょう。
また、JavaScriptを使ってHTML・CSSを操作する知識を深めることで、表現できるデザインの幅が広がります。

例えば、以下のような順番で学んでいくことができるので、参考にしてみてください。

1. 様々なデザインのWebサイトを作ってみる
1. Gitを使いソースコードを効率的に管理する
1. Sassを使いCSSを効率的に記述する
1. その他

それでは、引き続き作りたいWebサイトを作っていきましょう！
