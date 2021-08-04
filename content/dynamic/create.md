---
title: 動きのあるWebサイトを作る
description: JavaScriptを使って動きのあるWebサイトを作ってみよう！
slug: dynamic-3
---

## 動きのあるWebサイトを作る

ここまで学んだ知識を使って自身の動きのあるWebサイトを作ってみましょう。

まず、JavaScriptを使ってないHTMLファイルを作成します。
「[Webサイトを作る](/website/create)」で作成したものを少し変更した内容とします。

```html
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

        .tab-header {
            display: flex;
            flex-direction: row;
        }
        .tab-menu {
            font-weight: bold;
            padding: 8px 16px 8px 16px;
            margin: 8px;
            border-width: 1px;
            border-style: solid;
            border-color: #ffefd5;
        }
        .inactive {
            display: none;
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
        .error {
            background-color: red;
        }
    </style>
</head>
<body>
    <header>
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
            <div class="tab-header">
                <p class="tab-menu">レシピ</p>
                <p class="tab-menu">お問い合わせ</p>
            </div>

            <div class="tab">
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

            <div class="tab inactive">
                <form>
                    <h6 class="input-title">メールアドレス</h6>
                    <input type="email">
            
                    <h6 class="input-title">内容</h6>
                    <input type="text">
            
                    <h6 class="input-title">送信</h6>
                    <input type="submit">
                </form>
            </div>
        </div>
    </main>
    <footer>
        <div class="copyright">Copyright Cooking Blog</div>
    </footer>
</body>
</html>
```

![](/images/website/js-create-template.png)


## タブを切り替える

TBD


## 入力エラーを表現する

TBD

