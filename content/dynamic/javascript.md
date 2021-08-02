---
title: JavaScriptとは
description: JavaScriptの仕組みや基礎知識を学ぼう！
slug: dynamic-1
---

## 動きのあるWebサイト入門

「動きのあるWebサイト入門」では、JavaScriptを使ってWebサイトに動きをつけるために必要な基礎知識を学んでいきます。

安心してください、いきなり複雑な動きを作るのは大変な作業ですが、簡単な動きなら作るのは難しくありません。
順番に記事を読み進めていけば、全くの初心者でもJavaScriptを使ってWebサイトに動きをつけられるでしょう。

それでは、はじめていきましょう！


## JavaScriptとは

### JavaScript

「JavaScript」とは、HTMLやCSSを動かすことが出来るプログラミング言語です。
例えば、JavaScriptを使うことによって、HTMLの要素を追加したり、CSSの値を変更したりできます。

さらに、JavaScriptの経験を積めば、Webアプリケーション・ゲーム・アニメーションなど様々なものが作れるようになります。

### JavaScriptを使ってみる

まず、簡単なJavaScriptの使用例を見てみましょう。

次のようなHTMLを記述したときに、”見出し”ではなく”HELLO WORLD”が表示されます。
これは、JavaScriptを使い、h1タグの中身を”HELLO WORLD”へと変更しています。

それでは、順番に内容を確認していきましょう。

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
    <script type="text/javascript">
        const h1 = document.querySelector('h1');
        h1.textContent = 'HELLO WORLD';
    </script>
</body>
</html>
```

### `<script></script>`

scriptタグは主にJavaScriptを記述するためのタグです。
styleタグ内にCSSを記述するのと同じように、scriptタグ内にJavaScriptを記述できます。

```html
<script type="text/javascript">
    ...
</script>
```

### プログラム

JavaScriptで記述された「プログラム」です。
scriptタグ内に記述することで、Webブラウザが内容を読み取り実行してくれます。
このプログラムでは、h1タグを選択し、タグ内のテキストを"HELLO WORLD"へと変更しています。

```js
const h1 = document.querySelector('h1');
h1.textContent = 'HELLO WORLD';
```

このように、JavaScriptでHTMLやCSSを操作し、動きのあるWebサイトを作ることができるのです。


## JavaScriptの基本機能

JavaScriptでプログラムを書くために必要な基本機能を学んでいきます。
プログラムを記述する上で必要となる知識なので、しっかりと基本をマスターしておきましょう。
これらの基本をマスターすれば、ほとんどのプログラムは記述できるようになります！

### 変数

「変数」は、値を入れるための箱です。
`const name`・`let age`のように、`const`または`let`の後に任意の名前を指定して使います。
そして、変数に入れる値を続いて指定します。

```js
const name = '山田太郎';
let age = 20;
```

`let`を使った変数は後から値を変更できます。
逆に`const`を使った変数は後から値を変更できません。
なので、誤って値を変更してしまうミスを防ぎたい場合は`const`を使うと便利です。
```js
let age = 20;
age = 30;
```

変数に入れられる値には様々な種類があります。
文字列や数値だけでなく、配列やオブジェクトなど複雑な形式も扱えます。

| 種類 | 内容 | 例 |
| :---: | --- | --- |
| String | 文字列。'HELLO'のように''で囲む。 | let example = 'HELLO'; |
| Number | 数値。0,1のような整数や、1.2,5.0のような少数が使える。 | let example = 100.0; |
| Boolean | 論理値。trueとfalseが使える。 | let example = true; |
| Array | 配列。複数の値を１つの値として扱える。 | let example = [1, 'HELLO']; |
| Object | オブジェクト。複雑な形式を値として扱える。 | let example = { message: 'HELLO' }; |

### コメント

「コメント」は、プログラムとして処理しないメモを入れられる仕組みです。
`/*  */`で囲ったり、`//`で始まる行はコメントとして扱われます。

```js
/* ここがコメント */

// この行がコメント
```

### 演算子

変数に入れた値は、文字列であれば２つの値を結合したり、数値であれば足したり、引いたりできます。
また、２つの値が同じであるかといった比較も行えます。

例えば、２つの文字列を結合するときは次のようになります。
```js
let hello = 'HELLO ';
let world = 'WORLD';
let helloWorld = hello + world; // 'HELL OWORLD'
```

また、数値を引くときは次のようになります。
```js
let one = 1;
let three = 3;
let two = three - one; // 2
```

このような、２つの値に基づいて新しい値を作る`+`や`-`のことを「演算子」と呼びます。

| 演算子 | 内容 | 例 |
| :---: | --- | --- |
| `+` | 文字列を結合したり、数値を足したりする。 | `'HELLO ' + 'WORLD';` |
| | | `1 + 2;` |
| `-` | 数値の引き算を行う。 | `3 - 2;` |
| `*` | 数値の掛け算を行う。 | `2 * 3;` |
| `/` | 数値の割り算を行う。 | `4 / 2;` |
| `=` | 変数に値を入れる。 | `let example = 'HELLO';` |
| `===` | ２つの値が同じか比較する。 | `'HELLO' === 'WORLD'; // false` |
| | | `3 === 3; // true` |
| `!` | trueとfalseを入れ替える。 | `!('HELLO' === 'WORLD'); // false` |
| | | `!(3 === 3); // false` |
| `!==` | ２つの値が異なるか比較する。 | `'HELLO' !== 'WORLD'; // true` |
| | | `3 !== 3; // false` |

### 条件文

TBD

### 関数

TBD

### イベント

TBD


