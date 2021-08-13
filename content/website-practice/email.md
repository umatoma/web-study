---
title: メール一覧ページを作る
description: HTML・CSS・JavaScriptを使ってメール一覧ページを作ってみよう！
slug: website-practice-02
---

## メール一覧ページを作る

このサイトでは、実際に手を動かしながら、楽しく学べるコンテンツを目指しています。
なので、HTML・CSS自体を学ぶのではなく、Webサイトの作り方を学んでいきます。

Webサイトを作る上で、HTML・CSSの仕様をすべて暗記する必要はありません。
忘れてしまったり知らない部分は、その時に調べて使えればOKです。

大切なのは、どのように組み立てればイメージしているWebサイトが作れるか、ということを考えられるようになることです。
つまり、様々なパターンのWebサイトを実際に作り、あの時作ったパターンを少し変えて作れそう、ということが考えられるようになることです。

### Webmail

作るのは次のようなデザインのメール一覧ページです。
左右に並んだ２カラムのレイアウトであり、サイドナビとメール一覧部分を含んだ内容となっています。

また、PCとモバイルで表示が切り替わるレスポンシブWebデザインです。

| PC | モバイル |
| --- | --- |
| ![](/images/website-practice/email-screen.png) | ![](/images/website-practice/email-screen-mobile.png) |

### Icons8

Icons8はアイコンなどの画像素材を配信しているサービスです。
数多くのアイコンがあり、無料で使い始められます。

- Icons8
  - [https://icons8.com/](https://icons8.com/)

メール一覧ページを作る上で、Icons8のアイコンを使っていきます。


## レイアウト

まずは、全体の大まかなレイアウトを作ります。

サイドナビ・メインコンテンツと大きく２つに分けられます。
サイドナビは横幅を`256px`に固定し、右側のメインコンテンツは`flex-grow: 1;`として余った領域いっぱいに広げます。

![](/images/website-practice/email-layout.png)

この時、縦幅に`100vh`を設定します。
`vh`という単位を使うことで、画面サイズに応じた値を設定できます。
例えば、`100vh`であれば画面の縦幅と同じ値になり、`50vh`であれば縦幅の半分と同じ値になります。
また、`vh`ではなく`vw`とすると画面の横幅に応じた値となります。

![](/images/website-practice/email-vw-vh.png)

HTML・CSSは次のようになります。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webmail</title>
    <style type="text/css">
        html {
          font-size: 16px;
        }
        body {
            margin: 0;
            color: gray;
        }
        a {
            color: gray;
            text-decoration: none;
        }
        #all {
            display: flex;
            flex-direction: row;
        }
        #all .left {
            width: 256px;
            height: 100vh;
        }
        #all .right {
            flex-grow: 1;
            height: 100vh;
            background-color: #f3f4f6;
        }
    </style>
</head>
<body>
    <div id="all">
        <div class="left">
          LEFT
        </div>
        <div class="right">
            <header>
              HEADER
            </header>
            <main>
              MAIN
            </main>
        </div>
    </div>
</body>
</html>
```


## サイドナビ

次に、サイドナビの部分を作ります。

![](/images/website-practice/email-sidenav.png)

タイトルと各種リンクを上下に並べて配置します。

また、リンク上にマウスカーソルを重ねた時、背景色が変わるように設定します。
要素の上にマウスカーソルが重なった時はCSSのセレクターに`:hover`を記述します。
例えば、`a`タグに設定する場合は`a:hover`となります。

![](/images/website-practice/email-hover.png)

HTML・CSSは次のようになります。

```css
nav {
    height: 100%;
    background-color: #10B981;
}
nav h5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin: 0px;
    padding: 0px 16px;
    height: 64px;
    font-size: 1rem;
    line-height: 1rem;
    color: white;
}
nav a {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 16px 16px;
    color: white;
}
nav a:hover {
    background-color: #047857;
}
```

```html
<nav>
    <h5>
        <img src="https://img.icons8.com/ios/24/ffffff/new-post.png"/>
        <span>Webmail</span>
    </h5>
    <a href="#">
        <img src="https://img.icons8.com/ios/24/ffffff/inbox.png"/>
        <span>全て</span>
    </a>
    <a href="#">
        <img src="https://img.icons8.com/ios/24/ffffff/star.png"/>
        <span>スター</span>
    </a>
    <a href="#">
        <img src="https://img.icons8.com/ios/24/ffffff/spam.png"/>
        <span>スパム</span>
    </a>
    <a href="#">
        <img src="https://img.icons8.com/ios/24/ffffff/trash--v1.png"/>
        <span>ゴミ箱</span>
    </a>
