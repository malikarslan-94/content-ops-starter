/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    allowedDevOrigins: [
        '192.168.1.84'
    ],
    async rewrites() {
        return [
            {
                source: '/api/:path*', // anything starting with /api
                destination: 'http://3.130.68.140:6001/api/:path*', // your EC2 backend
            },
        ];
    }
};

module.exports = nextConfig;
