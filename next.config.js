/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/portal/:path*',
            }
        ]
    },
}

module.exports = nextConfig