---
title: CSS コンポーネント集
description: Webサイトを作るためのCSSコンポーネント集！
slug: practice-01
---

## CSS コンポーネント集

このサイトでは、実際に手を動かしながら、楽しく学べるコンテンツを目指しています。  
なので、HTML・CSS自体を学ぶのではなく、Webサイトの作り方を学んでいきます。

Webサイトを作るためにHTMLやCSSを学びますが、仕様を理解するだけでなく実際に使えるようになる必要があります。  
そのため、ここではHTML・CSSを使ったレイアウトの様々なパターン（コンポーネント）を紹介します。

これらのコンポーネントを組み合わせたりカスタマイズして、Webサイトを作るのに役立ててください。



## ヘッダー・サイドナビ
### ヘッダー

<example height="64px">
    <style>
        .header-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            padding: 0px 16px;
            background-color: #10B981;
        }
        .header-nav .logo {
            display: block;
        }
        .header-nav .links {
            display: flex;
            gap: 8px;
        }
        .header-nav .links a {
            color: #ffffff;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 4px;
        }
        .header-nav .links a:hover {
            background-color: #047857;
        }
        .header-nav .links .button {
            background-color: #047857;
        }
        .header-nav .links .button:hover {
            background-color: #064E3B;
        }
    </style>
    <nav class="header-nav">
        <div>
            <a href="#">
                <img class="logo" src="https://img.icons8.com/ios-glyphs/32/ffffff/logo.png">
            </a>
        </div>
        <div class="links">
            <a href="#">サービス</a>
            <a href="#">特徴</a>
            <a href="#">価格</a>
            <a href="#" class="button">ログイン</a>
        </div>
    </nav>
</example>

```css
.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0px 16px;
    background-color: #10B981;
}
.header-nav .logo {
    display: block;
}
.header-nav .links {
    display: flex;
    gap: 8px;
}
.header-nav .links a {
    color: #ffffff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
}
.header-nav .links a:hover {
    background-color: #047857;
}
.header-nav .links .button {
    background-color: #047857;
}
.header-nav .links .button:hover {
    background-color: #064E3B;
}
```

```html
<nav class="header-nav">
    <div>
        <a href="#">
            <img class="logo" src="https://img.icons8.com/ios-glyphs/48/ffffff/logo.png">
        </a>
    </div>
    <div class="links">
        <a href="#">サービス</a>
        <a href="#">特徴</a>
        <a href="#">価格</a>
        <a href="#" class="button">ログイン</a>
    </div>
</nav>
```

### サイドナビ

<example height="512px">
    <style>
        .sidenav {
            display: flex;
            flex-direction: column;
            width: 256px;
            height: 100vh;
            background-color: #10B981;
        }
        .sidenav a {
            color: #ffffff;
            text-decoration: none;
        }
        .sidenav .logo {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            font-size: 20px;
            font-weight: bold;
        }
        .sidenav .link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            margin: 8px;
            border-radius: 4px;
        }
        .sidenav .link:hover {
            background-color: #047857;
        }
    </style>
    <nav class="sidenav">
        <a class="logo" href="#">
            <img src="https://img.icons8.com/ios-glyphs/32/ffffff/logo.png"/>
            <span>Sidenav</span>
        </a>
        <a class="link" href="#">
            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/graph.png"/>
            <span>レポート</span>
        </a>
        <a class="link" href="#">
            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/search--v1.png"/>
            <span>データ分析</span>
        </a>
        <a class="link" href="#">
            <img src="https://img.icons8.com/ios/24/ffffff/settings--v1.png"/>
            <span>設定</span>
        </a>
    </nav>
</example>

```css
.sidenav {
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 100vh;
    background-color: #10B981;
}
.sidenav a {
    color: #ffffff;
    text-decoration: none;
}
.sidenav .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    font-size: 20px;
    font-weight: bold;
}
.sidenav .link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    margin: 8px;
    border-radius: 4px;
}
.sidenav .link:hover {
    background-color: #047857;
}
```

```html
<nav class="sidenav">
    <a class="logo" href="#">
        <img src="https://img.icons8.com/ios-glyphs/32/ffffff/logo.png"/>
        <span>Sidenav</span>
    </a>
    <a class="link" href="#">
        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/graph.png"/>
        <span>レポート</span>
    </a>
    <a class="link" href="#">
        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/search--v1.png"/>
        <span>データ分析</span>
    </a>
    <a class="link" href="#">
        <img src="https://img.icons8.com/ios/24/ffffff/settings--v1.png"/>
        <span>設定</span>
    </a>
</nav>
```


## ヒーロー・特徴紹介・価格一覧

### ヒーロー

<example height="400px">
    <style>
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 32px;
            height: 400px;
            padding: 0px 64px;
            background-color: #10B981;
            color: #ffffff;
            text-align: center;
        }
        .hero .title {
            margin: 0px;
            font-size: 64px;
            line-height: 1;
        }
        .hero .body {
            margin: 0px;
        }
        .hero .button {
            display: inline-block;
            padding: 8px 32px;
            border-radius: 4px;
            text-decoration: none;
            color: white;
            background-color: #047857;
            box-shadow: 1px 1px 2px #6B7280;
        }
        .hero .button:hover {
            background-color: #064E3B;
        }
    </style>
    <div class="hero">
        <h1 class="title">
            Hero
        </h1>
        <p class="body">
            Webサイトの中でも最初に人の目に留まる、<br>
            トップページの一番最初に表示される部分を「ヒーロー」と呼びます。
        </p>
        <div>
            <a href="#" class="button">
                はじめる
            </a>
        </div>
    </div>
