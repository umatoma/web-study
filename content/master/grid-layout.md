---
title: 図で理解する CSS Grid
description: 図で CSS Grid の全体像を理解しよう！
slug: master-02
---

## 図で理解するGrid

Gridは複雑なレイアウトを組み立てるために必要となる機能です。  
ですが、文章だけではGridの仕組みや使い方を理解しづらい部分があるのも事実です。

そこで、Gridの仕組みや使い方を図で視覚的に説明します。  
Gridを使いこなして、様々なレイアウトを組み立てられるようになりましょう。



## Grid

Gridは縦・横に要素を配置できるレイアウト方法です。   
Gridを使うことにより、Flexboxよりも複雑な配置のレイアウトが作成できます。

例えば、Flexboxでは行または列どちらかを指定して１次元のレイアウトを作成できました。  
Gridの場合は、行と列を同時に指定し２次元のレイアウトを作成できます。

![](/images/master/grid-flexbox-grid.png)

### Gridコンテナ・Gridアイテム・Gridセル

Gridを使う上で必要となる要素が「Gridコンテナ」と「Gridアイテム」です。  
Gridコンテナの中にFlexアイテムを複数並べてレイアウトします。

 ```html
<div class="container">
    <div class="item">１</div>
    <div class="item">２</div>
    <div class="item">３</div>
    <div class="item">４</div>
    <div class="item">５</div>
</div>
 ```

Gridコンテナとして扱いたいHTMLタグに対して、`display: grid;`を設定します。  
また、Gridコンテナ内に並んでいる要素は自動的にGridアイテムとして扱われます。  
そのため、明示的にCSSを設定する必要はありません。

 ```css
 .container {
    display: grid;
}
 ```

また、Gridアイテムを配置できる単位となる領域が「Gridセル」です。  
Gridアイテムは複数のGridセルをまたいで配置できます。

![](/images/master/grid-overview.png)




## Gridトラック
### Gridトラック

GridコンテナにGridアイテムを配置する時、Girdコンテナに「行」と「列」を表す線を引きます。  
この行と列を表す２次元の線のうち、並行する２本の線に囲まれた領域が「Gridトラック」です。  
列に囲まれたトラックは「列トラック」、行に囲まれたトラックは「行トラック」となります。

![](/images/master/grid-track.png)

### Grid Template Columns

列トラックのサイズは`grid-template-columns`で指定できます。  
値には`64px 8rem`のように各トラックのサイズを順番に複数指定できます。

この時、値の単位は`px`や`rem`以外に、`fr`という単位が使用できます。  
`fr`は使用可能な領域を分割する単位であり、例えば`1fr 2fr 3fr`とした場合には、１対２対３の割合でトラックのサイズが決まります。

```css
.container {
    display: flex;
    grid-template-columns: 64px 1fr 2.5fr;
}
```

![](/images/master/grid-template-columns.png)

### Grid Template Rows

行トラックのサイズは`grid-template-rows`で指定できます。  
値には`64px 8rem`のように各トラックのサイズを順番に複数指定できます。

この時、`grid-template-columns`と同じく値の単位に`fr`が使用できます。

```css
.container {
    display: flex;
    grid-template-rows: 64px 1fr 2.5fr;
}
```

![](/images/master/grid-template-rows.png)



## Grid線

### Grid線

Gridコンテナを定義するために引かれる、行と列を表す線が「Grid線」です。  
引かれた各Grid線には、線を識別するための番号が順番に付けられています。

![](/images/master/grid-line.png)

### Grid Column / Row Start / End

Grid線の番号を元に、Gridアイテムの配置方法を指定できます。  
例えば、１列目〜３列目かつ１行目〜２行目の領域にGridアイテムを配置する場合は次のようになります。

```css
.item {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}
```

1,2,3のような絶対値だけでなく、２列先まで・３行先までといった相対的な値も指定できます。  
相対的な値は`span 2`・`span 3`のように指定します。

```css
.item {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 1;
}
```

