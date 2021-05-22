const request = require('request');
const dotenv = require('dotenv');
dotenv.config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const channelName = process.env.CHANNEL_NAME;
if(!channelName || !token)
    console.log("ERROR CANNOT SEND MESSAGE TO TELEGRAM!");
const bot = new TelegramBot(token, {polling: true});
const messageBuilder = (obj) =>{
    let finalString = obj["name"] + " reached out to you! " + "\nemail: " + obj["email"] + "\nSubject: " + obj["subject"] + "\nMessage: " + obj["message"] + "\nat: " + obj["date"]
    return finalString;
}
const sendMessageToTelegram=(obj)=>{
    try{bot.sendMessage("@"+channelName, messageBuilder(obj));}
    catch(err)
    {console.log(err)}      
}
 exports.sendMessageToTelegram = sendMessageToTelegram;
