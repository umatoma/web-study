---
title: 図で理解するFlexbox
description: 図でFlexboxの全体像を理解しよう！
slug: master-01
---

## 図で理解するFlexbox

Flexboxは複雑なレイアウトを組み立てるために必要となる機能です。
ですが、文章だけではFlexboxの仕組みや使い方を理解しづらい部分があるのも事実です。

そこで、Flexboxの仕組みや使い方を図で視覚的に説明します。
Flexboxを使いこなして、様々なレイアウトを組み立てられるようになりましょう。


## Flexbox

Flexboxは縦・横に要素を並べられるレイアウト方法です。 
Flexboxを使うことにより、縦・横に並べるだけでなく、並べた要素の中央寄せ・上寄せなど細かな位置も調整できます。

### コンテナ・アイテム

Flexboxを使う上で必要となる要素が「Flexコンテナ」と「Flexアイテム」です。
Flexコンテナの中にFlexアイテムを複数並べてレイアウトします。

 ```html
<div class="container">
    <div class="item">１</div>
    <div class="item">２</div>
    <div class="item">３</div>
    <div class="item">４</div>
    <div class="item">５</div>
</div>
 ```

Flexコンテナとして扱いたいHTMLタグに対して、`display: flex;`を設定します。
また、Flexコンテナ内に並んでいる要素は自動的にFlexアイテムとして扱われます。
そのため、明示的にCSSを設定する必要はありません。

 ```css
 .container {
    display: flex;
}
 ```

 ![](/images/master/flex-container.png)


### 主軸・交差軸

FlexboxではFlexアイテムを左右に並べたり、上下に並べたりできます。
このFlexアイテムを並べる方向を「主軸」と呼びます。
また、主軸に対して垂直方向の軸を「交差軸」と呼びます。

![](/images/master/flex-axis.png)

※ アラビア語など言語設定に応じて軸の向きが逆転する場合もありますが、ここでは日本語や英語が使われる前提で話を進めます。

### justify・align・content・items・self

Flexboxの各プロパティ名で使われている用語は次のような関係になっています。

- `justify`：主軸方向を調整
- `align`：交差軸方向を調整
- `self`：単一のFlexアイテム
- `items`：各行のFlexアイテム
- `content`：Flexアイテム全体

![](/images/master/flex-justify-align.png)


## Flex Direction / Wrap

### Flex Direction

Flexアイテムを並べる方向は`flex-direction`プロパティで設定できます。

- `row`：左から右に並べる
- `row-reverse`：右から左に並べる
- `column`：上から下に並べる
- `column-reverse`：下から上に並べる

```css
.container {
    display: flex;
    flex-direction: row;
}
```

![](/images/master/flex-flex-direction.png)

### Flex Wrap

Flexアイテムの折り返しは`flex-wrap`プロパティで設定できます。

- `nowrap`：折り返さない
- `wrap`：折り返す
- `wrap-reverse`：逆方向に折り返す

```css
.container {
    display: flex;
    flex-wrap: nowrap;
}
```

![](/images/master/flex-flex-wrap.png)

### Order

Flexアイテムの表示順は`order`プロパティで設定できます。
値には`-1,0,1,2`のように数値を指定でき、数値の小さい方から順番に表示されます。

```css
.item {
    order: 3;
}
```

![](/images/master/flex-order.png)

### Gap

Flexアイテム間の余白は`gap`プロパティで設定できます。
値には`8px`・`1rem`のようにサイズを指定できます。

```css
.container {
    display: flex;
    gap: 8px;
}
```

![](/images/master/flex-gap.png)


## Flex Grow / Shrink / Basis

### Flex Grow

Flexアイテムを主軸に対してどの様に伸縮させるかは`flex-grow`プロパティで指定できます。
値には`1`・`0.5`のように数値を指定でき、各Flexアイテムに設定された数値の比率によって、どの様に伸縮するかが決まります。

