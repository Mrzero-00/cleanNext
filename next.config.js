/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "https://sslsms.cafe24.com/:path*",
			},
		];
	},
}

module.exports = nextConfig
