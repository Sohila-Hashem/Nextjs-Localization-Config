import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import { isRTL } from '@/i18n/directionsConfig';

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale} dir={isRTL(locale) ? 'rtl' : 'ltr'}>
			<body>
				<NextIntlClientProvider locale={locale} isRTL={isRTL(locale)}>
					<Navbar params={params} />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
