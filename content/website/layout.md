---
title: レイアウト
description: Flexboxを使ったレイアウトの基礎知識を学ぼう！
prev: /website/css
---

## レイアウト

多くのWebサイトでは、表示するコンテンツを見やすくするため、レイアウトを整えています。
例えば、２カラム型のレイアウトだったり、タイル型のレイアウトだったりと、要素を縦に並べたり横に並べたりしています。

レイアウトを整える方法は様々ありますが、ここではFlexboxと呼ばれる仕組みを使いレイアウトを整えていきます。
それでは、Flexboxの基本的な使い方から順番に確認していきましょう。

![](/images/website/flex-layout.png)


## Flexbox

Flexboxは縦・横に要素を並べられるレイアウト方法です。
Flexboxを使うことにより、縦・横に並べるだけでなく、並べた要素の中央寄せ・上寄せなど細かな位置も調整できます。

### 基本的な使い方

Flexboxの基本的な使い方を確認していきます。
Flexboxを使う上で必要となる要素が「Flexコンテナ」と「Flexアイテム」です。
Flexコンテナの中にFlexアイテムを複数並べてレイアウトします。

```html
<div class="flex-container">
    <div class="flex-item">１</div>
    <div class="flex-item">２</div>
    <div class="flex-item">３</div>
    <div class="flex-item">４</div>
    <div class="flex-item">５</div>
</div>
```

まずは、Flexコンテナを設定してみます。
Flexコンテナとして扱いたいHTMLタグに対して、次のようなCSSを設定します。

```css
.flex-container {
    display: flex;
}
```

また、Flexコンテナ内に並んでいる要素は自動的にFlexアイテムとして扱われます。
そのため、明示的にCSSを設定する必要はありません。

そして、FlexコンテナとFlexアイテムが識別しやすいようCSSで装飾しておきます。

```css
.flex-container {
    display: flex;
    background-color: skyblue;
    width: 512px;
    height: 512px;
}
.flex-item {
    background-color: royalblue;
    width: 64px;
    height: 64px;
    margin: 16px;
}
```

![](/images/website/flex-flex.png)


### flex-direction

Flexアイテムを縦・横どちらの方向に並べるかを指定するには、`flex-direction`プロパティを使います。
例えば、縦方向にする場合は`flex-direction: column;`とします。
また、Flexアイテムを並べる方向を「主軸」と呼び、主軸に対して垂直方向の軸を「交差軸」と呼びます。

| 値 | 内容 |
| --- | --- |
| row | 横方向 |
| row-reverse | 横方向（逆順） |
| column | 縦方向 |
| column-reverse | 縦方向（逆順） |

```css
.flex-container {
    display: flex;
    flex-direction: column;
}
```

![](/images/website/flex-axis.png)

### flex-wrap

Flexアイテムの折返しを指定するには、`flex-wrap`プロパティを使います。
例えば、折返しありにする場合は`flex-wrap: wrap;`とします。

| 値 | 内容 |
| --- | --- |
| nowrap | 折返しなし |
| wrap | 折返しあり |

```css
.flex-container {
    display: flex;
    flex-wrap: wrap;
}
```

![](/images/website/flex-flex-wrap.png)

### justify-content

Flexアイテムの主軸に対する配置方法を指定するには、`justify-content`を使います。
例えば、中央寄せにする場合は`justify-content: center;`とします。

| 値 | 内容 |
| --- | --- |
| flex-start | 先頭寄せ |
| flex-end | 末尾寄せ |
| center | 中央寄せ |
| space-between | 均等配置（アイテム間に余白） |
| space-around | 均等配置（アイテム・コンテナ間に余白） |

```css
.flex-container {
    display: flex;
    justify-content: flex-end;
}
```

![](/images/website/flex-justify-content.png)

### align-items

Flexアイテムの交差軸に対する配置方法を指定するには、`align-items`を使います。
例えば、中央寄せにする場合は`align-items: center;`とします。

| 値 | 内容 |
| --- | --- |
| flex-start | 先頭寄せ |
| flex-end | 末尾寄せ |
| center | 中央寄せ |

```css
.flex-container {
    display: flex;
    align-items: center;
}
```

![](/images/website/flex-align-items.png)

### align-content

Flexアイテムが折返した時に交差軸に対する配置方法を指定するには、`align-content`を使います。
例えば、中央寄せにする場合は`align-content: center;`とします。

| 値 | 内容 |
| --- | --- |
| flex-start | 先頭寄せ |
| flex-end | 末尾寄せ |
| center | 中央寄せ |

```css
.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```

![](/images/website/flex-align-content.png)


## ２カラム型のレイアウト

TBD


## タイル型のレイアウト

TBD
