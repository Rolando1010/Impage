/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["es"],
		defaultLocale: "es",
	},
	swcMinify: true,
	async rewrites() {
		return [{
			source: '/robots.txt',
			destination: '/robots.txt'
		}];
	}
}

module.exports = nextConfig
