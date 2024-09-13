import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
}

// See "Matching Paths" below to learn more
//matcher means all defined middleware when it runs
//when '/sign-in' runs then middleware will runs
//i will give example if you see when i am trying to redirect sign-up then it will not redirect me
// export const config = {
//   matcher: ['/sign-in', "/sign-up", "/dashboard/:path*","/"],
// }
