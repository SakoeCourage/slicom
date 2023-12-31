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
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true
            },
            {
                source: '/login',
                destination: '/auth/login',
                permanent: true
            },
        ]
    },
}

module.exports = nextConfig