</nav>
```


## ヘッダー

次に、ヘッダーの部分を作ります。

![](/images/website-practice/email-header.png)

検索フォームとプロフィールアイコンをFlexboxを使い左右に並べて配置します。
この時、検索フォームは左寄せに、プロフィールアイコンは右寄せになるよう、`justify-content: space-between`とします。

![](/images/website-practice/email-header-flex.png)

HTML・CSSは次のようになります。

```css
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: white;
    box-shadow: 1px 1px 2px silver;
}
header .search {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 0px 16px;
}
header .search input {
    border-style: none;
    height: 24px;
}
header .user {
    padding: 16px;
}
header .user img {
    display: block;
    height: 32px;
    width: 32px;
    border-radius: 16px;
}
```

```html
<header>
    <div class="search">
        <img src="https://img.icons8.com/ios/24/808080/search.png"/>
        <input type="text" placeholder="検索">
    </div>
    <div class="user">
        <img src="https://img.icons8.com/ios/32/808080/user-male-circle.png"/>
    </div>
</header>
```


## メール一覧

次に、メール一覧の部分を作ります。

![](/images/website-practice/email-emails.png)

Flexboxを使い要素を上下左右に配置します。

２件のメールを未読、３件のメールを既読として扱います。
未読の場合はメールの件名を太字に設定します。

![](/images/website-practice/email-emails-flex.png)

HTML・CSSは次のようになります。

```css
#tabs {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 16px;
}
#tabs a {
    display: block;
    width: 128px;
    text-align: center;
    color: #047857;
    background-color: white;
    box-shadow: 1px 1px 2px silver;
    padding: 8px 0px;
}
#tabs a:hover {
    background-color: #ecfdf5;
}
#emails {
    background-color: white;
    margin: 16px;
    box-shadow: 1px 1px 2px silver;
}
#emails .item {
    display: flex;
    flex-direction: row;
}
#emails .item .subject {
    flex-grow: 1;
    padding: 8px 16px;
}
#emails .item .subject a {
    margin-left: 8px;
}
#emails .item .subject a:hover {
    color: #047857;
}
#emails .item .date {
    padding: 8px 16px;
}
#emails .read .subject {
    font-weight: normal;
}
#emails .unread .subject {
    font-weight: bold;
}
```

```html
<main>
    <div id="tabs">
        <a href="#">全て</a>
        <a href="#">未読</a>
    </div>
    <div id="emails">
        <div class="item unread">
            <div class="subject">
                <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                <a href="#">ABCショッピングからのお知らせ</a>
            </div>
            <div class="date">
                <span>2021年01月01日</span>
            </div>
        </div>
        <div class="item unread">
            <div class="subject">
                <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                <a href="#">注文を受け付けました</a>
            </div>
            <div class="date">
                <span>2021年01月01日</span>
            </div>
        </div>
        <div class="item read">
            <div class="subject">
                <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                <a href="#">お荷物お届けのお知らせ</a>
            </div>
            <div class="date">
                <span>2021年01月01日</span>
            </div>
        </div>
        <div class="item read">
            <div class="subject">
                <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                <a href="#">今月のご利用額</a>
            </div>
            <div class="date">
                <span>2021年01月01日</span>
            </div>
        </div>
        <div class="item read">
            <div class="subject">
                <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                <a href="#">キャンペーンのお知らせ</a>
            </div>
            <div class="date">
                <span>2021年01月01日</span>
            </div>
        </div>
    </div>
