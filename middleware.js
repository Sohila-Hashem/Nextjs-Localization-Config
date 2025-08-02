import { NextResponse } from 'next/server';
import { i18n } from '@/config/i18n/i18n-config';

const SUPPORTED_LANGS = i18n.locales;
const DEFAULT_LANG = 'en';

export function middleware(req) {
	const { pathname } = req.nextUrl;

	// Skip Next.js internal paths and API routes
	if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
		return NextResponse.next();
	}

	const segments = pathname.split('/').filter(Boolean); // remove empty

	// 1️⃣ If path already starts with a supported lang
	if (segments.length > 0 && SUPPORTED_LANGS.includes(segments[0])) {
		return NextResponse.next(); // nothing to rewrite
	}

	// 2️⃣ Otherwise, rewrite to default lang internally
	const url = req.nextUrl.clone();
	url.pathname = `/${DEFAULT_LANG}${pathname}`;
	return NextResponse.rewrite(url);
}

// Apply to all pages
export const config = {
	matcher: [
		'/((?!_next|api|.*\\..*).*)' // exclude static files & APIs
	]
};
