const Excel = require('./Excel');
const Telegram = require('./Telegram');

const sendToTelegram = (obj) => {
   Telegram.sendMessageToTelegram(obj);
}

const writeData = (obj) =>{
    Excel.writeDataToExcel(obj);
    Telegram.sendMessageToTelegram(obj);
}

exports.writeData = writeData;
