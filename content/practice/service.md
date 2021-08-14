---
title: サービス紹介ページを作る
description: HTML・CSS・JavaScriptを使ってサービス紹介ページを作ってみよう！
slug: practice-01
---

## サービス紹介ページを作る

このサイトでは、実際に手を動かしながら、楽しく学べるコンテンツを目指しています。
なので、HTML・CSS自体を学ぶのではなく、Webサイトの作り方を学んでいきます。

Webサイトを作る上で、HTML・CSSの仕様をすべて暗記する必要はありません。
忘れてしまったり知らない部分は、その時に調べて使えればOKです。

大切なのは、どのように組み立てればイメージしているWebサイトが作れるか、ということを考えられるようになることです。
つまり、様々なパターンのWebサイトを実際に作り、あの時作ったパターンを少し変えて作れそう、ということが考えられるようになることです。

### Weekly Coffee

作るのは次のようなデザインのサービス紹介ページです。
ヘッダー・メインコンテンツ・フッターの3つがあり、タイトル・特徴・価格と多くのサービス紹介ページに含まれている内容です。

![](/images/practice/service-screen.png)

### Icons8

Icons8はアイコンなどの画像素材を配信しているサービスです。
数多くのアイコンがあり、無料で使い始められます。

- Icons8
  - [https://icons8.com/](https://icons8.com/)

サービス紹介ページを作る上で、Icons8のアイコンを使っていきます。


## レイアウト

まずは、全体の大まかなレイアウトを作ります。

ヘッダー・メインコンテンツ・フッターと大きく３つに分けられます。
ヘッダー・メインコンテンツ内は横幅を指定できるよう、`container`クラスを設定します。

![](/images/practice/service-layout.png)

この時、`container`クラスには横幅を指定した上で要素を左右中央に配置されるようCSSを記述します。
横幅は`max-width`を使い、左右中央に配置するには左右のマージンを`auto`にします。
こうすることで、左右に等幅のマージンが入り、左右中央に配置させることができます。

![](/images/practice/service-container.png)

HTML・CSSは次のようになります。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekly Coffee</title>
    <style type="text/css">
        html {
            font-size: 16px;
        }
        body {
            margin: 0;
            color: gray;
            background-color: white;
        }
        a {
            color: gray;
            text-decoration: none;
        }
        .container {
            max-width: 768px;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>
    <header class="container">
        HEADER
    </header>
    <main class="container">
        MAIN
    </main>
    <footer>
        FOOTER
    </footer>
</body>
</html>
```


## ヘッダー

次に、ヘッダー部分を作ります。

![](/images/practice/service-header.png)

左側にロゴアイコンを配置し、右側にナビゲーションを配置します。
このように、要素を左右に配置し要素間のスペースを最大にするにはFlexboxが使えます。

要素を左から右に配置するので、`flex-direction: row;`とします。
また、要素間のスペースを最大にするため、`justify-content: space-between;`とします。

![](/images/practice/service-header-flex.png)

HTML・CSSは次のようになります。

```css
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
}
header a {
    display: inline-block;
    height: 40px;
    line-height: 40px;
}
header nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}
header nav a:hover {
    color: black;
}
```

```html
<header class="container">
    <a href="#">
        <img src="https://img.icons8.com/ios/40/10B981/coffee-beans-.png"/>
    </a>
    <nav>
        <a href="#service">Service</a>
        <a href="#features">Features</a>
        <a href="#prices">Prices</a>
    </nav>
</header>
```


## タイトル

次に、サービスタイトルの部分を作ります。

![](/images/practice/service-service.png)

見出し・文章はサイズ・色などを調整します。
また、ボタンは、角丸・影の装飾が必要です。
角丸は`border-radius`を使い、影は`box-shadow`を使います。

`box-shadow`の値は左から順番に、水平方向のオフセット・垂直方向のオフセット・ぼかし具合・色、となっています。
オフセットは指定された分だけ影の開始位置をずらし、ぼかし具合は数値が大きくなるほどぼやけます。

![](/images/practice/service-box-shadow.png)

そして、見出しの文字サイズには`font-size: 3rem;`を設定します。
`rem`とは、`html`のフォントサイズを基準とした単位です。
例えば、`html`のフォントサイズが`16px`である時、`1rem`は`16px`となり、`2rem`は`32px`となります。

`px`ではなく`rem`を使うことで、`html`のフォントサイズを元にしたサイズ指定ができます。
つまり、`html`のフォントサイズを変更すると`rem`の値も自動的に変化し全体のサイズ調整がしやすくなります。

![](/images/practice/service-rem.png)

HTML・CSSは次のようになります。

```css
#service {
    margin-top: 64px;
    text-align: center;
}
#service h1 {
    font-size: 3rem;
    line-height: 3rem;
    margin: 0px;
    color: black;
}
#service p {
    margin: 16px 0px 0px 0px;
}
#service a {
    margin-top: 16px;
    display: inline-block;
    width: 128px;
    height: 40px;
    line-height: 40px;
    background-color: #10B981;
    color: white;
    border-radius: 4px;
    box-shadow: 1px 1px 2px silver;
}
```

```html
<main class="container">
    <div id="service">
        <h1>WEEKLY COFFEE</h1>
        <p>AIにより選択された、あなたりピッタリのコーヒーを毎週お届け</p>
        <a href="#">はじめる</a>
    </div>
