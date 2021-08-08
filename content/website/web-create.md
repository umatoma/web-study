---
title: Webサイトを作る
description: HTMLとCSSを使ってWebサイトを作ってみよう！
slug: website-06
---

## Webサイトを作る

ここまで学んだ知識を使って自身のWebサイトを作ってみましょう。

HTMLやCSSについて紹介した時に作成したWebサイトを元に作成します。
ここでは、トップとお問い合わせの２ページを作成します。
レイアウトとしては、メインコンテンツ部分を２カラム型、上下にフッター・ヘッダーを配置します。
また、ヘッダーのTop・Contactボタンから各ページを切り替えられるようリンクを設置します。

それでは実際に作っていきましょう。

![](/images/website/create-design.png)

### 各ページのHTMLファイル

まず、Topページ用のHTMLファイルとして`index.html`、Contactページ用のHTMLファイルとして`contact.html`を作成します。
アップロード用の`public`フォルダを作成し、その中に各HTMLファイルを配置します。

```
public
  ┣ index.html
  ┗ contact.html
```

また、各HTMLファイルにはページタイトルなど基本的な情報は記述しておきます。

```html[public/index.html]
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="レシピ紹介ブログです" />
    <title>Cooking Blog | Top</title>
    <style type="text/css">

    </style>
</head>
<body>

</body>
</html>
```

```html[public/contact.html]
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="レシピ紹介ブログです" />
    <title>Cooking Blog | Contact</title>
    <style type="text/css">

    </style>
</head>
<body>

</body>
</html>
```

### ページレイアウト

各ページ共通のレイアウトを作っていきます。

まず、ヘッダー・メインコンテンツ・フッターの３つを配置します。

```html
<body>
    <header>ヘッダー</header>
    <main>メインコンテンツ</main>
    <footer>フッター</footer>
</body>
```

ヘッダーのレイアウトを作り込んでいきます。右上にリンクを表示し、中央にはタイトルを表示します。
２つのリンクは横方向に並べられ末尾寄せとなっているので、Flexboxを使いレイアウトを整えます。
また、文字サイズや背景色なども設定します。

![](/images/website/create-header.png)

```html
<header>
    <div class="links-container">
        <div>
            <a class="link" href="./index.html">Top</a>
        </div>
        <div>
            <a class="link" href="./contact.html">Contact</a>
        </div>
    </div>
    <h1>Cooking Blog</h1>
</header>
```

```css
header {
    background-color: #ffefd5;
    padding: 8px;
}
h1 {
    font-size: 48px;
    text-align: center;
}
.links-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.link {
    padding: 8px;
}
```

次に、メインコンテンツのレイアウトを作り込んでいきます。
２カラム型となっているので、Flexboxを使いレイアウトを整えます。

![](/images/website/create-main.png)

```html
<main>
    <div class="left-item">
        <h5>レシピ</h5>
        <p>和食</p>
        <p>洋食</p>
        <p>中華</p>
    </div>
    <div class="right-item">
        レシピ記事 or お問い合わせ
    </div>
</main>
```

```css
main {
    display: flex;
    flex-direction: row;
    margin: 8px 0px 0px 0px;
}
.left-item {
    width: 256px;
    border-style: solid;
    border-width: 1px;
    border-color: #ffefd5;
    margin: 0px 8px 0px 0px;
    text-align: center;
}
.right-item {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #ffefd5;
}
```

最後に、フッターのレイアウトを作り込んでいきます。

![](/images/website/create-footer.png)

```html
<footer>
    <div class="copyright">Copyright Cooking Blog</div>
</footer>
```

```css
footer {
    background-color: #ffefd5;
    padding: 8px;
    margin-top: 8px;
}
.copyright {
    font-size: 10px;
    text-align: center;
}
```

これで、各ページ共通のレイアウトが作成できました。

### レシピ記事

レシピ記事の部分を作っていきます。

見出し・画像・テーブルなどを順番に配置し、CSSで装飾します。

```html
<div class="recipe">
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
</div>
```

```css
h2 {
    font-size: 16px;
    margin: 0px 0px 16px 0px;
}
ul {
    margin: 0px;
}
table {
    margin: 8px 0px 0px 0px;
}
.recipe {
    padding: 16px;
}
```

### お問い合わせフォーム

お問い合わせフォームの部分を作っていきます。

見出し・フォーム入力などを順番に配置し、CSSで装飾します。

```html
<div class="right-item">
    <form>
        <h6 class="input-title">メールアドレス</h6>
        <input type="email">

        <h6 class="input-title">内容</h6>
        <input type="text">

        <h6 class="input-title">送信</h6>
        <input type="submit">
    </form>
</div>
```

```css
form {
    padding: 16px;
}
h6 {
    font-size: 14px;
    margin: 0px 0px 8px 0px;
}
input {
    margin: 0px 0px 24px 0px;
}
```

### レスポンシブWebデザイン

最後にPCとモバイルで表示を少し切り替えてみます。

