import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextResponse } from 'next/server';

export default async function middleware(request) {
	const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value ?? routing.defaultLocale;

	const pathname = request.nextUrl.pathname;
	const [, locale, ...segments] = request.nextUrl.pathname.split('/');

	if (!locale && cookieLocale && cookieLocale === routing.defaultLocale) {
		const url = request.nextUrl.clone();
		url.pathname = `/${cookieLocale}${pathname}`;
		return NextResponse.rewrite(url);
	}

	const handleI18nRouting = createMiddleware(routing);
	const response = handleI18nRouting(request);
	return response;
}

export const config = {
	// Match all pathnames except for
	// - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
	// - … the ones containing a dot (e.g. `favicon.ico`)
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
