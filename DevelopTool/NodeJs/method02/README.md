# Node.jsインストール手順
- 最終更新日：2022/11/20

## ダウンロード
1. [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) から`nvm-setup.zip` をダウンロード
    <br /><img src="./img/01_download/01.png" width="480px">

## インストール
1. zipファイルを解凍し、`nvm-setup.exe` を起動
    <br /><img src="./img/02_install/01.png" width="480px">
1. ライセンスを確認して [Next] 押下
    <br /><img src="./img/02_install/02.png" width="480px">
1. インストール先のフォルダを選択して [Next] 押下
    - デフォルトのままで良い

    <br /><img src="./img/02_install/03.png" width="480px">
1. シンボリックリンクを作成するフォルダを選択して [Next] 押下
    - デフォルトのままで良い

    <br /><img src="./img/02_install/04.png" width="480px">
1. [Install] 押下
    <br /><img src="./img/02_install/05.png" width="480px">
1. インストールが開始される
    <br /><img src="./img/02_install/06.png" width="480px">
1. [Finish] 押下
    <br /><img src="./img/02_install/07.png" width="480px">

## セッティング
1. `nvm ls` を実行し、現在インストールしている Node のバージョンを確認
    <br /><img src="./img/03_setting/01.png" width="480px">
1. `nvm list available` を実行し、LTSの現在のバージョンを調べる
    <br /><img src="./img/03_setting/02.png" width="480px">
1. `nvm install <version>` を実行し、そのバージョンのLTSをインストール
    - 18.12.1 をインストールする場合

    <br /><img src="./img/03_setting/03.png" width="480px">
1. `nvm ls` を実行し、現在インストールしている Node のバージョンを確認
    <br /><img src="./img/03_setting/04.png" width="480px">
1. `nvm use <version>` を実行し、使用するバージョンを設定
    - 18.12.1 を使用する場合

    <br /><img src="./img/03_setting/05.png" width="480px">
1. `nvm ls` を実行し、現在使用する Node のバージョンを確認
    <br /><img src="./img/03_setting/06.png" width="480px">

## バージョン管理
- Node.js のインストール
``` bash
nvm install <version>
```
- Node.js のアンインストール
``` bash
nvm uninstall <version>
```
- 使用する Node.js の指定
``` bash
nvm use <version>
```

***

## 参考
- [Windows での NodeJS のインストール](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-windows)
- [nvm で複数の Node.js バージョンを切り替えて使用する (Node Version Manager)](https://maku77.github.io/nodejs/env/nvm)

***
