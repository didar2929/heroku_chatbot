const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1219108831:AAH2UkJk4QOgiwCBiF-9r3WuqfoZn43A8VA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from bot Chompy. Chompy says: "Hi, ${msg.from.first_name}"`)
})