</main>
```


## 特徴

次に、サービス特徴の部分を作ります。

![](/images/practice/service-features.png)

３つの特徴を左右に配置します。
要素を左右に配置するためFlexboxを使い、横幅を均等にするため`flex: 1;`を設定します。

`flex`プロパティを使うことで、Flexboxを使い並べた要素をどれだけ広げるか、を設定できます。
例えば、3つの要素に`flex: 1;`を設定すると、１対１対１の比率で各要素が広がります。
また、真ん中の要素だけ`flex: 2;`とすると、１対２対１の比率で各要素が広がります。

ここでは、各要素の横幅を均等、つまり１対１対１の比率にするので、３つの要素に`flex: 1;`を設定することとなります。

![](/images/practice/service-flex.png)

HTML・CSSは次のようになります。

```css
#features {
    margin-top: 128px;
}
#features h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    color: black;
    margin: 0px;
}
#features .list {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 32px;
}
#features .list .item {
    flex: 1;
}
#features .list .item h3 {
    font-size: 1rem;
    line-height: 1rem;
    color: black;
    margin: 16px 0px 0px 0px;
}
#features .list .item p {
    margin: 16px 0px 0px 0px;
}
```

```html
<main>
    <div id="service">
        <!-- サービス -->
    </div>
    <div id="features">
        <h2>Features</h2>
        <div class="list flex flex-row gap-4 mt-8">
            <div class="item">
                <img src="https://img.icons8.com/ios/48/10B981/artificial-intelligence.png"/>
                <h3>AIによる選択</h3>
                <p>あなたに最適化されたおすすめのコーヒーをAIが自動的に選択</p>
                <p>どれにしようか悩む必要はありません</p>
            </div>
            <div class="item">
                <img src="https://img.icons8.com/ios/48/10B981/coffee-beans-.png"/>
                <h3>厳選されたコーヒー</h3>
                <p>国内の契約農家による厳選されたコーヒー豆を使用</p>
                <p>ここでしか味わえない希少なコーヒー豆も</p>
            </div>
            <div class="item">
                <img src="https://img.icons8.com/ios/48/10B981/delivery.png"/>
                <h3>飲む分だけお届け</h3>
                <p>毎週飲みきれる分だけのコーヒー豆をお届け</p>
                <p>常に新鮮なコーヒーを味わえます</p>
            </div>
        </div>
    </div>
</main>
```


## 価格

次に、サービス価格の部分を作ります。

![](/images/practice/service-prices.png)

３つの価格を左右に配置します。
サービス特徴と同じくFlexboxを使い左右に並べ、`flex`を設定し横幅を均等にします。

左右に並べた各要素内は、上下に要素を並べます。
また、要素間のスペースを最大にするため、`justify-content: space-between;`とします。

![](/images/practice/service-prices-flex.png)

HTML・CSSは次のようになります。

```css
#prices {
    margin-top: 128px;
}
#prices h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    color: black;
    margin: 0px;
}
#prices .list {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 32px;
}
#prices .list .item {
    flex: 1;
    border-style: solid;
    border-width: 1px;
    border-color: silver;
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#prices .list .item h3 {
    font-size: 1rem;
    line-height: 1rem;
    color: black;
    margin: 16px 0px 0px 0px;
}
#prices .list .item p {
    margin: 16px 0px 0px 0px;
}
#prices .list .item .amount {
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rem;
    color: black;
}
#prices .list .item .month {
    color: black;
}
#prices .list .item a {
    margin-top: 16px;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #10B981;
    color: white;
    text-align: center;
    border-radius: 4px;
    box-shadow: 1px 1px 2px silver;
}
```

```html
<div id="prices">
    <h2>Prices</h2>
    <div class="list">
        <div class="item">
            <div>
                <h3>ライト</h3>
                <p>
                    <span class="amount">￥980</span>
                    <span class="month">/月</span>
                </p>
                <p>気軽にはじめてみたい方におすすめのプラン</p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>50種類からAIが選択</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>毎週1種類のコーヒー</span>
                </p>
            </div>
            <a href="#">このプランを選択</a>
        </div>
        <div class="item">
            <div>
                <h3>スタンダード</h3>
                <p>
                    <span class="amount">￥1480</span>
                    <span class="month">/月</span>
                </p>
                <p>様々なコーヒーを楽しみたい方におすすめのプラン</p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>200種類からAIが選択</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>毎週2種類のコーヒー</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>お届け日時を指定</span>
                </p>
            </div>
            <a href="#">このプランを選択</a>
        </div>
        <div class="item">
            <div>
                <h3>プレミアム</h3>
                <p>
                    <span class="amount">￥2980</span>
                    <span class="month">/月</span>
                </p>
                <p>全てのコーヒーを楽しみたい方におすすめのプラン</p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>500種類からAIが選択</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>毎週3種類のコーヒー</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>お届け日時を指定</span>
                </p>
                <p>
                    <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                    <span>特別冊子</span>
                </p>
            </div>
            <a href="#">このプランを選択</a>
        </div>
    </div>