</main>
```

また、全て・未読ボタンをクリックすることによって一覧に表示される内容が切り替わるようにします。
表示を切り替えるためにはJavaScriptを使いHTMLを操作します。

全てをクリックすると全てのメールを表示し、未読ボタンをクリックすると未読メールのみ表示することとします。
そのため、次の２つの処理が必要になります。

- 未読ボタンがタップされたら、既読メールを非表示にする
- 全てボタンがタップされたら、既読メールを表示する

既読メールの表示・非表示を切り替えるため、非表示にする時は`display: none;`を設定します。
具体的には`.hidden { display: none; }`といったCSSを記述し、JavaScriptを使い`hidden`クラスの付け外しを行います。

![](/images/website-practice/email-emails-js.png)

JavaScript・CSSは次のようになります。

```css
#emails .hidden {
    display: none;
}
```

```js
let tabs = document.querySelectorAll('#tabs a');
let allTab = tabs.item(0);
let unreadTab = tabs.item(1);

allTab.addEventListener('click', function () {
    let emailItems = document.querySelectorAll('#emails .read');
    for (let item of emailItems) {
        item.className = 'item read';
    }
});
unreadTab.addEventListener('click', function () {
    let emailItems = document.querySelectorAll('#emails .read');
    for (let item of emailItems) {
        item.className = 'item read hidden';
    }
});
```

## レスポンシブ対応

最後に、PCだけでなくモバイル表示もできるよう、レスポンシブWebデザインに対応させます。

| PC | モバイル |
| --- | --- |
| ![](/images/website-practice/email-screen.png) | ![](/images/website-practice/email-screen-mobile.png) |

画面サイズに応じてCSSを切り替えるには、`@media`を使います。
ここでは、`640px`未満であればモバイル用のCSSに切り替えます。

モバイル表示では左側にあったナビゲーションを上側に表示し、メールの件名・日付は左右から上下へと表示を切り替えます。
そのため、`flex-direction: column;`と設定されていた箇所を、`flex-direction: row;`へと切り替えます。

![](/images/website-practice/email-responsive.png)

CSSは次のようになります。

```css
@media (max-width: 640px) {
    #all {
        flex-direction: column;
    }
    #all .left {
        height: auto;
        width: 100%;
    }
    nav {
        display: flex;
        flex-direction: row;;
    }
    nav a {
        flex-direction: column;
        justify-content: center;
    }
    nav a span {
        display: none;
    }
    main .emails .item {
        flex-direction: column;
    }
    main .emails .item .date {
        padding-top: 0px;
        font-size: 0.7rem;
        text-align: right;
    }
}
```


## 全体

お疲れさまでした、これでメール一覧ページが完成です。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webmail</title>
    <style type="text/css">
        html {
            font-size: 16px;
        }
        body {
            margin: 0;
            color: gray;
        }
        a {
            color: gray;
            text-decoration: none;
        }
        #all {
            display: flex;
            flex-direction: row;
        }
        #all .left {
            width: 256px;
            height: 100vh;
        }
        #all .right {
            flex-grow: 1;
            height: 100vh;
            background-color: #f3f4f6;
        }

        nav {
            height: 100%;
            background-color: #10B981;
        }
        nav h5 {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            margin: 0px;
            padding: 0px 16px;
            height: 64px;
            font-size: 1rem;
            line-height: 1rem;
            color: white;
        }
        nav a {
            display: flex;
            flex-direction: row;
            gap: 8px;
            padding: 16px 16px;
            color: white;
        }
        nav a:hover {
            background-color: #047857;
        }

        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            background-color: white;
            box-shadow: 1px 1px 2px silver;
        }
        header .search {
            display: flex;
            flex-direction: row;
            gap: 8px;
            padding: 0px 16px;
        }
        header .search input {
            border-style: none;
            height: 24px;
        }
        header .user {
            padding: 16px;
        }
        header .user img {
            display: block;
            height: 32px;
            width: 32px;
            border-radius: 16px;
        }

        #tabs {
            display: flex;
            flex-direction: row;
            gap: 16px;
            margin: 16px;
        }
        #tabs a {
            display: block;
            width: 128px;
            text-align: center;
            color: #047857;
            background-color: white;
            box-shadow: 1px 1px 2px silver;
            padding: 8px 0px;
        }
        #tabs a:hover {
            background-color: #ecfdf5;
        }
        #emails {
            background-color: white;
            margin: 16px;
            box-shadow: 1px 1px 2px silver;
        }
        #emails .item {
            display: flex;
            flex-direction: row;
        }
        #emails .item .subject {
            flex-grow: 1;
            padding: 8px 16px;
        }
        #emails .item .subject a {
            margin-left: 8px;
        }
        #emails .item .subject a:hover {
            color: #047857;
        }
        #emails .item .date {
            padding: 8px 16px;
        }
        #emails .read .subject {
            font-weight: normal;
        }
        #emails .unread .subject {
            font-weight: bold;
        }
        #emails .hidden {
            display: none;
        }

        @media (max-width: 640px) {
            #all {
                flex-direction: column;
            }
            #all .left {
                height: auto;
                width: 100%;
            }
            nav {
                display: flex;
                flex-direction: row;;
            }
            nav a {
                flex-direction: column;
                justify-content: center;
            }
            nav a span {
                display: none;
            }
            main .emails .item {
                flex-direction: column;
            }
            main .emails .item .date {
                padding-top: 0px;
                font-size: 0.7rem;
                text-align: right;
            }
        }
    </style>
</head>
<body>
    <div id="all">
        <div class="left">
            <nav>
                <h5>
                    <img src="https://img.icons8.com/ios/24/ffffff/new-post.png"/>
                    <span>Webmail</span>
                </h5>
                <a href="#">
                    <img src="https://img.icons8.com/ios/24/ffffff/inbox.png"/>
                    <span>全て</span>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/ios/24/ffffff/star.png"/>
                    <span>スター</span>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/ios/24/ffffff/spam.png"/>
                    <span>スパム</span>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/ios/24/ffffff/trash--v1.png"/>
                    <span>ゴミ箱</span>
                </a>
            </nav>
        </div>
        <div class="right">
            <header>
                <div class="search">
                    <img src="https://img.icons8.com/ios/24/808080/search.png"/>
                    <input type="text" placeholder="検索">
                </div>
                <div class="user">
                    <img src="https://img.icons8.com/ios/32/808080/user-male-circle.png"/>
                </div>
            </header>
            <main>
                <div id="tabs">
                    <a href="#">全て</a>
                    <a href="#">未読</a>
                </div>
                <div id="emails">
                    <div class="item unread">
                        <div class="subject">
                            <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                            <a href="#">ABCショッピングからのお知らせ</a>
                        </div>
                        <div class="date">
                            <span>2021年01月01日</span>
                        </div>
                    </div>
                    <div class="item unread">
                        <div class="subject">
                            <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                            <a href="#">注文を受け付けました</a>
                        </div>
                        <div class="date">
                            <span>2021年01月01日</span>
                        </div>
                    </div>
                    <div class="item read">
                        <div class="subject">
                            <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                            <a href="#">お荷物お届けのお知らせ</a>
                        </div>
                        <div class="date">
                            <span>2021年01月01日</span>
                        </div>
                    </div>
                    <div class="item read">
                        <div class="subject">
                            <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                            <a href="#">今月のご利用額</a>
                        </div>
                        <div class="date">
                            <span>2021年01月01日</span>
                        </div>
                    </div>
                    <div class="item read">
                        <div class="subject">
                            <img src="https://img.icons8.com/ios/16/808080/star.png"/>
                            <a href="#">キャンペーンのお知らせ</a>
                        </div>
                        <div class="date">
                            <span>2021年01月01日</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script type="text/javascript">
        let tabs = document.querySelectorAll('#tabs a');
        let allTab = tabs.item(0);
        let unreadTab = tabs.item(1);

        allTab.addEventListener('click', function () {
            let emailItems = document.querySelectorAll('#emails .read');
            for (let item of emailItems) {
                item.className = 'item read';
            }
        });
        unreadTab.addEventListener('click', function () {
            let emailItems = document.querySelectorAll('#emails .read');
            for (let item of emailItems) {
                item.className = 'item read hidden';
            }
        });
    </script>
</body>
</html>
```


## Netlifyで公開する

Netlifyを使い、Webサイトとして公開してみます。

[「Webサイトを公開する」](/website/site-hosting)で紹介した方法と同じく、`public`フォルダ内に、`index.html`を作成します。
そして、Netlifyの管理画面からフォルダをアップロードします。

これで、Webサイトを公開できました。
