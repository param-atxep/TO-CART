/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    devIndicators: false   // 👈 ADD THIS LINE
};

export default nextConfig;