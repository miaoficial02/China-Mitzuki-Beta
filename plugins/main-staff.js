let handler = async (m, { conn, command, usedPrefix }) => {
let img = 'https://files.catbox.moe/5s540n.jpg'
let staff = `✿ *𝐄𝐐𝐔𝐈𝐏𝐎 𝐃𝐄 𝐀𝐘𝐔𝐃𝐀𝐍𝐓𝐄𝐒* ✿
✰ *Dueño* 𝐈𝐭𝐬.𝐦𝐥𝐚.𝐨𝐟𝐢𝐜𝐢𝐚𝐥
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

✿ 𝐈𝐓𝐒.𝐌𝐈𝐀.𝐎𝐅𝐈𝐂𝐈𝐀𝐋
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/miaoficial02

❒ *𝐎𝐓𝐑𝐀𝐒 𝐑𝐄𝐃𝐄𝐒 𝐒𝐎𝐂𝐈𝐀𝐋𝐄𝐒:*

ᰔ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:↓
> 𝐌𝐢𝐚 » *𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐀*
> ✧ 𝐋𝐈𝐍𝐊 » https://instagram.com/its.mia.oficial
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
