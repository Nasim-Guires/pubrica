import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  // Simple pass-through middleware. Ready for localization or auth redirects.
  return NextResponse.next();
}

// Limit middleware to run only on website pages and exclude api/static paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
