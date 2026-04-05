import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["id", "en"];
const defaultLocale = "id";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname already has a supported locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Always default to Indonesian — no Accept-Language detection
    // Users switch language manually via the locale switcher
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(request.nextUrl);
}

export const config = {
    matcher: ["/((?!_next|api|images|favicon\\.ico|.*\\..*).*)"],
};
