const fs = require('fs')

global.namabot = "Bot Store"
global.namaowner = "Owner Bubble"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285608464278','0']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay {reply gambar dan kata²nya}
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*⊹  ׁ۪͓᥀ ☁️𔓕 [FITUR BOT]*

\`\`\`🥓 !owner
🥓 !addsewa
🥓 !delsewa
🥓 !ceksewa
🥓 !listsewa
🥓 !pay 
🥓 !setpay
🥓 !list
🥓 !addlist 
🥓 !updatelist
🥓 !dellist
🥓 !jeda
🥓 !setproses
🥓 !changeproses
🥓 !delsetproses
🥓 !setdone
🥓 !changedone
🥓 !delsetdone
🥓 !proses
🥓 !done
🥓 !welcome
🥓 !goodbye
🥓 !setwelcome
🥓 !changewelcome
🥓 !delsetwelcome
🥓 !setleft
🥓 !changeleft
🥓 !delsetleft
🥓 !antiwame
🥓 !antilink
🥓 !open
🥓 !close 
🥓 !hidetag
\`\`\`


꒷⏝⊹࣪࣪꒦꒷⏝࣭࣭꒦꒷⏝⊹࣪࣪꒦꒷⏝࣭࣭꒦꒷࣭࣭ ゙ 𓎆
*🎀fitur bisa di pakai dengan/tanpa prefix (awalan simbol)*
*🎀 bot on 24 jam*
*🎀 no coppy list*
*🎀 all trx no reff.*
`
}