```css
.item {
    flex-grow: 2;
}
```

![](/images/master/flex-flex-grow.png)

### Flex Shrink

Flexアイテムを主軸に対してどの様に縮小させるかは`flex-shrink`プロパティで指定できます。
値には`1`・`0.5`のように数値を指定でき、各Flexアイテムに設定された数値の比率によって、どの様に縮小するかが決まります。
ただし、全Flexアイテムのサイズが、Flexコンテナのサイズを超える場合のみ有効となります。

```css
.item {
    flex-shrink: 2;
}
```

![](/images/master/flex-flex-shrink.png)

### Flex Basis

Flexアイテムの主軸に対するサイズは`flex-basis`プロパティで指定できます。
値には`8px`・`1rem`のようにサイズを指定を指定できます。
また、`width`・`height`を同時に設定している場合は、`flex-basis`が優先されます。

```css
.item {
    flex-basis: 64px;
}
```

![](/images/master/flex-flex-basis.png)

### Flex

`flex-grow`・`flex-shrink`・`flex-basis`は`flex`プロパティで一括指定できます。
指定する値の数などに応じて解釈が変わります。

- 値１つ
    - １つ目は`flex-grow`の値となる
- 値２つ
    - １つ目は`flex-grow`の値となる
    - ２つ目が`64px`・`8rem`などサイズを指定した場合は`flex-basis`の値となる
    - ２つ目が`1`・`0.5`など数値を指定した場合は`flex-shrink`の値となる
- 値３つ
    - １つ目は`flex-grow`の値となる
    - ２つ目は`flex-shrink`の値となる
    - ３つ目は`flex-basis`の値となる

```css
.item {
    flex: 1;
}
```


## Justify Content

### Justify Content

「Flexアイテム全体」の「主軸」に対する配置は`justify-content`プロパティで指定できます。

- `flex-start`：先頭側に配置
- `flex-end`：末尾側に配置
- `center`：中央に配置
- `space-between`：均等に配置
    - コンテナとアイテム間の余白なし
- `space-around`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白の半分になる
- `space-evenly`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白と同じになる

```css
.container {
    display: flex;
    justify-content: flex-start;
}
```

![](/images/master/flex-justify-content.png)


## Align Content / Items / Self

### Align Content

「Flexアイテム全体」の「交差軸」に対する配置は`align-content`プロパティで指定できます。

- `flex-start`：先頭側に配置
- `flex-end`：末尾側に配置
- `center`：中央に配置
- `space-between`：均等に配置
    - コンテナとアイテム行間の余白なし
- `space-around`：均等に配置
    - コンテナとアイテム行間の余白は、隣接するアイテム行間の余白の半分になる
- `space-evenly`：均等に配置
    - コンテナとアイテム行間の余白は、隣接するアイテム行間の余白と同じになる

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
```

![](/images/master/flex-align-content.png)

### Align Items

「各行のFlexアイテム」の「交差軸」に対する配置は`align-items`プロパティで指定できます。

- `flex-start`：先頭側に配置
- `flex-end`：末尾側に配置
- `center`：中央に配置
- `baseline`：各アイテムのベースライン（テキストの位置）が同じになるよう配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.container {
    display: flex;
    align-items: flex-start;
}
```

![](/images/master/flex-align-items.png)

### Align Self

「単一のFlexアイテム」の「交差軸」に対する配置は`align-self`プロパティで指定できます。
`align-self`が設定されている場合は、`align-items`の値が上書きされます。

- `flex-start`：先頭側に配置
- `flex-end`：末尾側に配置
- `center`：中央に配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.item {
    align-self: flex-start;
}
```

![](/images/master/flex-align-self.png)


## Place Content

### Place Content

`align-content`・`justify-content`は`place-content`プロパティで一括指定できます。
１つ目の値は`align-content`の値を指定し、２つ目の値は`justify-content`の値を指定します。

```css
.container {
    place-content: flex-start flex-end;
}
```
