/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://95.217.153.98:3001/:path*'
            }
        ]
    }
};

export default nextConfig;
