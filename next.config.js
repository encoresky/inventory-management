/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
        // Set devtool to 'false' to disable source maps in both development and production
        config.devtool = false;

        return config;
    },
}

module.exports = nextConfig
