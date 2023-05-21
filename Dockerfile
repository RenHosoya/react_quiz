# ベースイメージの指定
FROM node:latest

# コンテナ内の作業ディレクトリの指定
WORKDIR /app

# package.jsonとpackage-lock.jsonのコピー
COPY package*.json ./

# 依存パッケージのインストール
RUN npm install

# ソースコードのコピー
COPY . .

# 開発サーバーの起動
CMD ["npm", "start"]
