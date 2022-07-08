/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BETTING_TOKEN_ADDRESS: "0x07F0CbE8eBe58eFfA359bF3f54cAF0FFC81e5C9E",
    BETTING_ADDRESS: "0xF87b0d13a6EfB058A91808b7217f9b86E4308165",
  }
}

module.exports = nextConfig
