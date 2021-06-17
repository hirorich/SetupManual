# Eclipse インストール手順
- 最終更新日：2021/06/16

## ダウンロード
1. [https://mergedoc.osdn.jp/](https://mergedoc.osdn.jp/)から任意のバージョンを選択
    <br /><img src="./img/01_download/01.png" width="480px">
    - 例：[Eclipse 2021] を選択

1. 任意のエディションの [Download] を押下してインストーラをダウンロード
    <br /><img src="./img/01_download/02.png" width="480px">
    - 例：[Windows 64bit] [Java] [Full Edition] を選択
    - Full Edition
      - JDK のインストールや環境変数の設定が不要
      - Eclipse の各種設定も自動実行
      - ダウンロードして起動すれば、すぐに日本語化された Eclipse を利用可能
    - Standard Edition
      - 別途 JDK のインストールや環境変数の設定が必要
      - Eclipse の各種設定を行う必要あり

## インストール
1. ダウンロードした zip ファイルを 7Zip で任意のフォルダに解凍
    <br /><img src="./img/02_install/01.png" width="480px">
    <br /><img src="./img/02_install/02.png" width="480px">
    - 例：C ドライブ直下に解凍

## セッティング
1. <解凍先のフォルダ>\pleiades\eclipse\eclipse.exe を実行
    <br /><img src="./img/03_setting/01.png" width="480px">

1. 任意のワークスペースを選択し [起動] 押下
    <br /><img src="./img/03_setting/02-01.png" width="480px">
    - デフォルトは [../workspace] = [<解凍先のフォルダ>\pleiades\workspace]
    - フォルダが存在しない場合は新規作成される

    <br /><img src="./img/03_setting/02-02.png" width="480px">

1. [ウィンドウ] > [設定] を開く
    <br /><img src="./img/03_setting/03.png" width="480px">

1. [一般] > [ワークスペース] を開き、以下の通り設定して [適用] 押下
    - テキスト・ファイル・エンコード
      - その他：UTF-8
    - 新規テキスト・ファイルの行区切り文字
      - その他：Unix

    <br /><img src="./img/03_setting/04.png" width="480px">
    - 各OSのコード
      | OS | 改行コード |
      | --- | --- |
      | UNIX系OS | LF（\n） |
      | Mac OS(9以前) | CR（\r） |
      | Mac OS X(10以降) | LF（\n） |
      | Windows | CR＋LF（\r\n） |

1. [Java] > [コンパイラー] を開き、コンパイラー準拠レベルを1.8以上に設定して [適用] 押下
    <br /><img src="./img/03_setting/05.png" width="480px">

### WildFly
- [インストール手順](./WildFly/)
- [JSF 2.3 tutorial with Eclipse, Maven, WildFly and H2](https://balusc.omnifaces.org/2020/04/jsf-23-tutorial-with-eclipse-maven.html)

***
