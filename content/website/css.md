---
title: CSSとは
description: CSSの基礎知識を学ぼう！
slug: website-3
---

## CSS

HTMLだけではWebサイトの細かいデザインを記述できません。
そこで、「CSS」と呼ばれる異なる形式の情報を加えることで、細かいデザインを記述できます。

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

![](/images/website/css-css.png)


## CSSの書き方

CSSを使うことで、HTMLで記述された各要素のフォント・色・サイズ・枠線といった装飾を設定できます。
そして、「セレクター・プロパティ・値」を記述することで、任意の要素に対して装飾を設定します。

### セレクター・プロパティ・値

どの要素に対して装飾するか、を意味するのが「セレクター」です。
例えば、`<h1>`に対して装飾する場合は、以下のように記述します。

```css
h1 {

}
```

セレクターで指定した要素に対して、どの様に装飾するか、を意味するのが「プロパティ・値」です。
例えば、`<h1>`に対して、文字サイズ・文字色を設定する場合は、以下のように記述します。

```css
h1 {
    font-size: 56px;
    color: red;
}
```

![](/images/website/css-format.png)

### `<style>`

CSSは`<style>`タグの中で記述できます。
`<style>`タグ自体は画面に表示される要素ではないため、`<head>`タグ内に設置して使います。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    ...
    <style type="text/css">
        h1 {
            font-size: 56px;
            color: red;
        }
    </style>
</head>
<body>
    ...
</body>
</html>
```


## CSSを使ってHTMLを装飾してみる

それでは実際に、１つ前のページで作成したWebサイトを装飾しながら、CSSの使い方を学んでいきます。

### 文字

文字のサイズ・色・種類・太さ・位置を指定する方法を確認していきます。

![](/images/website/css-font.png)

#### サイズ

文字のサイズを指定するには、`font-size`プロパティを使います。
例えば、サイズを56ピクセルにしたい場合は、`font-size: 56px;`とします。

```css
h1 {
    font-size: 56px;
}
```

#### 色

文字の色を指定するには、`color`プロパティを使います。
例えば、色を赤にしたい場合は、`color: red;`とします。
値は`red`・`blue`のように名前を指定する方法や、`rgb(255, 0, 0)`・`#0000ff`のようにカラーコードで指定する方法があります。

```css
h1 {
    color: red;
}
```

#### 種類

文字の種類を指定するには、`font-family`プロパティを使います。
値にはフォント名を複数指定でき、左から順番に使用可能なフォントがあった場合に適用されます。

```css
h1 {
    font-family: Arial, Helvetica, sans-serif;
}
```

#### 太さ

文字の種類を指定するには、`font-weight`プロパティを使います。
例えば、太さを太字にしたい場合は、`font-weight: bold;`とします。
値は`bold`・`normal`のようにキーワードを指定する方法や、`700`・`400`のように数値で指定する方法があります。

```css
h1 {
    font-weight: normal;
}
```

#### 位置

文字の位置を指定するには、`text-align`プロパティを使います。
例えば、`<p>`タグ内の文字を中央寄せにしたい場合は、`text-align: center;`とします。
左寄せにする場合は`left`、右寄せにする場合は`right`を値に設定します。

```css
p {
    text-align: center;
}
```

#### 装飾してみる

１つ前のページで作成したWebサイトに対して、文字の装飾を加えてみます。
ページ全体の文字種類を指定し、見出しのサイズ・太さを指定します。

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
h1 {
    font-size: 56px;
    font-weight: normal;
}
h2 {
    font-size: 32px;
    font-weight: normal;
}
```


### 背景

背景の色・画像を指定する方法を確認していきます。

![](/images/website/css-background.png)

#### 色

要素の背景色を指定するには、`background-color`プロパティを使います。
例えば、色を赤にしたい場合は、`background-color: red;`とします。
値は`red`・`blue`のように名前を指定する方法や、`rgb(255, 0, 0)`・`#0000ff`のようにカラーコードで指定する方法があります。