</div>
```


## フッター

最後に、フッターの部分を作ります。

![](/images/practice/service-footer.png)

Flexboxを使い各リンクを左右に並べ、背景・文字などを装飾します。

HTML・CSSは次のようになります。

```css
footer {
    margin-top: 128px;
    background-color: #374151;
    padding: 64px 0px;
}
footer nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
}
footer nav a {
    color: silver;
}
footer nav a:hover {
    color: white;
}
footer p {
    margin: 64px 0px 0px 0px;
    text-align: center;
    color: silver;
}
```

```html
<footer>
    <nav>
        <a href="#" class="hover:text-white">Facebook</a>
        <a href="#" class="hover:text-white">Instagram</a>
        <a href="#" class="hover:text-white">Twitter</a>
    </nav>
    <p>© 2021 Weekly Coffee. All rights reserved.</p>
</footer>
```


## 全体

お疲れさまでした、これでサービス紹介ページが完成です。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekly Coffee</title>
    <style type="text/css">
        /* layout */
        html {
            font-size: 16px;
        }
        body {
            margin: 0;
            color: gray;
            background-color: white;
        }
        a {
            color: gray;
            text-decoration: none;
        }
        .container {
            max-width: 768px;
            margin-left: auto;
            margin-right: auto;
        }

        /* header */
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 8px;
        }
        header a {
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
        header nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
        }
        header nav a:hover {
            color: black;
        }

        /* service */
        #service {
            margin-top: 128px;
            text-align: center;
        }
        #service h1 {
            font-size: 3rem;
            line-height: 3rem;
            color: black;
            margin: 0px;
        }
        #service p {
            margin: 16px 0px 0px 0px;
        }
        #service a {
            margin-top: 16px;
            display: inline-block;
            width: 128px;
            height: 40px;
            line-height: 40px;
            background-color: #10B981;
            color: white;
            border-radius: 4px;
            box-shadow: 1px 1px 2px silver;
        }

        /* features */
        #features {
            margin-top: 128px;
        }
        #features h2 {
            text-align: center;
            font-size: 2rem;
            line-height: 2rem;
            color: black;
            margin: 0px;
        }
        #features .list {
            display: flex;
            flex-direction: row;
            gap: 16px;
            margin-top: 32px;
        }
        #features .list .item {
            flex: 1;
        }
        #features .list .item h3 {
            font-size: 1rem;
            line-height: 1rem;
            color: black;
            margin: 16px 0px 0px 0px;
        }
        #features .list .item p {
            margin: 16px 0px 0px 0px;
        }

        /* prices */
        #prices {
            margin-top: 128px;
        }
        #prices h2 {
            text-align: center;
            font-size: 2rem;
            line-height: 2rem;
            color: black;
            margin: 0px;
        }
        #prices .list {
            display: flex;
            flex-direction: row;
            gap: 8px;
            margin-top: 32px;
        }
        #prices .list .item {
            flex: 1;
            border-style: solid;
            border-width: 1px;
            border-color: silver;
            border-radius: 4px;
            padding: 16px;
            display: flex;
            flex-direction: column;
        }
        #prices .list .item h3 {
            font-size: 1rem;
            line-height: 1rem;
            color: black;
            margin: 16px 0px 0px 0px;
        }
        #prices .list .item p {
            margin: 16px 0px 0px 0px;
        }
        #prices .list .item .amount {
            font-weight: bold;
            font-size: 2rem;
            line-height: 2rem;
            color: black;
        }
        #prices .list .item .month {
            color: black;
        }
        #prices .list .item a {
            margin-top: 16px;
            display: block;
            height: 40px;
            line-height: 40px;
            background-color: #10B981;
            color: white;
            text-align: center;
            border-radius: 4px;
            box-shadow: 1px 1px 2px silver;
        }

        /* footer */
        footer {
            margin-top: 128px;
            background-color: #374151;
            padding: 64px 0px;
        }
        footer nav {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 16px;
        }
        footer nav a {
            color: silver;
        }
        footer nav a:hover {
            color: white;
        }
        footer p {
            margin: 64px 0px 0px 0px;
            text-align: center;
            color: silver;
        }
    </style>
</head>
<body>
    <!-- header -->
    <header class="container">
        <a href="#">
            <img src="https://img.icons8.com/ios/40/10B981/coffee-beans-.png"/>
        </a>
        <nav>
            <a href="#service">Service</a>
            <a href="#features">Features</a>
            <a href="#prices">Prices</a>
        </nav>
    </header>

    <main class="container">
        <!-- service -->
        <div id="service">
            <h1>WEEKLY COFFEE</h1>
            <p>AIにより選択された、あなたりピッタリのコーヒーを毎週お届け</p>
            <a href="#">はじめる</a>
        </div>

        <!-- features -->
        <div id="features">
            <h2>Features</h2>
            <div class="list flex flex-row gap-4 mt-8">
                <div class="item">
                    <img src="https://img.icons8.com/ios/48/10B981/artificial-intelligence.png"/>
                    <h3>AIによる選択</h3>
                    <p>あなたに最適化されたおすすめのコーヒーをAIが自動的に選択</p>
                    <p>どれにしようか悩む必要はありません</p>
                </div>
                <div class="item">
                    <img src="https://img.icons8.com/ios/48/10B981/coffee-beans-.png"/>
                    <h3>厳選されたコーヒー</h3>
                    <p>国内の契約農家による厳選されたコーヒー豆を使用</p>
                    <p>ここでしか味わえない希少なコーヒー豆も</p>
                </div>
                <div class="item">
                    <img src="https://img.icons8.com/ios/48/10B981/delivery.png"/>
                    <h3>飲む分だけお届け</h3>
                    <p>毎週飲みきれる分だけのコーヒー豆をお届け</p>
                    <p>常に新鮮なコーヒーを味わえます</p>
                </div>
            </div>
        </div>

        <!-- prices -->
        <div id="prices">
            <h2>Prices</h2>
            <div class="list">
                <div class="item">
                    <div>
                        <h3>ライト</h3>
                        <p>
                            <span class="amount">￥980</span>
                            <span class="month">/月</span>
                        </p>
                        <p>気軽にはじめてみたい方におすすめのプラン</p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>50種類からAIが選択</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>毎週1種類のコーヒー</span>
                        </p>
                    </div>
                    <a href="#">このプランを選択</a>
                </div>
                <div class="item">
                    <div>
                        <h3>スタンダード</h3>
                        <p>
                            <span class="amount">￥1480</span>
                            <span class="month">/月</span>
                        </p>
                        <p>様々なコーヒーを楽しみたい方におすすめのプラン</p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>200種類からAIが選択</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>毎週2種類のコーヒー</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>お届け日時を指定</span>
                        </p>
                    </div>
                    <a href="#">このプランを選択</a>
                </div>
                <div class="item">
                    <div>
                        <h3>プレミアム</h3>
                        <p>
                            <span class="amount">￥2980</span>
                            <span class="month">/月</span>
                        </p>
                        <p>全てのコーヒーを楽しみたい方におすすめのプラン</p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>500種類からAIが選択</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>毎週3種類のコーヒー</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>お届け日時を指定</span>
                        </p>
                        <p>
                            <img src="https://img.icons8.com/ios/16/10B981/checkmark--v1.png"/>
                            <span>特別冊子</span>
                        </p>
                    </div>
                    <a href="#">このプランを選択</a>
                </div>
            </div>
        </div>
    </main>

    <!-- footer -->
    <footer>
        <nav>
            <a href="#" class="hover:text-white">Facebook</a>
            <a href="#" class="hover:text-white">Instagram</a>
            <a href="#" class="hover:text-white">Twitter</a>
        </nav>
        <p>© 2021 Weekly Coffee. All rights reserved.</p>
    </footer>
</body>
</html>
```


## Netlifyで公開する

Netlifyを使い、Webサイトとして公開してみます。

[「Webサイトを公開する」](/website/site-hosting)で紹介した方法と同じく、`public`フォルダ内に、`index.html`を作成します。
そして、Netlifyの管理画面からフォルダをアップロードします。

これで、Webサイトを公開できました。