また、Gridアイテムが重なるような配置も指定できます。

![](/images/master/grid-line-start-end.png)



## セル間隔

### セル間隔

隣り合うGridセル間のスペースが「セル間隔」です。

### Column / Row Gap

このセル間隔は`row-gap`・`column-gap`プロパティで指定できます。  
例えば、行方向のセル間隔を`64px`、列方向のセル間隔を`16px`とする場合は次のようになります。

```css
.container {
    display: grid;
    row-gap: 64px;
    column-gap: 16px;
}
```

また、`gap`プロパティを使うことで`row-gap`・`column-gap`の値を一括指定できます。

```css
.container {
    display: grid;
    gap: 64px 16px;
}
```

![](/images/master/grid-gap.png)



## 軸

### インライン軸・ブロック軸

Gridアイテム並べる行方向を「インライン軸」と呼びます。  
また、列方向を「ブロック軸」と呼びます。

Flexboxと同じく、各プロパティ名で使われている用語は次の図のような関係になっています。

![](/images/master/grid-axis.png)



## Justify Content / Items / Self

### Justify Content

「Gridアイテム全体」の「インライン軸」に対する配置は`justify-content`プロパティで指定できます。

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `space-between`：均等に配置
    - コンテナとアイテム間の余白なし
- `space-around`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白の半分になる
- `space-evenly`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白と同じになる

```css
.container {
    display: grid;
    justify-content: start;
}
```

![](/images/master/grid-justify-content.png)

### Justify Items

「各Gridアイテム」の「インライン軸」に対する配置は`justify-items`プロパティで指定できます。

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.container {
    display: grid;
    justify-items: start;
}
```

![](/images/master/grid-justify-items.png)

### Justify Self

「単一のGridアイテム」の「インライン軸」に対する配置は`justify-self`プロパティで指定できます。  
`justify-self`が設定されている場合は、`justify-items`の値が上書きされます。

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.item {
    justify-self: start;
}
```

![](/images/master/grid-justify-self.png)



## Align Content / Items / Self

### Align Content

「Gridアイテム全体」の「ブロック軸」に対する配置は`align-content`プロパティで指定できます。

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `space-between`：均等に配置
    - コンテナとアイテム間の余白なし
- `space-around`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白の半分になる
- `space-evenly`：均等に配置
    - コンテナとアイテム間の余白は、隣接するアイテム間の余白と同じになる

```css
.container {
    display: grid;
    align-content: start;
}
```

![](/images/master/grid-align-content.png)

### Align Items

「各Gridアイテム」の「ブロック軸」に対する配置は`align-items`プロパティで指定できます。 s

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `baseline`：各アイテムのベースライン（テキストの位置）が同じになるよう配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.container {
    display: grid;
    align-items: start;
}
```

![](/images/master/grid-align-items.png)

### Align Self

「単一のGridアイテム」の「ブロック軸」に対する配置は`align-self`プロパティで指定できます。  
`align-self`が設定されている場合は、`align-items`の値が上書きされます。

- `start`：先頭側に配置
- `end`：末尾側に配置
- `center`：中央に配置
- `stretch`：各アイテムのサイズが同じになるよう配置

```css
.item {
    align-self: start;
}
```

![](/images/master/grid-align-self.png)



## Place Content / Items / Self

### Place Content

`align-content`・`justify-content`は`place-content`プロパティで一括指定できます。  
１つ目の値は`align-content`の値を指定し、２つ目の値は`justify-content`の値を指定します。

```css
.container {
    place-content: start end;
}
```

### Place Items

`align-items`・`justify-items`は`place-items`プロパティで一括指定できます。  
１つ目の値は`align-items`の値を指定し、２つ目の値は`justify-items`の値を指定します。

```css
.container {
    place-items: start end;
}
```

### Place Self

`align-self`・`justify-self`は`place-self`プロパティで一括指定できます。  
１つ目の値は`align-self`の値を指定し、２つ目の値は`justify-self`の値を指定します。

```css
.item {
    place-self: start end;
}
```
