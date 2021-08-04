---
title: HTMLを動かす
description: JavaScriptを使ってHTMLを動かす方法を学ぼう！
slug: dynamic-2
---

## HTMLの要素を指定する

JavaScriptを使って処理する主な目的はHTMLを動かすことにあります。
HTMLで表示した文章を変更したり、デザインを変更したりすることで動きのあるWebサイトを作れます。

この時、どの要素を動かしたいかをプログラムで指定する必要があります。
例えば、`h1`タグを指定する場合は次のようになります。

```js
let element = document.querySelector('h1');
```

また、`p`タグのようにHTML内に複数存在するような要素を指定する場合は、`querySelector()`ではなく`querySelectorAll()`を使います。
この時、指定された要素は複数存在するため、それぞれの要素を取得する場合は`.item()`を使います。
例えば、最初の要素を取得するには`.item(0)`とし、２番目の要素を取得するには`.item(1)`とします。
数値が1ではなく0から始まる点に注意しましょう。

```js
let elements = document.querySelectorAll('p');
let element0 = elements.item(0);
let element1 = elements.item(1);
```

具体的な使い方としては次のようになります。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <h1>見出し</h1>
    <p>本文１</p>
    <p>本文２</p>
    <script type="text/javascript">
        let h1 = document.querySelector('h1');
        h1.textContent = 'HELLO WORLD';

        let pList = document.querySelectorAll('p');
        pList.item(0).textContent = 'P0';
        pList.item(1).textContent = 'P1';
    </script>
</body>
</html>
```

この他にも、IDやクラスを指定することも出来るので、使いながら覚えていきましょう。

| 指定方法 | 内容 | 例 |
| :---: | --- | --- |
| タグを指定 | タグ名を指定します。 | `document.querySelector('h1')` |
| IDを指定 | `#`に続けてID名を指定します。 | `document.querySelector('#myid')` |
| クラスを指定 | `.`に続けてクラス名を指定します。 | `document.querySelector('.myclass')` |
| 複数対象を指定 | `,`で区切り、タグ・ID・クラスを複数指定します。 | `document.querySelectorAll('h1, #myid, .myclass')` |
| 詳細な要素を指定 | ”`p`タグ内の`a`タグ”のように、スペース区切りでタグ・ID・クラスを詳細に指定します。 | `document.querySelector('p a')` |

![](/images/website/js-selector.png)

## HTMLの要素を変更する

HTMLで表示した文章を変更したり、デザインを変更したりするため、指定した要素に変更を加えていきます。

### 文章を変更する

表示した文章を変更するには、`.textContent = 'HELLO'`とします。
例えば、`h1`タグの文章を"HELLO WORLD"に変更する場合は次のようになります。

```js
document.querySelector('h1').textContent = 'HELLO WORLD';
```

また、`let text = document.querySelector('h1').textContent;`とすることで、表示されている文章を値として取得できます。
つまり、現在表示されている文章を元に、変更する文章を組み立てることもできるのです。

```js
let text = document.querySelector('h1').textContent;
if (text === 'HELLO') {
    document.querySelector('h1').textContent = text + ' WORLD';
}
```

### クラス・IDを変更する

デザインはCSSを使って記述され、IDやクラスで要素を指定できます。
なので、要素のIDやクラスを変更することで、デザインを変更できることになります。

要素のID・クラスを変更するには、`.id = 'newid'`・`.className = 'newclass'`とします。
例えば、`h1`タグのID・クラスを"newid"・"newclass"に変更する場合は次のようになります。

```js
document.querySelector('h1').id = 'newid';
document.querySelector('h1').className = 'newclass';
```

また、`let id = document.querySelector('h1').id;`とすることで、設定されている要素のID・クラスを値として取得できます。
つまり、現在設定されているID・クラスを元に、変更するID・クラスを組み立てることもできるのです。

```js
let id = document.querySelector('h1').id;
if (id === 'myid') {
    document.querySelector('h1').id = 'newid';
}

let className = document.querySelector('h1').className;
if (className === 'myclass') {
    document.querySelector('h1').className = 'newclass';
}
```

![](/images/website/js-element-property.png)

### 要素を追加する

JavaScriptを使ってHTMLの要素を追加したりできます。

例えば、次のようなHTMLがあった場合に、`<p>本文１</p>`・`<p>本文２</p>`と続いて、`<p>本文３</p>`を追加したいとします。
この時、`p`タグは、`body`タグの中にあり、`body`タグに`p`タグを追加すると良さそうです。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <p>本文１</p>
    <p>本文２</p>
</body>
</html>
```

つまり、`p`タグを新しく作り`body`タグに追加する、といった処理を行う場合は次のようになります。
`document.createElement('p')`で要素を作り、`.appendChild()`で要素を追加しています。

```js
let p3 = document.createElement('p');
p3.textContent = '本文３';

let body = document.querySelector('body');
body.appendChild(p3);
```

また、`<p>本文１</p>`・`<p>本文２</p>`の前に`<p>本文０</p>`を追加したりできます。
この場合は、`.appendChild()`ではなく、`.insertBefore()`を使います。
`.insertBefore()`は引数を２つ持っていて、１つ目の引数に追加する要素を指定し、２つ目の引数に指定した要素の直前に追加されます。

```js
let p0 = document.createElement('p');
p0.textContent = '本文０';

let pList = document.querySelectorAll('p');
let p1 = pList.item(0);