```css
body {
    background-color: red;
}
```

#### 画像

要素の背景画像を指定するには、`background-image`プロパティを使います。
例えば、`https://placehold.jp/150x150.png`にある画像を背景にしたい場合は、`background-image: url("https://placehold.jp/150x150.png");`とします。

また、`background-size`プロパティを使うことで、背景画像のサイズを指定できます。
例えば、要素全体を覆うように表示したい場合は`background-size: cover;`、要素内に画像を収めるよう表示したい場合は`background-size: contain;`とします。

そして、`background-repeat`プロパティを使うことで、背景画像の繰り返しを指定できます。
例えば、画像を繰り返す場合は`background-repeat: repeat;`、画像を繰り返さない場合は`background-repeat: no-repeat;`とします。

```css
body {
    background-image: url("https://placehold.jp/150x150.png");
    background-size: contain;
    background-repeat: no-repeat;
}
```

#### 装飾してみる

１つ前のページで作成したWebサイトに対して、背景の装飾を加えてみます。
ページ全体の背景色を指定します。

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffefd5;
}
```


### 横幅・縦幅

要素の横幅・縦幅を指定する方法を確認していきます。

![](/images/website/css-size.png)

#### 横幅

要素の横幅を指定するには、`width`プロパティを使います。
例えば、横幅を100ピクセルにしたい場合は、`width: 100px;`とします。
値は`100px`・`200px`のように絶対値を指定する方法や、`50%`・`100%`のように相対値で指定する方法があります。

```css
img {
    width: 200px;
}
```

#### 縦幅

要素の横幅を指定するには、`height`プロパティを使います。
例えば、縦幅を100ピクセルにしたい場合は、`height: 100px;`とします。
値は`100px`・`200px`のように絶対値を指定する方法や、`50%`・`100%`のように相対値で指定する方法があります。

```css
img {
    height: 200px;
}
```

#### 装飾してみる

１つ前のページで作成したWebサイトに対して、横幅・縦幅の装飾を加えてみます。
画像の横幅と縦幅を指定します。

```css
img {
    width: 600px;
    height: 400px;
}
```


### 余白

要素の余白を指定する方法を確認していきます。

![](/images/website/css-space.png)

#### 内側の余白

要素の内側の余白を指定するには、`padding`プロパティを使います。
例えば、内側の余白を50ピクセルにしたい場合は、`padding: 50px;`とします。
値は`50px`のように上下左右に同じ余白を指定する方法や、`50px 0px 50px 0px`のように上下左右に異なる余白を指定する方法があります。

```css
main {
    padding: 50px;
}
```

#### 外側の余白

要素の外側の余白を指定するには、`margin`プロパティを使います。
例えば、外側の余白を50ピクセルにしたい場合は、`margin: 50px;`とします。
値は`50px`のように上下左右に同じ余白を指定する方法や、`50px 0px 50px 0px`のように上下左右に異なる余白を指定する方法があります。

```css
main {
    margin: 50px;
}
```

#### 装飾してみる

１つ前のページで作成したWebサイトに対して、余白の装飾を加えてみます。
ページ全体の内側の余白とフォームの内側の余白を指定します。

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffefd5;
    padding: 32px;
}
form {
    padding: 16px;
}
```


### 枠線

要素の枠線を指定する方法を確認していきます。

![](/images/website/css-border.png)

#### 種類

枠線の種類を指定するには、`border-style`プロパティを使います。
例えば、枠線を実線にしたい場合は、`border-style: solid;`とします。
また、点線にしたい場合は`border-style: dotted;`、２本線にしたい場合は`border-style: double;`とします。

```css
main {
    border-style: solid;
}
```

#### 太さ

枠線の太さを指定するには、`border-width`プロパティを使います。
例えば、太さを2ピクセルにしたい場合は、`border-width: 2px;`とします。

```css
main {
    border-width: 2px;
}
```

#### 色

