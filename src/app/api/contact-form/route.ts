import { NextResponse } from "next/server";
import { sendMessage } from "../(telegram-bot)/telegramBot";

export async function POST(request: Request) {
  const res = await request.json();
  const msg = `<u>Заявка с сайта</u>\n
  <i><u><b>ФИО:</b></u></i>   ${res.name}\n
  <i><u><b>Email:</b></u></i>   ${res.email}\n
  <i><u><b>Вопрос:</b></u></i>   ${res.text}\n`;

  sendMessage(msg);
  return NextResponse.json(res);
}
