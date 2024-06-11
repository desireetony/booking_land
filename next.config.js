/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src'); // Example alias for src directory
    config.resolve.alias['@components'] = path.resolve(__dirname, './src/components'); // Alias for components directory
    config.resolve.alias['@lib'] = path.resolve(__dirname, './src/lib'); // Alias for lib directory
    // Add more aliases as needed for different directories

    return config;
  },
};


module.exports = nextConfig
