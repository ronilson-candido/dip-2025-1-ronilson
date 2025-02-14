import { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";

interface DecodedToken {
  scope: string;
}

export function middleware(req: NextRequest) {
  const adminRoutes = ["/auth/admin"];

  const token = req.cookies.get("token")?.value;

  if (token) {
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userRole = decodedToken.scope;

      if (adminRoutes.includes(req.nextUrl.pathname)) {
        if (userRole !== "ROLE_ADMIN") {
          return NextResponse.redirect(new URL("/login", req.url));
        }
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/auth/admin"],
};
