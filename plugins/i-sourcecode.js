let handler = async (m, { conn }) => {

     conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: '*Nih:*\https://www.instagram.com/its_ibrahim_2004/,\n\n*Ambil aja disitu,jangan lupa kasih star*',
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


