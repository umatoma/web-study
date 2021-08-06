---
title: PC表示とモバイル表示
description: PC表示とモバイル表示を切り替えるための基礎知識を学ぼう！
slug: website-05
---

## PC表示とモバイル表示

多くのWebサイトはPCとモバイルで表示を切り替えています。
表示を切り替える方法の１つとして、各画面サイズに応じたCSSを記述する方法があります。
この方法を「レスポンシブWebデザイン」と呼びます。


## レスポンシブWebデザイン

レスポンシブWebデザインは、各画面サイズに応じたCSSを記述することで実現できます。
この各画面サイズに応じたCSSを記述する仕組みのことを「メディアクエリー」と呼びます。

### メディアクエリー

例えば、画面サイズが640px以上である場合のCSSは次のように記述できます。
画面サイズが〜640pxの時に背景が赤くなり、641px〜の時に青くなります。

```css
body {
    background-color: blue;
}

@media (max-width: 640px) {
    body {
        background-color: red;
    }
}
```

![](/images/website/responsive-responsive.png)

### ビューポート

スマートフォンで表示可能な画面サイズは大きく、1000pxを超えるデバイスも珍しくありません。
なので、そのままの画面サイズで表示すると非常に見づらいWebサイトになってしまいます。
そこで、デバイスに適した画面サイズで表示できるよう設定するのが「ビューポート」です。

次のタグを記述しておくことで、デバイスに応じた画面サイズで表示できるようになります。
レスポンシブWebデザインであるかに関わらず記述しておきましょう。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

![](/images/website/responsive-viewport.png)

### 画面サイズ

メディアクエリーで指定する画面サイズには任意の値を設定できます。
また、多くのWebサイトでは576px~768pxあたりを切り替える基準に設定されています。

| デバイス | 横幅 |
| --- | --- |
| iPad | 768px |
| iPad Pro (12.9) | 1024px |
| iPhone 11 | 414px |
| iPhone X | 375px |

![](/images/website/responsive-device.png)