</example>

```css
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    height: 400px;
    padding: 0px 64px;
    background-color: #10B981;
    color: #ffffff;
    text-align: center;
}
.hero .title {
    margin: 0px;
    font-size: 64px;
    line-height: 1;
}
.hero .body {
    margin: 0px;
}
.hero .button {
    display: inline-block;
    padding: 8px 32px;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    background-color: #047857;
    box-shadow: 1px 1px 2px #6B7280;
}
.hero .button:hover {
    background-color: #064E3B;
}
```

```html
<div class="hero">
    <h1 class="title">
        Hero
    </h1>
    <p class="body">
        Webサイトの中でも最初に人の目に留まる、<br>
        トップページの一番最初に表示される部分を「ヒーロー」と呼びます。
    </p>
    <div>
        <a href="#" class="button">
            はじめる
        </a>
    </div>
</div>
```

### 特徴紹介

<example height="360px">
    <style>
        .features {
            display: flex;
            flex-direction: row;
            gap: 32px;
        }
        .features .title {
            flex: 1;
            margin: 0px;
            font-size: 32px;
            font-weight: bold;
        }
        .features .body {
            flex: 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
        .features .feature {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .features .feature .icon {
            width: 48px;
            height: 48px;
            padding: 12px;
            box-sizing: border-box;
            border-radius: 4px;
            background-color: #10B981;
        }
        .features .feature .name {
            margin: 16px 0px 0px 0px;
            font-weight: bold;
        }
        .features .feature .text {
            margin: 0px;
        }
    </style>
    <div class="features">
        <h5 class="title">
            強固なセキュリティ
        </h5>
        <div class="body">
            <div class="feature">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/block--v1.png"/>
                </div>
                <p class="name">不正アクセス対策</p>
                <p class="text">外部からの不正アクセスは全てシャットアウトします。</p>
            </div>
            <div class="feature">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/fingerprint.png"/>
                </div>
                <p class="name">指紋認証</p>
                <p class="text">パスワードは一切使わず指紋による認証を行います。</p>
            </div>
            <div class="feature">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/face-id.png"/>
                </div>
                <p class="name">顔認証</p>
                <p class="text">顔認証を加えることでより強固な認証機能を実現します。</p>
            </div>
            <div class="feature">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/fire-alarm-button.png"/>
                </div>
                <p class="name">緊急アラート</p>
                <p class="text">不正アクセスを試みた形跡が見つかった時は即座に通知します。</p>
            </div>
        </div>
    </div>
</example>

```css
.features {
    display: flex;
    flex-direction: row;
    gap: 32px;
}
.features .title {
    flex: 1;
    margin: 0px;
    font-size: 32px;
    font-weight: bold;
}
.features .body {
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}
.features .feature {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.features .feature .icon {
    width: 48px;
    height: 48px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #10B981;
}
.features .feature .name {
    margin: 16px 0px 0px 0px;
    font-weight: bold;
}
.features .feature .text {
    margin: 0px;
}
```

```html
<div class="features">
    <h5 class="title">
        強固なセキュリティ
    </h5>
    <div class="body">
        <div class="feature">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/block--v1.png"/>
            </div>
            <p class="name">不正アクセス対策</p>
            <p class="text">外部からの不正アクセスは全てシャットアウトします。</p>
        </div>
        <div class="feature">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/fingerprint.png"/>
            </div>
            <p class="name">指紋認証</p>
            <p class="text">パスワードは一切使わず指紋による認証を行います。</p>
        </div>
        <div class="feature">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/face-id.png"/>
            </div>
            <p class="name">顔認証</p>
            <p class="text">顔認証を加えることでより強固な認証機能を実現します。</p>
        </div>
        <div class="feature">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/fire-alarm-button.png"/>
            </div>
            <p class="name">緊急アラート</p>
            <p class="text">不正アクセスを試みた形跡が見つかった時は即座に通知します。</p>
        </div>
    </div>
</div>
```

### 価格一覧

<example height="400px">
    <style>
       .prices {
           display: flex;
           gap: 16px;
       }
       .prices .column {
           flex: 1;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           gap: 32px;
           padding: 16px;
           color: #6B7280;
           background-color: #ffffff;
           border: solid 1px #D1D5DB;
           border-radius: 4px;
       }
       .prices .column h5 {
           margin: 0;
           color: #000000;
           font-size: 20px;
       }
       .prices .column p {
           margin: 8px 0px;
       }
       .prices .column .amount {
           color: #000000;
           font-size: 32px;
           font-weight: bold;
       }
       .prices .column .feature {
            display: flex;
            align-items: center;
            gap: 8px;
        }
       .prices .column .button {
            display: block;
            padding: 8px 32px;
            border-radius: 4px;
            text-align: center;
            text-decoration: none;
            color: #ffffff;
            background-color: #10B981;
            box-shadow: 1px 1px 2px #D1D5DB;
        }
        .prices .column .button:hover {
            background-color: #047857;
        }
    </style>
    <div class="prices">
        <div class="column">
            <div>
                <h5>フリー</h5>
                <p>個人向け無料プラン</p>
                <p>
                    <span class="amount">無料</span>
                    <span>/月</span>
                </p>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>無制限の公開プロジェクト</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>コミュニティサポート</p>
                </div>
            </div>
            <div>
                <a href="#" class="button">開始する</a>
            </div>
        </div>
        <div class="column">
            <div>
                <h5>プロ</h5>
                <p>個人向け有料プラン</p>
                <p>
                    <span class="amount">500円</span>
                    <span>/月</span>
                </p>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>無制限の公開プロジェクト</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>10個の非公開プロジェクト</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>オンラインサポート</p>
                </div>
            </div>
            <div>
                <a href="#" class="button">開始する</a>
            </div>
        </div>
        <div class="column">
            <div>
                <h5>チーム</h5>
                <p>チーム向けプラン</p>
                <p>
                    <span class="amount">900円</span>
                    <span>/ユーザー・月</span>
                </p>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>無制限の公開プロジェクト</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>無制限の非公開プロジェクト</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>メンバー管理</p>
                </div>
                <div class="feature">
                    <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                    <p>プレミアムサポート</p>
                </div>
            </div>
            <div>
                <a href="#" class="button">開始する</a>
            </div>
        </div>
    </div>
</example>

```css
.prices {
    display: flex;
    gap: 16px;
}
.prices .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    padding: 16px;
    color: #6B7280;
    background-color: #ffffff;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
}
.prices .column h5 {
    margin: 0;
    color: #000000;
    font-size: 20px;
}
.prices .column p {
    margin: 8px 0px;
}
.prices .column .amount {
    color: #000000;
    font-size: 32px;
    font-weight: bold;
}
.prices .column .feature {
    display: flex;
    align-items: center;
    gap: 8px;
}
.prices .column .button {
    display: block;
    padding: 8px 32px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background-color: #10B981;
    box-shadow: 1px 1px 2px #D1D5DB;
}
.prices .column .button:hover {
    background-color: #047857;
}
```

```html
<div class="prices">
    <div class="column">
        <div>
            <h5>フリー</h5>
            <p>個人向け無料プラン</p>
            <p>
                <span class="amount">無料</span>
                <span>/月</span>
            </p>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>無制限の公開プロジェクト</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>コミュニティサポート</p>
            </div>
        </div>
        <div>
            <a href="#" class="button">開始する</a>
        </div>
    </div>
    <div class="column">
        <div>
            <h5>プロ</h5>
            <p>個人向け有料プラン</p>
            <p>
                <span class="amount">500円</span>
                <span>/月</span>
            </p>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>無制限の公開プロジェクト</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>10個の非公開プロジェクト</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>オンラインサポート</p>
            </div>
        </div>
        <div>
            <a href="#" class="button">開始する</a>
        </div>
    </div>
    <div class="column">
        <div>
            <h5>チーム</h5>
            <p>チーム向けプラン</p>
            <p>
                <span class="amount">900円</span>
                <span>/ユーザー・月</span>
            </p>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>無制限の公開プロジェクト</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>無制限の非公開プロジェクト</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>メンバー管理</p>
            </div>
            <div class="feature">
                <img src="https://img.icons8.com/ios-glyphs/16/10B981/checkmark--v1.png"/>
                <p>プレミアムサポート</p>
            </div>
        </div>
        <div>
            <a href="#" class="button">開始する</a>
        </div>
    </div>
</div>
```



## FAQ・お問い合わせ

### FAQ

<example height="400px">
    <style>
        .questions {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 32px;
            color: #6B7280;
        }
        .questions .head h5 {
            margin: 0px;
            color: #000000;
            text-align: center;
            font-size: 24px;
        }
        .questions .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
        .questions .list .question p {
            margin: 0px;
        }
        .questions .list .question .title {
            margin-bottom: 16px;
            color: #000000;
            font-weight: bold;
        }
    </style>
    <div class="questions">
        <div class="head">
            <h5>よくある質問</h5>
        </div>
        <div class="list">
            <div class="question">
                <p class="title">料金はいつ引き落としされますか？</p>
                <p>お客さまの締め日によって異なり、毎月6日、16日、26日の引き落とし日に分かれます。</p>
            </div>
            <div class="question">
                <p class="title">月額料金を教えて下さい。</p>
                <p>ベーシックプランは990円、スタンダードプランは1,490円、プレミアムプランは1,980円です。</p>
            </div>
            <div class="question">
                <p class="title">データをバックアップする方法を教えてください。</p>
                <p>「設定」→「ストレージ」→「バックアップ」からバックアップできます。</p>
            </div>
            <div class="question">
                <p class="title">IDを確認する方法を教えてください。</p>
                <p>ユーザー情報画面からご確認できます。</p>
            </div>
        </div>
    </div>
</example>

```css
.questions {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    color: #6B7280;
}
.questions .head h5 {
    margin: 0px;
    color: #000000;
    text-align: center;
    font-size: 24px;
}
.questions .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}
.questions .list .question p {
    margin: 0px;
}
.questions .list .question .title {
    margin-bottom: 16px;
    color: #000000;
    font-weight: bold;
}
```

```html
<div class="questions">
    <div class="head">
        <h5>よくある質問</h5>
    </div>
    <div class="list">
        <div class="question">
            <p class="title">料金はいつ引き落としされますか？</p>
            <p>お客さまの締め日によって異なり、毎月6日、16日、26日の引き落とし日に分かれます。</p>
        </div>
        <div class="question">
            <p class="title">月額料金を教えて下さい。</p>
            <p>ベーシックプランは990円、スタンダードプランは1,490円、プレミアムプランは1,980円です。</p>
        </div>
        <div class="question">
            <p class="title">データをバックアップする方法を教えてください。</p>
            <p>「設定」→「ストレージ」→「バックアップ」からバックアップできます。</p>
        </div>
        <div class="question">
            <p class="title">IDを確認する方法を教えてください。</p>
            <p>ユーザー情報画面からご確認できます。</p>
        </div>
    </div>
</div>
```

### お問い合わせ

<example height="690px">
    <style>
        .cotnact {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 32px;
            color: #6B7280;
        }
        .cotnact .head h5 {
            margin: 0px;
            color: #000000;
            text-align: center;
            font-size: 24px;
        }
        .cotnact form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
        .cotnact form .row {
            display: flex;
            flex-direction: column;
            gap: 4px;
            grid-column-end: span 2;
        }
        .cotnact form .row.half {
            grid-column-end: span 1;
        }
        .cotnact form label {
            font-size: 12px;
        }
        .cotnact form input[type="text"], .cotnact form textarea {
            width: 100%;
            padding: 12px 12px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            box-sizing: border-box;
            box-shadow: 1px 1px 2px #D1D5DB;
        }
        .cotnact form input[type="submit"] {
            width: 100%;
            padding: 12px 12px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            box-sizing: border-box;
            box-shadow: 1px 1px 2px #D1D5DB;
            background-color: #10B981;
            color: #ffffff;
            cursor: pointer;
        }
        .cotnact form input[type="submit"]:hover {
            background-color: #047857;
        }
    </style>
    <div class="cotnact">
        <div class="head">
            <h5>お問い合わせ</h5>
        </div>
        <form>
            <div class="row half">
                <label>姓</label>
                <input type="text" name="last_name">
            </div>
            <div class="row half">
                <label>名</label>
                <input type="text" name="first_name">
            </div>
            <div class="row">
                <label>メールアドレス</label>
                <input type="text" name="email">
            </div>
            <div class="row">
                <label>電話番号</label>
                <input type="text" name="phone_number">
            </div>
            <div class="row">
                <label>お問い合わせ内容</label>
                <textarea name="message" rows="10"></textarea>
            </div>
            <div class="row">
                <input type="submit" value="送信">
            </div>
        </form>
    </div>
</example>

```css
.cotnact {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    color: #6B7280;
}
.cotnact .head h5 {
    margin: 0px;
    color: #000000;
    text-align: center;
    font-size: 24px;
}
.cotnact form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}
.cotnact form .row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    grid-column-end: span 2;
}
.cotnact form .row.half {
    grid-column-end: span 1;
}
.cotnact form label {
    font-size: 12px;
}
.cotnact form input[type="text"], .cotnact form textarea {
    width: 100%;
    padding: 12px 12px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px #D1D5DB;
}
.cotnact form input[type="submit"] {
    width: 100%;
    padding: 12px 12px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px #D1D5DB;
    background-color: #10B981;
    color: #ffffff;
    cursor: pointer;
}
.cotnact form input[type="submit"]:hover {
    background-color: #047857;
}
```

```html
<div class="cotnact">
    <div class="head">
        <h5>お問い合わせ</h5>
    </div>
    <form>
        <div class="row half">
            <label>姓</label>
            <input type="text" name="last_name">
        </div>
        <div class="row half">
            <label>名</label>
            <input type="text" name="first_name">
        </div>
        <div class="row">
            <label>メールアドレス</label>
            <input type="text" name="email">
        </div>
        <div class="row">
            <label>電話番号</label>
            <input type="text" name="phone_number">
        </div>
        <div class="row">
            <label>お問い合わせ内容</label>
            <textarea name="message" rows="10"></textarea>
        </div>
        <div class="row">
            <input type="submit" value="送信">
        </div>
    </form>
</div>
```

## フッター

<example height="270px">
    <style>
        .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 64px 32px;
            background-color: #374151;
        }
        .footer .links {
            display: flex;
            gap: 32px;
        }
        .footer .links a {
            color: #D1D5DB;
            text-decoration: none;
        }
        .footer .links a:hover {
            color: #ffffff;
        }
        .footer .medias {
            display: flex;
            gap: 32px;
        }
        .footer .copyright {
            margin: 0px;
            color: #D1D5DB;
        }
    </style>
    <footer class="footer">
        <div class="links">
            <a href="#">会社概要</a>
            <a href="#">事業内容</a>
            <a href="#">採用情報</a>
            <a href="#">お問い合わせ</a>
        </div>
        <div class="medias">
            <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/facebook-new.png"/>
            </a>
            <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/twitter--v1.png"/>
            </a>
            <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/github.png"/>
            </a>
        </div>
        <p class="copyright">
            © 2021 Example, Inc. All rights reserved.
        </p>
    </footer>
</example>

```css
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 64px 32px;
    background-color: #374151;
}
.footer .links {
    display: flex;
    gap: 32px;
}
.footer .links a {
    color: #D1D5DB;
    text-decoration: none;
}
.footer .links a:hover {
    color: #ffffff;
}
.footer .medias {
    display: flex;
    gap: 32px;
}
.footer .copyright {
    margin: 0px;
    color: #D1D5DB;
}
```

```html
<footer class="footer">
    <div class="links">
        <a href="#">会社概要</a>
        <a href="#">事業内容</a>
        <a href="#">採用情報</a>
        <a href="#">お問い合わせ</a>
    </div>
    <div class="medias">
        <a href="#">
            <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/facebook-new.png"/>
        </a>
        <a href="#">
            <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/twitter--v1.png"/>
        </a>
        <a href="#">
            <img src="https://img.icons8.com/ios-glyphs/24/d1d5db/github.png"/>
        </a>
    </div>
    <p class="copyright">
        © 2021 Example, Inc. All rights reserved.
    </p>
</footer>
```



## リスト・グリッド

### リスト

<example height="190px">
    <style>
        .list {
            border: solid 1px #D1D5DB;
            border-radius: 4px;
        }
        .list .item {
            display: flex;
            justify-content: space-between;
            padding: 8px 16px;
            color: #6B7280;
            background-color: #ffffff;
            text-decoration: none;
        }
        .list .item:first-child {
            border-radius: 4px 4px 0px 0px;
        }
        .list .item:last-child {
            border-radius: 0px 0px 4px 4px;
        }
        .list .item:nth-child(n+2) {
            border-top: solid 1px #D1D5DB;
        }
        .list .item:hover {
            background-color: #F3F4F6;
        }
        .list .item .leading {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .list .item .leading p {
            margin: 0px;
        }
        .list .item .leading .title {
            color: #10B981;
            font-weight: bold;
        }
        .list .item .leading .labels {
            display: flex;
            gap: 4px;
        }
        .list .item .leading .labels .label {
            display: flex;
            align-items: center;
            gap: 2px;
            font-size: 12px;
        }
        .list .item .trailing {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .list .item .trailing img {
            display: block;
        }
        .list .item .trailing .users {
            display: flex;
        }
        .list .item .trailing .users img {
            margin-left: -8px;
            border: solid 2px #ffffff;
            border-radius: 14px;
            background-color: #10B981;
        }
    </style>
    <div class="list">
        <a class="item" href="#">
            <div class="leading">
                <p class="title">８月集計レポート</p>
                <div class="labels">
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>レポート</span>
                    </p>
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>重要</span>
                    </p>
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>確認済み</span>
                    </p>
                </div>
            </div>
            <div class="trailing">
                <div class="users">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/hedgehog.png"/>
                </div>
                <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
            </div>
        </a>
        <a class="item" href="#">
            <div class="leading">
                <p class="title">９月集計レポート</p>
                <div class="labels">
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>レポート</span>
                    </p>
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>重要</span>
                    </p>
                </div>
            </div>
            <div class="trailing">
                <div class="users">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/frog-face.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/chimpanzee.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/sheep.png"/>
                </div>
                <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
            </div>
        </a>
        <a class="item" href="#">
            <div class="leading">
                <p class="title">１０月集計レポート</p>
                <div class="labels">
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>レポート</span>
                    </p>
                    <p class="label">
                        <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                        <span>重要</span>
                    </p>
                </div>
            </div>
            <div class="trailing">
                <div class="users">
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/hedgehog.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/frog-face.png"/>
                </div>
                <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
            </div>
        </a>
    </div>
</example>

```css
.list {
    border: solid 1px #D1D5DB;
    border-radius: 4px;
}
.list .item {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    color: #6B7280;
    background-color: #ffffff;
    text-decoration: none;
}
.list .item:first-child {
    border-radius: 4px 4px 0px 0px;
}
.list .item:last-child {
    border-radius: 0px 0px 4px 4px;
}
.list .item:nth-child(n+2) {
    border-top: solid 1px #D1D5DB;
}
.list .item:hover {
    background-color: #F3F4F6;
}
.list .item .leading {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.list .item .leading p {
    margin: 0px;
}
.list .item .leading .title {
    color: #10B981;
    font-weight: bold;
}
.list .item .leading .labels {
    display: flex;
    gap: 4px;
}
.list .item .leading .labels .label {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 12px;
}
.list .item .trailing {
    display: flex;
    align-items: center;
    gap: 8px;
}
.list .item .trailing img {
    display: block;
}
.list .item .trailing .users {
    display: flex;
}
.list .item .trailing .users img {
    margin-left: -8px;
    border: solid 2px #ffffff;
    border-radius: 14px;
    background-color: #10B981;
}
```

```html
<div class="list">
    <a class="item" href="#">
        <div class="leading">
            <p class="title">８月集計レポート</p>
            <div class="labels">
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>レポート</span>
                </p>
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>重要</span>
                </p>
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>確認済み</span>
                </p>
            </div>
        </div>
        <div class="trailing">
            <div class="users">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/hedgehog.png"/>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </div>
    </a>
    <a class="item" href="#">
        <div class="leading">
            <p class="title">９月集計レポート</p>
            <div class="labels">
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>レポート</span>
                </p>
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>重要</span>
                </p>
            </div>
        </div>
        <div class="trailing">
            <div class="users">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/frog-face.png"/>
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/chimpanzee.png"/>
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/sheep.png"/>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </div>
    </a>
    <a class="item" href="#">
        <div class="leading">
            <p class="title">１０月集計レポート</p>
            <div class="labels">
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>レポート</span>
                </p>
                <p class="label">
                    <img src="https://img.icons8.com/ios-glyphs/12/6B7280/price-tag.png"/>
                    <span>重要</span>
                </p>
            </div>
        </div>
        <div class="trailing">
            <div class="users">
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/hedgehog.png"/>
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/frog-face.png"/>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </div>
    </a>
</div>
```

### グリッド

<example height="170px">
    <style>
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .grid .item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 16px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            text-decoration: none;
        }
        .grid .item:hover {
            background-color: #D1D5DB;
        }
        .grid .item .leading img {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background-color: #10B981;
        }
        .grid .item .body {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .grid .item .body p {
            margin: 0px;
            color: #000000;
        }
        .grid .item .body .role {
            font-size: 12px;
            color: #6B7280;
        }
    </style>
    <div class="grid">
        <a class="item" href="#">
            <div class="leading">
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/hedgehog.png"/>
            </div>
            <div class="body">
                <p class="name">Yamada</p>
                <p class="role">Founder / CEO</p>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </a>
        <a class="item" href="#">
            <div class="leading">
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/frog-face.png"/>
            </div>
            <div class="body">
                <p class="name">Tanaka</p>
                <p class="role">Manager</p>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </a>
        <a class="item" href="#">
            <div class="leading">
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/chimpanzee.png"/>
            </div>
            <div class="body">
                <p class="name">Sato</p>
                <p class="role">Designer</p>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </a>
        <a class="item" href="#">
            <div class="leading">
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/sheep.png"/>
            </div>
            <div class="body">
                <p class="name">Suzuki</p>
                <p class="role">Developer</p>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
        </a>
    </div>
</example>

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}
.grid .item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 16px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    text-decoration: none;
}
.grid .item:hover {
    background-color: #D1D5DB;
}
.grid .item .leading img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #10B981;
}
.grid .item .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.grid .item .body p {
    margin: 0px;
    color: #000000;
}
.grid .item .body .role {
    font-size: 12px;
    color: #6B7280;
}
```

```html
<div class="grid">
    <a class="item" href="#">
        <div class="leading">
            <img src="https://img.icons8.com/ios-glyphs/48/ffffff/hedgehog.png"/>
        </div>
        <div class="body">
            <p class="name">Yamada</p>
            <p class="role">Founder / CEO</p>
        </div>
        <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
    </a>
    <a class="item" href="#">
        <div class="leading">
            <img src="https://img.icons8.com/ios-glyphs/48/ffffff/frog-face.png"/>
        </div>
        <div class="body">
            <p class="name">Tanaka</p>
            <p class="role">Manager</p>
        </div>
        <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
    </a>
    <a class="item" href="#">
        <div class="leading">
            <img src="https://img.icons8.com/ios-glyphs/48/ffffff/chimpanzee.png"/>
        </div>
        <div class="body">
            <p class="name">Sato</p>
            <p class="role">Designer</p>
        </div>
        <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
    </a>
    <a class="item" href="#">
        <div class="leading">
            <img src="https://img.icons8.com/ios-glyphs/48/ffffff/sheep.png"/>
        </div>
        <div class="body">
            <p class="name">Suzuki</p>
            <p class="role">Developer</p>
        </div>
        <img src="https://img.icons8.com/ios-glyphs/16/6B7280/chevron-right.png"/>
    </a>
