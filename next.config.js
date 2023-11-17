/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.AWS_CLOUDFRONT_PREFIX,
    ]
  },
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.externals.push({
        '@aws-sdk/signature-v4-multi-region': 'commonjs @aws-sdk/signature-v4-multi-region',
    })

    return config
},
}

module.exports = nextConfig
