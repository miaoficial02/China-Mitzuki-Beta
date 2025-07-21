import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de ${botname}*

- 🄻᪶᪴𝐮᪶᪴𝐧᪶᪴𝐚᪶᪴ ᪶🄱᪶᪴𝐨᪶᪴𝐭᪶᪴ ᪶🄱᪶֟፝𝐞᪶᪴𝐭᪶᪴𝐚᪶᪴
> *⭐* ${gp1}

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

*✿ Enlace anulado? entre aquí! ✿*
      (𝐬𝐢𝐧 𝐠𝐫𝐮𝐩𝐨 𝐝𝐞 𝐫𝐞𝐬𝐩𝐚𝐥𝐝𝐨)

> ${dev}`

await conn.sendFile(m.chat, catalogo, "grupos.jpg", grupos, m)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