</div>
```



## ボタン・フォーム

### ボタン

<example height="270px">
    <style>
        .buttons {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
        .button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            box-shadow: 1px 1px 2px #D1D5DB;
            cursor: pointer;
        }
        .button.primary {
            background-color: #10B981;
            color: #ffffff;
        }
        .button.primary:hover {
            background-color: #047857;
        }
        .button.secondary {
            background-color: #D1FAE5;
            color: #10B981;
        }
        .button.secondary:hover {
            background-color: #6EE7B7;
        }
        .button.outlined {
            border: solid 1px #D1D5DB;
            background-color: #ffffff;
            color: #000000;
        }
        .button.outlined:hover {
            background-color: #D1D5DB;
        }
        .button.rounded {
            border-radius: 16px;
        }
        .button.icon {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
        }
        .button.icon img {
            width: 16px;
            height: 16px;
        }
        .button.circle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 32px;
            padding: 0;
        }
    </style>
    <div class="buttons">
        <button class="button primary">
            Primary Button
        </button>
        <button class="button secondary">
            Secondary Button
        </button>
        <button class="button outlined">
            Outlined Button
        </button>
        <button class="button primary rounded">
            Rounded Button
        </button>
        <button class="button primary circle">
            <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
        </button>
        <button class="button primary icon">
            <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
            <span>Icon + Text</span>
        </button>
        <button class="button primary icon">
            <span>Text + Icon</span>
            <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
        </button>
    </div>
</example>

```css
.button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #D1D5DB;
    cursor: pointer;
}
.button.primary {
    background-color: #10B981;
    color: #ffffff;
}
.button.primary:hover {
    background-color: #047857;
}
.button.secondary {
    background-color: #D1FAE5;
    color: #10B981;
}
.button.secondary:hover {
    background-color: #6EE7B7;
}
.button.outlined {
    border: solid 1px #D1D5DB;
    background-color: #ffffff;
    color: #000000;
}
.button.outlined:hover {
    background-color: #D1D5DB;
}
.button.rounded {
    border-radius: 16px;
}
.button.icon {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
.button.icon img {
    width: 16px;
    height: 16px;
}
.button.circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    padding: 0;
}
```

```html
<button class="button primary">
    Primary Button
