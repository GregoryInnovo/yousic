import { NextResponse, NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("TRAX_ACCESS_TOKEN");
    const url = req.nextUrl.clone();
    // console.log(url);
    url.pathname = "/signin";
    url.search = "";

    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
