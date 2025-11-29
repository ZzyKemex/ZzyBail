export default async function handler(sock, msg) {
  try {
    const m = msg.messages[0];
    if (!m || !m.message || m.key.fromMe) return;

    const from = m.key.remoteJid;
    const text =
      m.message.conversation ||
      m.message.extendedTextMessage?.text ||
      "";

    if (text.toLowerCase() === "menu") {
      await sock.sendMessage(from, {
        text: "🔥 *Shock Baileys WA Nozzy*\n\n• menu\n• ping\n• info",
      });
    }

    if (text.toLowerCase() === "ping") {
      await sock.sendMessage(from, { text: "🏓 Pong!" });
    }

  } catch (err) {
    console.error("Handler Error:", err);
  }
}