</button>
<button class="button secondary">
    Secondary Button
</button>
<button class="button outlined">
    Outlined Button
</button>
<button class="button primary rounded">
    Rounded Button
</button>
<button class="button primary circle">
    <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
</button>
<button class="button primary icon">
    <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
    <span>Icon + Text</span>
</button>
<button class="button primary icon">
    <span>Text + Icon</span>
    <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-like.png"/>
</button>
```

### フォーム

<example height="420px">
    <style>
        .inputs {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }
        label.text {
            display: block;
            font-size: 12px;
            margin-bottom: 4px;
        }
        input[type="text"] {
            display: block;
            height: 40px;
            padding: 12px 12px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            outline-color: #10B981;
            box-sizing: border-box;
            box-shadow: 1px 1px 2px #D1D5DB;
        }
        input[type="text"].error {
            border-color: #EF4444;
            outline-color: #EF4444;
            box-shadow: 1px 1px 2px #FECACA;
        }
        .input.leading {
            position: relative;
        }
        .input.leading img {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 20px;
            height: 20px;
        }
        .input.leading input[type="text"] {
            padding-left: 40px;
        }
        .input.trailing {
            position: relative;
        }
        .input.trailing img {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
        }
        .input.trailing input[type="text"] {
            padding-right: 40px;
        }
        .input.action {
            display: flex;
            border-radius: 4px;
            box-shadow: 1px 1px 2px #D1D5DB;
        }
        .input.action input[type="text"] {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            box-shadow: none;
        }
        .input.action button {
            height: 40px;
            padding: 0px 12px;
            box-sizing: border-box;
            border: solid 1px #D1D5DB;
            border-left: none;
            border-radius: 0px 4px 4px 0px;
            background-color: #F3F4F6;
            cursor: pointer;
        }
        .input.action button:hover {
            background-color: #D1D5DB;
        }
        select {
            display: block;
            height: 40px;
            min-width: 192px;
            padding: 12px 40px 12px 12px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            outline-color: #10B981;
            box-sizing: border-box;
            box-shadow: 1px 1px 2px #D1D5DB;
            background-image: url(https://img.icons8.com/ios-glyphs/16/D1D5DB/chevron-down.png);
            background-position: right 12px center;
            background-repeat: no-repeat;
            background-size: 16px 16px;
            appearance: none;
        }
        .input.checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        input[type="checkbox"] {
            margin: 0px;
            width: 20px;
            height: 20px;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
            appearance: none;
        }
        input[type="checkbox"]:checked {
            border-color: #10B981;
            background-image: url(https://img.icons8.com/ios-glyphs/16/ffffff/checkmark--v1.png);
            background-color: #10B981;
            background-size: 16px 16px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .input.radio label {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        input[type="radio"] {
            width: 20px;
            height: 20px;
            margin: 0px;
            border: solid 1px #D1D5DB;
            border-radius: 10px;
            appearance: none;
        }
        input[type="radio"]:checked {
            border-color: #10B981;
            background-image: url(https://img.icons8.com/ios-glyphs/10/ffffff/filled-circle.png);
            background-color: #10B981;
            background-size: 10px 10px;
            background-position: center;
            background-repeat: no-repeat;
        }
    </style>
    <div class="inputs">
        <div class="input">
            <label class="text">Email</label>
            <input type="text">
        </div>
        <div class="input trailing">
            <input class="error" type="text">
                <img src="https://img.icons8.com/ios-glyphs/20/EF4444/box-important--v1.png"/>
        </div>
        <div class="input leading">
            <input type="text">
            <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/new-post.png"/>
        </div>
        <div class="input action">
            <input type="text">
            <button>Action</button>
        </div>
        <div class="input">
            <select>
                <option value="ja" selected>JA</option>
                <option value="en">EN</option>
                <option value="zh">ZH</option>
            </select>
        </div>
        <div class="input checkbox">
            <input type="checkbox">
            <span>Check</span>
        </div>
        <div class="input radio">
            <label>
                <input type="radio" name="radio" checked>
                <span>Free</span>
            </label>
            <label>
                <input type="radio" name="radio">
                <span>Pro</span>
            </label>
            <label>
                <input type="radio" name="radio">
                <span>Team</span>
            </label>
        </div>
    </div>
</example>

```css
label.text {
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
}
input[type="text"] {
    display: block;
    height: 40px;
    padding: 12px 12px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    outline-color: #10B981;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px #D1D5DB;
}
input[type="text"].error {
    border-color: #EF4444;
    outline-color: #EF4444;
    box-shadow: 1px 1px 2px #FECACA;
}
.input.leading {
    position: relative;
}
.input.leading img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
}
.input.leading input[type="text"] {
    padding-left: 40px;
}
.input.trailing {
    position: relative;
}
.input.trailing img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
}
.input.trailing input[type="text"] {
    padding-right: 40px;
}
.input.action {
    display: flex;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #D1D5DB;
}
.input.action input[type="text"] {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
}
.input.action button {
    height: 40px;
    padding: 0px 12px;
    box-sizing: border-box;
    border: solid 1px #D1D5DB;
    border-left: none;
    border-radius: 0px 4px 4px 0px;
    background-color: #F3F4F6;
    cursor: pointer;
}
.input.action button:hover {
    background-color: #D1D5DB;
}
select {
    display: block;
    height: 40px;
    min-width: 192px;
    padding: 12px 40px 12px 12px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    outline-color: #10B981;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px #D1D5DB;
    background-image: url(https://img.icons8.com/ios-glyphs/16/D1D5DB/chevron-down.png);
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    appearance: none;
}
.input.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
}
input[type="checkbox"] {
    margin: 0px;
    width: 20px;
    height: 20px;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
    appearance: none;
}
input[type="checkbox"]:checked {
    border-color: #10B981;
    background-image: url(https://img.icons8.com/ios-glyphs/16/ffffff/checkmark--v1.png);
    background-color: #10B981;
    background-size: 16px 16px;
    background-position: center;
    background-repeat: no-repeat;
}
.input.radio label {
    display: flex;
    align-items: center;
    gap: 8px;
}
input[type="radio"] {
    width: 20px;
    height: 20px;
    margin: 0px;
    border: solid 1px #D1D5DB;
    border-radius: 10px;
    appearance: none;
}
input[type="radio"]:checked {
    border-color: #10B981;
    background-image: url(https://img.icons8.com/ios-glyphs/10/ffffff/filled-circle.png);
    background-color: #10B981;
    background-size: 10px 10px;
    background-position: center;
    background-repeat: no-repeat;
}
```

```html
<div class="input">
    <label class="text">Email</label>
    <input type="text">
</div>
<div class="input trailing">
    <input class="error" type="text">
        <img src="https://img.icons8.com/ios-glyphs/20/EF4444/box-important--v1.png"/>
</div>
<div class="input leading">
    <input type="text">
    <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/new-post.png"/>
</div>
<div class="input action">
    <input type="text">
    <button>Action</button>
</div>
<div class="input">
    <select>
        <option value="ja" selected>JA</option>
        <option value="en">EN</option>
        <option value="zh">ZH</option>
    </select>
</div>
<div class="input checkbox">
    <input type="checkbox">
    <span>Check</span>
</div>
<div class="input radio">
    <label>
        <input type="radio" name="radio" checked>
        <span>Free</span>
    </label>
    <label>
        <input type="radio" name="radio">
        <span>Pro</span>
    </label>
    <label>
        <input type="radio" name="radio">
        <span>Team</span>
    </label>
</div>
```



## モーダル・通知メッセージ

### モーダル

<example height="400px">
    <style>
        .modal-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: #6B728080;
        }
        .modal {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 512px;
            padding: 32px;
            background-color: #ffffff;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
        }
        .modal .title h5 {
            margin: 0px;
            font-size: 20px;
        }
        .modal .body p {
            margin: 0px;
            color: #6B7280;
        }
        .modal .actions {
            display: flex;
            justify-content: flex-end;
            gap: 16px;
        }
        .modal .actions .button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            box-shadow: 1px 1px 2px #D1D5DB;
            cursor: pointer;
        }
        .modal .actions .button.primary {
            background-color: #10B981;
            color: #ffffff;
        }
        .modal .actions .button.primary:hover {
            background-color: #047857;
        }
        .modal .actions .button.outlined {
            border: solid 1px #D1D5DB;
            background-color: #ffffff;
            color: #000000;
        }
        .modal .actions .button.outlined:hover {
            background-color: #D1D5DB;
        }
    </style>
    <div class="modal-container">
        <div class="modal">
            <div class="title">
                <h5>アカウント削除</h5>
            </div>
            <div class="body">
                <p>
                    本当にアカウントを削除しますか？
                    アカウントに登録されている全てのデータは、永久に削除されます。
                    この行為は元に戻すことはできません。
                </p>
            </div>
            <div class="actions">
                <button class="button outlined">キャンセル</button>
                <button class="button primary">削除する</button>
            </div>
        </div>
    </div>
</example>

```css
.modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #6B728080;
}
.modal {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 512px;
    padding: 32px;
    background-color: #ffffff;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
}
.modal .title h5 {
    margin: 0px;
    font-size: 20px;
}
.modal .body p {
    margin: 0px;
    color: #6B7280;
}
.modal .actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
}
.modal .actions .button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #D1D5DB;
    cursor: pointer;
}
.modal .actions .button.primary {
    background-color: #10B981;
    color: #ffffff;
}
.modal .actions .button.primary:hover {
    background-color: #047857;
}
.modal .actions .button.outlined {
    border: solid 1px #D1D5DB;
    background-color: #ffffff;
    color: #000000;
}
.modal .actions .button.outlined:hover {
    background-color: #D1D5DB;
}
```

```html
<div class="modal-container">
    <div class="modal">
        <div class="title">
            <h5>アカウント削除</h5>
        </div>
        <div class="body">
            <p>
                本当にアカウントを削除しますか？
                アカウントに登録されている全てのデータは、永久に削除されます。
                この行為は元に戻すことはできません。
            </p>
        </div>
        <div class="actions">
            <button class="button outlined">キャンセル</button>
            <button class="button primary">削除する</button>
        </div>
    </div>
