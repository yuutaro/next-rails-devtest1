## コマンド一覧
- composeで定義されたネットワークとその中にあるコンテナ（サービスの起動）  

  ```
  docker compose up
  ```
- ネットワーク内のコンテナ内に入る方法  

  ```
  docker compose exec <service> <command>
  docker compose exec rails /bin/bash
  ```
- コンテナ内でのRailsサーバー起動法
  ```
  rails s -b '0.0.0.0'
  ```