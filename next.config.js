const path = require("path")
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['example.com'],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@"] = path.resolve("./")

    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: "preact/compat",
    //     "react-dom/test-utils": "preact/test-utils",
    //     "react-dom": "preact/compat",
    //   })
    // }

    return config
  },
})
