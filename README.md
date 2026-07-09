# Airi Miyazaki | Design Portfolio

バナー広告・LP・Webサイトデザインの制作実績をまとめたポートフォリオサイトです。

## ページ構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ(ヒーロー・About概要・Works一覧・Contact) |
| `about.html` | プロフィール詳細(制作スタンス・スキル・得意業種) |
| `works.html` | 制作実績一覧(フィルター・ライトボックス機能付き) |
| `works-happyball.html` | Happy Ball — 実在クライアント案件詳細 |
| `works-hidamari-bagel.html` | ひだまりベーグル — 自主制作詳細 |
| `works-freshers-fair.html` | フレッシャーズ応援フェア — 自主制作詳細 |
| `works-famm-chocolate.html` | Famm Chocolate Fair — 自主制作詳細 |
| `works-aligner-orthodontics.html` | マウスピース矯正モニター募集 — 自主制作詳細 |
| `works-mealkit.html` | 時短ミールキット — 自主制作詳細 |
| `contact.html` | お問い合わせページ |

## アセット

- `assets/css/style.css` — スタイル(デザイントークン・全ページ共通・各ページ固有スタイル)
- `assets/js/main.js` — Worksのカテゴリフィルター・ライトボックス・詳細リンクのイベント制御
- `assets/img/works/` — 作品画像(ライトボックス拡大表示用)
- `assets/img/thumbs/` — 作品サムネイル(一覧・詳細ページ用)
- `design_prompt.yaml` — 配色・雰囲気を抽象化したデザイントークン定義

## 公開URL

https://appleai2121-hub.github.io/airi-portfolio/

## ローカル確認

```
python3 -m http.server 8000
```

`http://localhost:8000` にアクセス。

## 注意事項

- 全ページはルート直下にフラット配置。GitHub Pages のサブパス配信に対応するため、アセットはすべて相対パス(`assets/css/style.css` 等)で参照しています。
- `works-happyball.html` のみ実在クライアント案件。その他の自主制作5作品には「※架空のサイト、バナーです」注記を表示しています。
