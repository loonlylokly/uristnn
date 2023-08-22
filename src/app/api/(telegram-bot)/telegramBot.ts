export const sendMessage = (msg: string) => {
  fetch(process.env.URI_TGBOT!, {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      parse_mode: 'HTML',
      text: msg,
    }),
  }).then(res => {
    console.log("Request complete! response:");
  }).catch((error) => {
    console.log("Request error! error:", error);
  });
}
