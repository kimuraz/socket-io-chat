# SOCKET IO CHAT

> Socket IO chat implementation for study purposes

## Running locally without docker

It will open the server locally on port `3000` by default

```sh
$ yarn install

$ yarn start
```

## Docker

Mounting image

```sh
$ docker build -t socket-io-chat .
```

```sh
$ docker run -d -p 3000:3000 socket-io-chat
```

