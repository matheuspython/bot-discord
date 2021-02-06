const Discord = require('discord.js')

const bot = new Discord.Client()

const token = "digite aqui o token do seu bot que pode ser adquirido em https://discord.com/developers/applications"

bot.login(token)

bot.on('ready', () => {
    console.log('estou pronto pra ser ativado :)')
})

bot.on('message', msg => {
    if (msg.content === 'qual o seu nome?') {

        msg.reply('meu none é bot meu caro')
    }
})