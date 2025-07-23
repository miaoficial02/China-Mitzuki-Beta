const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply(`「👑」Hola owner Tu ya eres admin.`);
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply(`「👑」Hola owner Ya te di admin.`);
  } catch {
    m.reply(`${msm} Ocurrio un error.`);
  }
};
handler.tags = ['owner'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
