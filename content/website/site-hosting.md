---
title: Webサイトを公開する
description: Netlifyを使ってWebサイトを公開してみよう！
slug: website-10
---

## Webサイト公開

これまで、HTML・CSS・JavaScriptを使ってWebサイトを作るための基礎知識を学んできました。
「Webサイト入門」の最後として、自分だけのドメインが設定されたWebサイトを公開しましょう。

## Netlify

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

### Google Domains

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


### Netlifyで独自ドメインを使う

![](/images/website/netlify-domain-1.png)

![](/images/website/netlify-domain-2.png)

![](/images/website/netlify-domain-3.png)

![](/images/website/netlify-domain-4.png)

![](/images/website/netlify-domain-5.png)
