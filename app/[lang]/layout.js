import { getLocalizationDict } from './localization';

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function Layout({ children, params }) {
	const { lang } = await params;
	const dict = await getLocalizationDict(lang);

	console.log(dict);
	return (
		<html lang={lang}>
			<body>{children}</body>
		</html>
	);
}
