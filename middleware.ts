import { NextResponse, NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies;

    console.log(token);

    if (!token) {
      const url = req.nextUrl.clone();
      // console.log(url);
      url.pathname = "/signin";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }
}
