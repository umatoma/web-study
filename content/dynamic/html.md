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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <h1>見出し</h1>
    <p>本文１</p>
    <p>本文２</p>
    <script type="text/javascript">
        const h1 = document.querySelector('h1');
        h1.textContent = 'HELLO WORLD';

        const pList = document.querySelectorAll('p');
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
| 複数対象を指定 | `,`で区切り、タグ・ID・クラスを複数指定します。 | `document.querySelector('h1, #myid, .myclass')` |
| 詳細な要素を指定 | ”`p`タグ内の`a`タグ”のように、スペース区切りでタグ・ID・クラスを詳細に指定します。 | `document.querySelector('p a')` |


## HTMLの要素を変更する

### 文章を変更する

TBD

### クラス・IDを変更する

TBD

### 要素を追加・削除する

TBD


## クリックされた時に処理する

TBD