let body = document.querySelector('body');
body.insertBefore(p0, p1);
```

![](/images/website/js-element-create.png)

### 要素を削除する

もちろん、要素を追加するだけでなく削除したりできます。
例えば、`h2`タグを削除する場合は次のようになります。

```js
let h2 = document.querySelector('h2');
h2.remove();
```

## イベントが発生した時に処理する

HTMLの要素を変更するのは、Webサイトを見ている人が何かしら行動した時に行う場合がほとんどです。
そのような、ボタンがクリックされた時・フォームに文字が入力された時、といったものを「イベント」と呼びます。

JavaScriptでは、Webサイトを見ている人が何かしら行動した時、つまりイベントが発生した時、に処理を行えるようになっています。
いくつかのイベント発生時に処理する方法を見ていきましょう。

### クリックされた時に処理する

要素がクリックされた時に処理するには、`.addEventListener('click')`を使います。
例えば、ボタンがクリックされた時の処理は次のようになります。

```html
<button>クリックされてない</button>
```

```js
let button = document.querySelector('button');
button.addEventListener('click', function () {
    document.querySelector('button').textContent = 'クリックされた';
});
```

`.addEventListener()`を使うと、イベント発生時に処理できます。
１つ目の引数にイベント名を指定し、２つ目の引数に実行したい関数を指定します。

２つ目の引数に指定するのは関数なので、次のように関数を別なところに記述してもOKです。

```js
function onClickButton() {
    document.querySelector('button').textContent = 'クリックされた';
}

let button = document.querySelector('button');
button.addEventListener('click', onClickButton);
```


### 入力された時に処理する

`input`タグに文字が入力された時に処理するには、`.addEventListener('input')`を使います。
例えば、入力された時の処理は次のようになります。

```html
<input type="text" />
<p>未入力</p>
```

```js
let input = document.querySelector('input');
input.addEventListener('input', function (e) {
    let text = e.target.value;
    document.querySelector('p').textContent = text + ' が入力されました';
});
```

基本的な使い方はクリックされた時と同じです。
この時、指定した関数には引数が設定され、その引数から入力された文字列を`e.target.value`で取得できます。


## HTMLを動かしてみる

それでは、ここまで学んだ知識を使ってHTMLを動かしてみましょう。

### JavaScriptを使ったクイズ

次のような簡単なクイズを作ってみます。
内容としては、質問に対する解答を入力し、解答結果に応じて”正解”または”はずれ”を表示します。
また、解答した後はボタンを削除します。

順番に処理を組み立てていきます。

![](/images/website/js-multiply.png)

まず、フォームに入力された文字列は、`.addEventListener('input')`で取得できます。
後で使うため、取得した文字列を変数`result`へと保存しておきます。

```js
let result = -1;
let input = document.querySelector('input');
input.addEventListener('input', function (e) {
    result = e.target.value;
});
```

次に、ボタンをクリックしたら”正解”または”はずれ”を表示する処理を追加します。
クリックされた時の処理は`.addEventListener('click')`で記述できました。
入力された文字列が"5"であれば”正解”を表示し、それ以外であれば”はずれ”を表示します。

```js
let button = document.querySelector('button');
button.addEventListener('click', function () {
    let body = document.querySelector('body');

    if (result === '5') {
        // ”正解”を表示する
    } else {
        // ”はずれ”を表示する
    }
});
```

要素の追加は`.appencChild()`で記述できました。
文章・クラスを設定した上で要素を追加します。

```js
let button = document.querySelector('button');
button.addEventListener('click', function () {
    let body = document.querySelector('body');

    if (result === '5') {
        let correct = document.createElement('p');
        correct.textContent = '正解';
        correct.className = 'correct';
        body.appendChild(correct);
    } else {
        let incorrect = document.createElement('p');
        incorrect.textContent = 'はずれ';
        incorrect.className = 'incorrect';
        body.appendChild(incorrect);
    }
});
```

最後に、解答した後はボタンを削除します。

```js
button.remove();
```

これらをまとめ、１つのHTMLファイルとすると次のようになります。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <style type="text/css">
        .correct {
            color: green;
        }
        .incorrect {
            color: red;
        }
    </style>
</head>
<body>
    <p>２＋３は？</p>
    <p>答え：<input type="text"></p>
    <button>解答</button>
 
    <script type="text/javascript">
        let result = -1;
        let input = document.querySelector('input');
        let button = document.querySelector('button');

        input.addEventListener('input', function (e) {
            result = e.target.value;
        });
        button.addEventListener('click', function () {
            let body = document.querySelector('body');

            if (result === '5') {
                let correct = document.createElement('p');
                correct.textContent = '正解';
                correct.className = 'correct';
                body.appendChild(correct);
            } else {
                let incorrect = document.createElement('p');
                incorrect.textContent = 'はずれ';
                incorrect.className = 'incorrect';
                body.appendChild(incorrect);
            }

            button.remove();
        });
    </script>
</body>
</html>
```

### Netlifyで公開する

Netlifyを使い、Webサイトとして公開してみます。

「[Webサイトとは](/website/web)」で紹介した方法と同じく、publicフォルダ内に、index.htmlを作成します。 
そして、Netlifyの管理画面からフォルダをアップロードします。

```
public
  ┗ index.html
```

![](/images/website/netlify-05.png)

![](/images/website/js-multiply-website.png)

これで、Webサイトを公開できました。
