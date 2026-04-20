import csrf from "csrf";
import { NextResponse } from "next/server";

const tokens = new csrf();
const secret = process.env.CSRF_SECRET || tokens.secretSync();

export async function GET() {
  const token = tokens.create(secret);

  const response = NextResponse.json({ crsfToken: token, token: token.split("-")[0] });
  response.cookies.set("XSRF-TOKEN", token, { httpOnly: true });
 
  return response;
}
