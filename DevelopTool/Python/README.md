# Pyrhonインストール手順
- 最終更新日：2021/02/27

## ダウンロード
1. [https://www.python.org/downloads/](https://www.python.org/downloads/)からインストールしたい Python のバージョンを選択
    <br /><img src="./img/01_download/01.png" width="480px">
    <br /><img src="./img/01_download/02.png" width="480px">
    - 例：[Download the latest version of Python] から最新版（3.9.2）を選択

1. 遷移先画面からインストーラをダウンロード
    <br /><img src="./img/01_download/03.png" width="480px">
    - 例：[Windows installer（64bit）] を選択

    <br /><img src="./img/01_download/04.png" width="480px">
    - 複数のバージョン（3.9と3.8）をインストールすることも可能
    - 例：[Windows x86-64 executable installer] を選択
    - embeddable zip file
      - 組み込み配布物用
      - ユーザーのシステムから分離して使用可能（上級者向け）
    - executable installer
      - インストール時にネットワークにつながっている必要なし
    - web-based installer
      - インストール時にネットワークにつながっている必要あり

## インストール
1. インストーラを起動
    <br /><img src="./img/02_install/01.png" width="480px">
1. [Add Python x.y to Path] をチェックして [Customize installation] 押下
    <br /><img src="./img/02_install/02.png" width="480px">
    - x.y はインストールする Python のバージョン
1. オプション機能を選択して [Next] 押下
    - デフォルトのままで良い

    <br /><img src="./img/02_install/03.png" width="480px">
1. [Install for all users] を選択して [Install] 押下
    - [Precompile standard library] が自動的に選択される
    - インストール先に [Program Files] 配下が自動的に選択される

    <br /><img src="./img/02_install/04.png" width="480px">
1. インストールが開始される
    <br /><img src="./img/02_install/05.png" width="480px">
1. [Close] を押下して閉じる
    <br /><img src="./img/02_install/06.png" width="480px">

## セッティング
### 仮想環境作成
- 仮想環境管理用のフォルダを作成するか、プロジェクトのルートに仮想環境名 .venv で作成する

1. コマンドプロンプトで任意のフォルダを開く
    ``` bash
    cd C:\python_envs
    ```
    - 例： C:\python_envs

    <br /><img src="./img/03_setting/01_venv/01.png" width="480px">
    <br /><img src="./img/03_setting/01_venv/02.png" width="480px">

1. 以下のコマンドで仮想環境を作成する
    ``` bash
    python -m venv [仮想環境名]
    ```

    <br /><img src="./img/03_setting/01_venv/03.png" width="480px">
    <br /><img src="./img/03_setting/01_venv/04.png" width="480px">

    - 作成された仮想環境名のフォルダを削除することで仮想環境の削除が可能
    - 以下のコマンドで Python のバージョンを指定して作成することも可能
    ``` bash
    py -x.y -m venv [仮想環境名]
    ```

    <br /><img src="./img/03_setting/01_venv/05.png" width="480px">

1. 仮想環境の切り替え確認
    - 以下のコマンドにより仮想環境が切り替わることを確認
      - 仮想環境用のフォルダ以外の任意のフォルダからでも絶対パス・相対パスで実行することにより切り替え可能
    ``` bash
    [仮想環境名]\Scripts\activate.bat
    ```
    <br /><img src="./img/03_setting/01_venv/06.png" width="480px">
    <br /><img src="./img/03_setting/01_venv/07.png" width="480px">
    - ([仮想環境名]) が先頭に表示される

    <br /><img src="./img/03_setting/01_venv/08.png" width="480px">
    <br /><img src="./img/03_setting/01_venv/09.png" width="480px">
    - Python のバージョンを指定して作成した場合は Python のバージョンも変わる

### Visual Studio Code
1. 拡張機能から Python をインストールする
    <br /><img src="./img/03_setting/02_vscode/01.png" width="480px">

1. 基本設定を開く
    - ワークスペースに設定する場合は事前にワークスペースを vscode で開く

    <br /><img src="./img/03_setting/02_vscode/02.png" width="480px">
    -  ファイル > ユーザ設定 > 設定
    - ショートカット：[ Ctrl + , ]

    <br /><img src="./img/03_setting/02_vscode/03.png" width="480px">
    - [ F1 ] または [ Ctrl + Shift + p ] でコマンドパレットを開き setting で検索でも開ける

    <br /><img src="./img/03_setting/02_vscode/04.png" width="480px">

1. [Python: Venv Path] に仮想環境を作成したフォルダの絶対パスを入力
    - 仮想環境管理用のフォルダを作成しない場合は不要
    - 本例では以下のパス
    ```
    C:\python_envs
    ```
    <br /><img src="./img/03_setting/02_vscode/05.png" width="480px">
    - ユーザに対して設定する場合はユーザタブ内の項目に設定される
    - ワークスペースに対して設定する場合はワークスペースタブ内の項目に設定される

1. [Terminal > Integraded > Env: Windows] から Powershell の実行ポリシーを変更
    <br /><img src="./img/03_setting/02_vscode/06.png" width="480px">
    - [setting.json で編集] から設定ファイルを開き、以下の内容を追記する
    ``` json
    "terminal.integrated.env.windows": {
        "PSExecutionPolicyPreference": "RemoteSigned"
    }
    ```

    <br /><img src="./img/03_setting/02_vscode/07.png" width="480px">

1. ウィンドウの再読み込み
    - コマンドパレットから reload を検索して [ 開発者：ウィンドウの再読み込み ] 実行

    <br /><img src="./img/03_setting/02_vscode/08.png" width="480px">

1. ワークスペース内で Python のファイルを開く
    <br /><img src="./img/03_setting/02_vscode/09.png" width="480px">

1. 左下の Python のバージョンをクリックし仮想環境を切り替える
    <br /><img src="./img/03_setting/02_vscode/10.png" width="480px">
    - Python のバージョンの横に仮想環境名が表示される

    <br /><img src="./img/03_setting/02_vscode/11.png" width="480px">
    - 切り替えた仮想環境情報はワークスペースの設定ファイルに保持される

    <br /><img src="./img/03_setting/02_vscode/12.png" width="480px">

1. 動作確認
    - [ F5 ] を押下し [ Python File ] を選択する

    <br /><img src="./img/03_setting/02_vscode/13.png" width="480px">
    <br /><img src="./img/03_setting/02_vscode/14.png" width="480px">
    - Powershell によって Python が起動する

## パッケージ管理
- 以下は切り替えた仮想環境内で行う
  - パッケージのインストール
  ``` bash
  pip install <package-name>
  ```
  - パッケージのインストール（バージョン指定）
  ``` bash
  pip install <package-name>==<version>
  ```
  - 依存関係確認
  ``` bash
  pip check
  ```
  - パッケージのリスト表示
  ``` bash
  pip list
  ```
  - パッケージのリスト表示（アップデート必要）
  ``` bash
  pip list -o
  ```
  - パッケージのリスト表示（最新版）
  ``` bash
  pip list -u
  ```
  - パッケージのアップデート
  ``` bash
  pip install -U <package-name>
  ```
  - パッケージの詳細表示
  ``` bash
  pip show <package-name>
  ```
  - パッケージのアンインストール
  ``` bash
  pip uninstall <package-name>
  ```
  - パッケージの一括インストール
    - 出力
    ``` bash
    pip freeze > requirements.txt
    ```
    - 入力
    ``` bash
    pip install -r requirements.txt
    ```

***

## 参考
- [Windows版Pythonのインストール](https://www.python.jp/install/windows/install.html)
- [Windows10 64bit に Python 3.6 のインストール](http://ksiz.hatenablog.jp/entry/2017/12/02/075123)
- [embeddable、executable、web-basedの違いとは](https://boukenki.info/embeddable-executable-web-based-chigai/)
- [仮想環境](https://www.python.jp/install/windows/venv.html)
- [【vscode】環境構築 #1-venvで仮想環境作成-【Python】](https://hachian.com/2019/09/19/vscode_venv/)
- [Windows版VisualStudioCodeで、スムーズvenvを使うための設定まとめ](https://attakei.net/blog/2019/windows-vscode-venv/index.html)
- [pipでアップデートするときのコマンド pip update](https://qiita.com/HyunwookPark/items/242a8ceea656416b6da8)

***
