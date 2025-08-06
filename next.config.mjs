import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
	trailingSlash: false
};

const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.js');
export default withNextIntl(nextConfig);
