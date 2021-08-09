---
title: HTMLとは
description: HTMLの基礎知識を学ぼう！
slug: website-02
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


## HTMLでWebサイトを作ってみる

それでは実際に、以下のようなWebサイトを作りながら、様々なタグの使い方を学んでいきます。

![](/images/website/html-create-website.png)

### レイアウト

多くのWebサイトは、大きく「ヘッダー」・「メインコンテンツ」・「フッター」でレイアウトが構成されています。
それぞれ、`<header>`・`<main>`・`<footer>`タグを使うことで表現できます。

![](/images/website/html-create-layout.png)

早速、HTMLの基本構造に、ヘッダー・メインコンテンツ・フッターを追加してみます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
</head>
<body>
    <header>ヘッダー</header>
    <main>メインコンテンツ</main>
    <footer>フッター</footer>
</body>
</html>
```

### 見出し

「見出し」を表現するタグは`<h1>`から`<h6>`の６種類あり、ページタイトルや記事タイトルに使います。
数値が小さくなるに連れ、より詳細な見出しを意味します。

HTMLに見出しを追加してみます。
ページタイトルとして`<h1>`を使い、各セクションのタイトルとして`<h2>`を使います。

![](/images/website/html-create-heading.png)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
</head>
<body>
    <header>
        <h1>料理ブログ</h1>
    </header>
    <main>
        <h2>基本のハンバーグレシピ</h2>
    </main>
    <footer>
        <h2>お問い合わせ</h2>
    </footer>
</body>
</html>
```

### 文章

文章の「段落」を表現するタグは`<p>`を使います。
また、文章の「改行」は`<br>`で表現できます。

メインコンテンツに段落としてレシピの概要を追加してみます。

```html
<main>
    <h2>基本のハンバーグレシピ</h2>
    <p>
        ご飯がすすむ定番のハンバーグレシピです。<br>
        ぜひ作ってみてください。
    </p>
</main>
```

### 画像

「画像」を表現するタグは`<img>`を使います。
このタグに画像のURLを`<img src="https://placehold.jp/300x200.png">`のように指定することで、任意の画像を表示できます。

メインコンテンツにレシピの画像を追加してみます。（ここではダミー画像を指定しています）

```html
<main>
    <h2>基本のハンバーグレシピ</h2>
    <p>
        ご飯がすすむ定番のハンバーグレシピです。<br>
        ぜひ作ってみてください。
    </p>
    <img src="https://placehold.jp/300x200.png">
</main>
```

### 表

「表」を表現するタグは`<table>`を使います。
表は、ヘッダー`<thead>`と、本文`<tbody>`で構成されます。

そして、行は`<tr>`を使い、行の中の列は`<th>`または`<td>`を使います。
`<tr>`はヘッダー内の見出しに使い、`<td>`は本文内のデータに使います。

![](/images/website/html-create-table.png)

メインコンテンツに材料・レシピの表を追加してみます。

```html
<main>
    <h2>基本のハンバーグレシピ</h2>
    <p>
        ご飯がすすむ定番のハンバーグレシピです。<br>
        ぜひ作ってみてください。
    </p>
    <img src="https://placehold.jp/300x200.png">
    <table>
        <thead>
            <tr>
                <th>材料</th>
                <th>レシピ</th>
            </tr>
        </thead>
        <tbody>
            <td>材料一覧</td>
            <td>レシピ一覧</td>
        </tbody>
    </table>
</main>
```

### リスト

「リスト」を表現するタグは`<ul>`と`<ol>`の２種類あります。
`<ul>`は順序のないリストに使い、`<ol>`は順序のあるリストに使います。
そして、リスト内の各項目は`<li>`を使います。

![](/images/website/html-create-list.png)

メインコンテンツに材料・レシピのリストを追加してみます。

