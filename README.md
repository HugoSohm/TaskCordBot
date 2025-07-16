<h1>TaskCordBot</h1>

TaskCordBot is a discord bot in Node.js allowing to generate short range radio frequencies for the Task Force Radio module present in Arma 3

## About

### Libraries

TaskCordBot works with Node.js and the Discord API

- [Node.js](https://nodejs.org/en/)
- [API Discord](https://discordapp.com/developers/docs/intro)

## Installation and running

- Clone the [repository](https://github.com/HugoSohm/Discordbot)

```
git clone https://github.com/HugoSohm/Discordbot
```

- Add your Discord bot token

1. Go to the "Bot" section on https://discord.com/developers to get the `TOKEN` value

2. Rename the `.env.example` file into `.env`

3. Add `TOKEN` value to the `DISCORD_TOKEN` env variable in `.env`

- Install packages

```
$ npm i
```

- Run

```
$ node bot.js
```