枠線の色を指定するには、`border-color`プロパティを使います。
例えば、色を赤にしたい場合は、`border-color: red;`とします。
値は`red`・`blue`のように名前を指定する方法や、`rgb(255, 0, 0)`・`#0000ff`のようにカラーコードで指定する方法があります。

```css
main {
    border-color: red;
}
```

#### 装飾してみる

１つ前のページで作成したWebサイトに対して、枠線の装飾を加えてみます。
フォームの枠線を指定します。

```css
form {
    padding: 16px;
    border-style: solid;
    border-width: 1px;
    border-color: gray;
}
```


### Netlifyで公開する

CSSでWebサイトを装飾しました。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #ffefd5;
            padding: 32px;
        }
        h1 {
            font-size: 56px;
            font-weight: normal;
        }
        h2 {
            font-size: 32px;
            font-weight: normal;
        }
        img {
            width: 600px;
            height: 400px;
        }
        form {
            padding: 16px;
            border-style: solid;
            border-width: 1px;
            border-color: gray;
        }
    </style>
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

「[Webサイトとは](/website/web)」で紹介した方法と同じく、`public`フォルダ内に、`index.html`を作成します。
そして、Netlifyの管理画面からフォルダをアップロードします。

![](/images/website/css-create-website.png)

これで、Webサイトを公開できました。


## クラスとID

ここまで紹介した方法では、セレクターでタグを指定しています。なので、「同じタグだけど要素に応じで異なる装飾をする」、といったケースには対応できません。そこで、タグよりも詳細に装飾する要素を指定できる仕組みが、「クラスとID」です。

![](/images/website/css-class-id.png)

### クラスとIDを設定する

クラスとIDは、HTMLタグに記述できます。例えば、`title`というクラスをタグに設定する場合は`<h1 class="title"></h1>`とし、`main-title`というIDをタグに設定する場合は`<h1 id="main-title"></h1>`とします。

この時、HTMLの中で「同じIDを複数使うことはできない」ので注意が必要です。例えば、`<h1 id="main-title"></h1>`と`<h2 id="main-title"></h2>`を同時に設定できません。

### クラスとIDを指定して装飾する

そして、CSSのセレクターでクラス・IDを使うことができます。例えば、`<h1 class="title"></h1>`のようなクラスが設定されている要素に装飾する場合は`.title {  }`とします。また、`<h1 id="main-title"></h1>`のようなIDが設定されている要素の装飾する場合は`#main-title {  }`とします。

このように、セレクターでクラスを指定する場合はクラス名の前に「.」を付け、IDを指定する場合はID名の前に「#」を付けます。

実際に先程作成したWebサイトに、クラスとIDを使った指定を加えてみます。
フォーム内の各タイトルに対して`input-title`のクラスを設定し、Twitterのリンクに対して`twitter`のIDを設定します。そして、CSSのセレクターでクラス・IDを指定し装飾します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="charset" content="UTF-8" />
    <meta name="description" content="Webサイトの説明" />
    <title>タイトル</title>
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #ffefd5;
            padding: 32px;
        }
        h1 {
            font-size: 56px;
            font-weight: normal;
        }
        h2 {
            font-size: 32px;
            font-weight: normal;
        }
        img {
            width: 600px;
            height: 400px;
        }
        form {
            padding: 16px;
            border-style: solid;
            border-width: 1px;
            border-color: gray;
        }
        .input-title {
            font-size: 24px;
            font-weight: normal;
        }
        #twitter {
            color: skyblue;
        }
    </style>
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
            <h6 class="input-title">メールアドレス</h6>
            <input type="email">
    
            <h6 class="input-title">内容</h6>
            <input type="text">
    
            <h6 class="input-title">送信</h6>
            <input type="submit">
        </form>

        <p>
            <a id="twitter" href="https://twitter.com/USER_NAME">Twitter</a>
        </p>
    </footer>
</body>
</html>
```

![](/images/website/css-class-id-html.png)