```html
<main>
    <h2>基本のハンバーグレシピ</h2>
    <p>
        ご飯がすすむ定番のハンバーグレシピです。<br>
        ぜひ作ってみてください。
    </p>
    <img src="https://placehold.jp/300x200.png">
    <table>
        <thead>
            <tr>
                <th>材料</th>
                <th>レシピ</th>
            </tr>
        </thead>
        <tbody>
            <td>
                <ul>
                    <li>ひき肉</li>
                    <li>パン粉</li>
                    <li>牛乳</li>
                    <li>塩</li>
                    <li>こしょう</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>こねる</li>
                    <li>形を作る</li>
                    <li>焼く</li>
                    <li>盛り付ける</li>
                </ul>
            </td>
        </tbody>
    </table>
</main>
```

### フォーム入力

「フォーム」を表現するタグは、`<form>`を使います。

フォーム内の「フォーム入力」を表現するタグは`<input>`を使います。
`<input type="text">`のように、入力形式を指定することで、メールアドレス入力・テキスト入力・送信ボタンなど様々な形式を表現できます。

- メールアドレス入力：`<input type="email">`
- テキスト入力：`<input type="text">`
- 送信ボタン：`<input type="submit">`

フッターにお問い合わせフォームを追加してみます。

```html
<footer>
    <form>
        <h6>メールアドレス</h6>
        <input type="email">

        <h6>内容</h6>
        <input type="text">

        <h6>送信</h6>
        <input type="submit">
    </form>
</footer>
```

### リンク

「リンク」を表現するタグは`<a>`を使います。
リンク先のURLは`<a href="https://twitter.com/USER_NAME">Twitter</a>`のように指定できます。
また、リンク先が同じWebサイト内である場合は、`/contact.html`・`./contact.html`のように簡略化して指定できます。

`/contact.html`のような書き方を「絶対パス」と呼び、`./contact.html`のような書き方を「相対パス」と呼びます。
絶対パスは常に同じURLを指しますが、相対パスは現在のURLに応じて変化します。

例えば、現在のURLが`https://example.com/`である時、`./contact.html`は`https://example.com/contact.html`を指します。
そして、現在のURLが`https://example.com/pages/hello.html`である時、`./contact.html`は`https://example.com/pages/contact.html`を指します。

フッターにSNSアカウントへのリンクを追加してみます。

```html
<footer>
    <form>
        <h6>メールアドレス</h6>
        <input type="email">

        <h6>内容</h6>
        <input type="text">

        <h6>送信</h6>
        <input type="submit">
    </form>

    <p>
        <a href="https://twitter.com/USER_NAME">Twitter</a>
    </p>
</footer>
```

### Netlifyで公開する

WebサイトのHTMLが完成しました。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
</head>
<body>
    <header>
        <h1>料理ブログ</h1>
    </header>
    <main>
        <h2>基本のハンバーグレシピ</h2>
        <p>
            ご飯がすすむ定番のハンバーグレシピです。<br>
            ぜひ作ってみてください。
        </p>
        <img src="https://placehold.jp/300x200.png">
        <table>
            <thead>
                <tr>
                    <th>材料</th>
                    <th>レシピ</th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <ul>
                        <li>ひき肉</li>
                        <li>パン粉</li>
                        <li>牛乳</li>
                        <li>塩</li>
                        <li>こしょう</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>こねる</li>
                        <li>形を作る</li>
                        <li>焼く</li>
                        <li>盛り付ける</li>
                    </ul>
                </td>
            </tbody>
        </table>
    </main>
    <footer>
        <form>
            <h6>メールアドレス</h6>
            <input type="email">
    
            <h6>内容</h6>
            <input type="text">
    
            <h6>送信</h6>
            <input type="submit">
        </form>

        <p>
            <a href="https://twitter.com/USER_NAME">Twitter</a>
        </p>
    </footer>
</body>
</html>
```

Netlifyを使い、Webサイトとして公開してみます。

[「Webサイトとは」](/website/web-about)で紹介した方法と同じく、`public`フォルダ内に、`index.html`を作成します。
そして、Netlifyの管理画面からフォルダをアップロードします。

![](/images/website/html-create-website.png)

これで、Webサイトを公開できました。