メインコンテンツ部分をPCでは横に並べ、モバイルでは縦に並べます。
なので、メディアクエリーを使い、画面サイズに応じて`flex-direction`プロパティの値を切り替えます。

![](/images/website/create-responsive.png)

```css
@media (max-width: 640px) {
    main {
        flex-direction: column;
    }
    .left-item {
        width: 100%;
        margin: 0px;
    }
    .right-item {
        margin: 8px 8px 0px 0px;
    }
}
```

### Netlifyで公開する

作成したWebサイトを公開してみましょう。

```html[public/index.html]
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="レシピ紹介ブログです" />
    <title>Cooking Blog | Top</title>
    <style type="text/css">
        header {
            background-color: #ffefd5;
            padding: 8px;
        }
        h1 {
            font-size: 48px;
            text-align: center;
        }
        .links-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        .link {
            padding: 8px;
        }

        main {
            display: flex;
            flex-direction: row;
            margin: 8px 0px 0px 0px;
        }
        .left-item {
            width: 256px;
            border-style: solid;
            border-width: 1px;
            border-color: #ffefd5;
            margin: 0px 8px 0px 0px;
            text-align: center;
        }
        .right-item {
            width: 100%;
            border-style: solid;
            border-width: 1px;
            border-color: #ffefd5;
        }
        @media (max-width: 640px) {
            main {
                flex-direction: column;
            }
            .left-item {
                width: 100%;
                margin: 0px;
            }
            .right-item {
                margin: 8px 8px 0px 0px;
            }
        }

        footer {
            background-color: #ffefd5;
            padding: 8px;
            margin-top: 8px;
        }
        .copyright {
            font-size: 10px;
            text-align: center;
        }

        h2 {
            font-size: 16px;
            margin: 0px 0px 16px 0px;
        }
        ul {
            margin: 0px;
        }
        table {
            margin: 8px 0px 0px 0px;
        }
        .recipe {
            padding: 16px;
        }
    </style>
</head>
<body>
    <header>
        <div class="links-container">
            <div>
                <a class="link" href="./index.html">Top</a>
            </div>
            <div>
                <a class="link" href="./contact.html">Contact</a>
            </div>
        </div>
        <h1>Cooking Blog</h1>
    </header>
    <main>
        <div class="left-item">
            <h5>レシピ</h5>
            <p>和食</p>
            <p>洋食</p>
            <p>中華</p>
        </div>
        <div class="right-item">
            <div class="recipe">
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
            </div>
        </div>
    </main>
    <footer>
        <div class="copyright">Copyright Cooking Blog</div>
    </footer>
</body>
</html>
```

```html[public/contact.html]
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="レシピ紹介ブログです" />
    <title>Cooking Blog | Contact</title>
    <style type="text/css">
        header {
            background-color: #ffefd5;
            padding: 8px;
        }
        h1 {
            font-size: 48px;
            text-align: center;
        }
        .links-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        .link {
            padding: 8px;
        }

        main {
            display: flex;
            flex-direction: row;
            margin: 8px 0px 0px 0px;
        }
        .left-item {
            width: 256px;
            border-style: solid;
            border-width: 1px;
            border-color: #ffefd5;
            margin: 0px 8px 0px 0px;
            text-align: center;
        }
        .right-item {
            width: 100%;
            border-style: solid;
            border-width: 1px;
            border-color: #ffefd5;
        }
        @media (max-width: 640px) {
            main {
                flex-direction: column;
            }
            .left-item {
                width: 100%;
                margin: 0px;
            }
            .right-item {
                margin: 8px 8px 0px 0px;
            }
        }

        footer {
            background-color: #ffefd5;
            padding: 8px;
            margin-top: 8px;
        }
        .copyright {
            font-size: 10px;
            text-align: center;
        }

        form {
            padding: 16px;
        }
        h6 {
            font-size: 14px;
            margin: 0px 0px 8px 0px;
        }
        input {
            margin: 0px 0px 24px 0px;
        }
    </style>
</head>
<body>
    <header>
        <div class="links-container">
            <div>
                <a class="link" href="./index.html">Top</a>
            </div>
            <div>
                <a class="link" href="./contact.html">Contact</a>
            </div>
        </div>
        <h1>Cooking Blog</h1>
    </header>
    <main>
        <div class="left-item">
            <h5>レシピ</h5>
            <p>和食</p>
            <p>洋食</p>
            <p>中華</p>
        </div>
        <div class="right-item">
            <form>
                <h6 class="input-title">メールアドレス</h6>
                <input type="email">
        
                <h6 class="input-title">内容</h6>
                <input type="text">
        
                <h6 class="input-title">送信</h6>
                <input type="submit">
            </form>
        </div>
    </main>
    <footer>
        <div class="copyright">Copyright Cooking Blog</div>
    </footer>
</body>
</html>
```

<aa href="/website/web-about">「Webサイトとは」</aa>で紹介した方法と同じく、Netlifyの管理画面から`public`フォルダをアップロードします。

![](/images/website/create-index.png)

![](/images/website/create-contact.png)

これで、Webサイトを公開できました。
