import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'ar-sa'],
	defaultLocale: 'en',
	localePrefix: 'as-needed'
});
