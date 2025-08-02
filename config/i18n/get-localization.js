import 'server-only';

const localization = {
	en: () => import('./localization/en.json').then(module => module.default),
	'ar-sa': () => import('./localization/ar-sa.json').then(module => module.default)
};

export const getLocalizationDict = async locale => {
	const result = localization[locale];
	if (result) return result();
	return localization['en']();
};
