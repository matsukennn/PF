# <アプリ名：未定>

## 概要

「繋がり合って、助け合う」

保健所とユーザーのコミュニケーションを円滑にすることで、双方の工数削減・時間的負担の軽減を目的としたサービスです。

## URL

※貼り付け予定
ヘッダーの「個人の方」もしくは「保健所の方」からそれぞれのHOME画面に遷移できます。
ログインや新規登録はHOME画面のヘッダーからお願い致します。

## 制作の背景
現在、保健所から連絡待ちの人数が200人を超える地域もあり、
連絡がつかないまま亡くなってしまうというニュースも見かけるようになりました。
私の身近な人も濃厚接触者になり、3日連絡が取れないことがありましたが、
保健所から陽性者・濃厚接触者への電話でのヒヤリングは平均45分かかっているそうです。
保健所で働く人の中には過労死レベルの残業を毎月している方も多く、
このような課題をITの力で解決したいと考えました。

人員不足、アナログ運用で工数が多い、情報の一元化ができていない、という課題が挙げられますが、
今回は国民と保健所のやりとりをチャットとフォーム送信で行うことで簡略化、
保健所と国民どちらも工数削減・時間的負担の削減を目指しこのアプリを考えました。

## 主な利用シーン

【保健所側】
ユーザーとリアルタイムでやりとりしたいとき
ユーザーの情報をいち早く収集したいとき

【ユーザー側】
保健所とすぐに連絡が取りたいとき
時間をかけずに自分の状況を伝えたいとき

## 設計書
https://docs.google.com/spreadsheets/d/1zc8iOtbhLJAjmWur5HwzeuqrAu1mq3yOyL7T5o9UOY0/edit?usp=sharing

## チャレンジ要素一覧
https://docs.google.com/spreadsheets/d/1vQ8D_Ov_WJ1GSslXB0YgrPfecqP0SI0HKlC1Fzvx0b4/edit#gid=0

## 環境・使用技術

フロントエンド
・Bootstrap 4.5.0
・SCSS (BEM)
・JavaScript、jQuery

バックエンド
・Ruby 2.5.7
・Rails 5.2.4.3

開発環境
・Cloud9

本番環境
AWS (EC2、RDS for MySQL、Route53、CloudWatch、S3、Lambda)
MySQL2
Nginx、 Puma

テスト
・Rspec (単体／結合） 計100以上

その他利用技術
yml（外国人ユーザーを想定し多言語化）
Action Cable（チャット機能）
Action Mailer
チーム開発を意識したGitHubの活用 （イシュー、プルリク、マージ）

※今回、個人情報保護の観点からセキュリティが万全とは言えない為、実際の個人データを取り扱うことはございません。

## 今後のサービスの拡張性
病院から保健所に送られる発生届は手書きのFAXで送信されており、こちらもフォームの送信により簡略化、高速化が可能であると考える
