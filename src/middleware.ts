import { NextRequest, NextResponse } from "next/server";


// run only on homepage
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("city", city);
  requestHeaders.set("country", country);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