</div>
```

### 通知メッセージ

<example height="300px">
    <style>
        .notifications {
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: fixed;
            top: 16px;
            right: 16px;
        }
        .message {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            width: 312px;
            padding: 8px;
            background-color: #ffffff;
            border: solid 1px #D1D5DB;
            border-radius: 4px;
        }
        .message .icon {
            padding: 2px;
        }
        .message .body {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .message .body p {
            margin: 0px;
            color: #6B7280;
        }
        .message .body .title {
            color: #000000;
        }
        .message .close {
            padding: 2px;
        }
    </style>
    <div class="notifications">
        <div class="message">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/notification-center.png"/>
            </div>
            <div class="body">
                <p class="title">予定の１５分前です</p>
                <p>キックオフミーティング</p>
            </div>
            <div class="close">
                <a href="#">
                    <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/delete-sign.png"/>
                </a>
            </div>
        </div>
        <div class="message">
            <div class="icon">
                <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/notification-center.png"/>
            </div>
            <div class="body">
                <p class="title">予定の３０分前です</p>
                <p>採用面接</p>
            </div>
            <div class="close">
                <a href="#">
                    <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/delete-sign.png"/>
                </a>
            </div>
        </div>
    </div>
</example>

```css
.notifications {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: fixed;
    top: 16px;
    right: 16px;
}
.message {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    width: 312px;
    padding: 8px;
    background-color: #ffffff;
    border: solid 1px #D1D5DB;
    border-radius: 4px;
}
.message .icon {
    padding: 2px;
}
.message .body {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.message .body p {
    margin: 0px;
    color: #6B7280;
}
.message .body .title {
    color: #000000;
}
.message .close {
    padding: 2px;
}
```

```html
<div class="notifications">
    <div class="message">
        <div class="icon">
            <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/notification-center.png"/>
        </div>
        <div class="body">
            <p class="title">予定の１５分前です</p>
            <p>キックオフミーティング</p>
        </div>
        <div class="close">
            <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/delete-sign.png"/>
            </a>
        </div>
    </div>
    <div class="message">
        <div class="icon">
            <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/notification-center.png"/>
        </div>
        <div class="body">
            <p class="title">予定の３０分前です</p>
            <p>採用面接</p>
        </div>
        <div class="close">
            <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/20/D1D5DB/delete-sign.png"/>
            </a>
        </div>
    </div>
</div>
```
