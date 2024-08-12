/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	trailingSlash: false,
	reactStrictMode: true,
	swcMinify: true,
	env: {
		siteDomain: "google.com",
		siteName: "Insert Name here",
		siteTitle: " | Insert Name here",
		siteDescription: "This is a base project mate here are we going.",
		siteUrl: "https://www.example.com",
		siteImagePreviewURL: "/share-preview.png",
		siteLogo: "/logo.svg",
		siteFavicon: "/favicon.png",
		publisher: "INSERT STUDIO NAME HERE",
	},

	images: {
		imageSizes: [16, 32, 48, 64],
		deviceSizes: [
			96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
		],
		loader: "default",
		domains: [
			"datocms-assets.com",
			"curatedcom.s3.eu-west-2.amazonaws.com",
			"images.unsplash.com",
			"i.pinimg.com",
			"www.its.ac.id",
			"static.vecteezy.com",
		],
		// Correct remotePatterns definition
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.datocms-assets.com",
				port: "",
				pathname: "/*",
			},
		],
	},

	webpack(config) {
		config.module.rules.push(
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000,
					},
				},
			},
			{
				test: /\.svg$/,
				use: [{ loader: "@svgr/webpack", options: { titleProp: true } }],
			}
		);

		return config;
	},

	async rewrites() {
		return [
			{
				source: "/uploads/:path*",
				destination: "/uploads/:path*",
			},
		];
	},
};

export default nextConfig;
