---
title: Webサイトとは
description: Webサイトの仕組みや基礎知識を学ぼう！
slug: website-1
---

## Webサイトの仕組み

普段見ているWebサイトがどの様な仕組みで公開されているのか？
Webサイトを作る前に基礎知識を学んでいく。

### インターネット

「インターネット」とは世界中にあるコンピュータをつなぎ、お互いに情報交換できる仕組みのことです。
このインターネットを情報を受け取ることで、スマートフォンやPCでWebサイトを閲覧することが出来るのです。

### Web

「Web」は、インターネットを使ってWebサイトを公開・閲覧する仕組みのことです。

### Webサーバー・Webクライアント

Webサイトを公開しているコンピュータから情報を受け取ることで、Webサイトを閲覧できます。
一般的に、公開する側を「Webサーバー」・閲覧する側を「Webクライアント」と呼びます。

### URL

閲覧したいWebサイトを公開しているサーバーの住所にあたるのが「URL」です。
例えば、World Wide Webに関するWikipediaのURLは https://ja.wikipedia.org/wiki/World_Wide_Web です。
このURLを元にしてWebサーバーを特定し、簡単にWebサイトを閲覧することが出来るのです。

### ドメイン

URLは複数の要素から構成された情報であり、その中の ja.wikipedia.org にあたる部分を「ドメイン」と呼びます。
Webサイトだけでなくインターネットを使って情報交換する時に、コンピュータを特定するための情報です。


## Webサイトを閲覧する

Webサイトを閲覧するためのツールであるWebブラウザを確認していきます。

### Webブラウザ

Webサーバーから受け取ったWebサイトの情報は以下のように独自の形式で書かれていて、そのまま閲覧するのは困難です。
そこで、人間が理解できるようWebサイトを閲覧するためのツールが「Webブラウザ」です。

WebブラウザにURLを指定することで、WebブラウザがWebサーバーから情報を取得し画面上にWebサイトを表示してくれるのです。

代表的なWebブラウザには、以下のようなものがあります。

- Google Chrome
- Firefox
- Safari
- Microsoft Edge

世界的に決められたWebサイトの仕様に基づいて作られているので、どのブラウザを使っても閲覧時に表示される内容はほとんど同じです。


## Webサイトを作る

Webサイトを作るためにはHTML・CSSと呼ばれる独自の形式で記述されたファイルを用意する必要があります。
また、HTML・CSSを作りやすくするためのツールも確認していきます。

### HTMLとCSS

Webサーバーで公開するWebサイトの情報は「HTML」と呼ばれる独自の形式で書かれたものである必要があります。
HTMLではWebサイト内の情報として、見出し・画像・ボタン・リンクといった要素を配置できます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <title>料理ブログ</title>
</head>
<body>
    <h1>本日の主菜</h1>
    <p>ハンバーグ</p>
</body>
</html>
```

また、HTMLだけではWebサイトの細かいデザインを記述できません。
そこで、「CSS」と呼ばれる異なる形式の情報を加えることで、細かいデザインを記述できます。
CSSではHTMLで記述された各要素のフォント・色・サイズ・枠線といった装飾を設定できます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <title>料理ブログ</title>
    <style type="text/css">
        h1 {
            font-size: 56px;
            color: red;
        }
    </style>
</head>
<body>
    <h1>本日の主菜</h1>
    <p>ハンバーグ</p>
</body>
</html>
```

### エディタ

WebブラウザでWebサイトを正しく表示するためには、HTML・CSSを正しい形式で記述する必要があります。
以下のような「エディタ」を使うことで、誤った形式を警告してくれたり、自動的に補完入力してくれたりするため、簡単にHTML・CSSを記述できます。

- Visual Studio Code
  - https://azure.microsoft.com/ja-jp/products/visual-studio-code/
- Atom
  - https://atom.io/


## Webサイトを公開する

### Webサーバー

Webサイトを公開するためには、WebサーバーからHTMLを配信する必要があります。
Webサイト用のWebサーバーを用意するには以下のような方法があります。

- Webサーバーを構築する
    - Amazon Web Service
    - Google Cloud
    - Microsoft Azure
- レンタルサーバーを利用する
    - さくらのレンタルサーバー
    - ロリポップ
- Webサイト用ホスティングサービスを利用する
    - Netlify
    - Vercel

Webサーバーを構築したり、レンタルサーバーを利用する場合は、手間や知識が必要となります。
なので、手軽にWebサイトを作る目的の場合は、Webサイト用ホスティングサービスを利用すると良いです。

### Netlify

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
    <title>料理ブログ</title>
    <style type="text/css">
        h1 {
            font-size: 56px;
            color: red;
        }
    </style>
</head>
<body>
    <h1>本日の主菜</h1>
    <p>ハンバーグ</p>
</body>
</html>
```

記述できたら、`public`フォルダを管理画面へとドラッグ＆ドロップでアップロードします。
成功すると以下のような画面に切り替わります。

![](/images/website/netlify-03.png)

「https://***.netlify.app」と表示されているURLが作成したWebサイトのURLです。
リンクを開くとアップロードしたHTMLがWebサイトとして公開できています。

![](/images/website/netlify-04.png)

これで、自身のWebサイトを簡単に公開できました。

また、再度アップロードする場合は「Deploys」を選択し、同じくドラッグ＆ドロップでアップロードできます。

![](/images/website/netlify-05.png)
