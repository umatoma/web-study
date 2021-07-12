---
title: HTMLとは
description: HTMLの基礎知識を学ぼう！
prev: /website/web
---

## HTML

「HTML」とはWebサイトの表現を記述するための形式です。
`<p>HELLO</p>`のように、「タグ」と呼ばれるものを組み合わせて記述します。

HTMLで使えるタグは数多くの種類があります。
例えば、`<button>CLICK</button>`と記述するとボタンを表現できたり、`<h1>TITLE</h1>`と記述すると見出しを表現できます。

このように、様々なタグを組み合わせWebサイトの表現を記述するものがHTMLです。

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


## HTMLの構造

HTMLの基本的な構造は以下のようになっています。
これらのタグを順番に確認していきます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
</head>
<body>
    本文
</body>
</html>
```

### <!DOCTYPE html>

HTMLには「HTML5」「HTML4」のように複数のバージョンが存在します。
なので、どのバージョンのHTMLとして記述するか、をDOCTYPEで宣言しています。

`<!DOCTYPE html>`と記述した場合は最新のHTML5であることを意味します。
HTML4などを使った古いWebサイトでは異なる記述になりますが、新しくWebサイトを作る場合はHTML5として記述すればOKです。

### `<html lang="ja">`

HTMLの記述を開始するためのタグです。
このタグの中にWebサイトして表現するために必要なタグを入れていきます。

また、`lang="ja"`のように、HTMLで使用する言語を指定できます。
日本語であれば`ja`、英語であれば`en`となります。

### `<head></head>`

このタグの中では、Webサイトのタイトルや説明文など、Webサイトの情報を記述できます。

### `<meta name="charset" content="UTF-8" />`

このタグは、HTMLの文字コードを指定しています。
現時点で文字コードが何であるかを気にする必要はないですが、記述を忘れると文字化けする可能性があるので注意しましょう。

### `<meta name="description" content="Webサイトの説明" />`

このタグは、Webサイトの説明文を指定しています。
Google検索などで表示されている各Webサイトの説明文は、このタグの情報です。

### `<title></title>`

このタグは、Webサイトのタイトルを指定しています。
Google検索などで表示されている各Webサイトのタイトルは、このタグの情報です。

### `<body></body>`

このタグの中では、Webサイトの本文を記述できます。
画面に表示するものは、このタグの中に記述していきます。


## HTMLを使ってWebサイトを作ってみる

それでは実際に、以下のようなWebサイトを作りながら、様々なタグの使い方を学んでいきます。

### レイアウト

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
</head>
<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>
</html>
```

### 見出し

### 文章

### 画像

### リンク

### リスト

### 表

### フォーム