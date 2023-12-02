/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BETTING_TOKEN_ADDRESS: "0x69CEB93569F97c6d466F8B7Be0f234930ecDb8C2",
    BETTING_ADDRESS: "0x07F0CbE8eBe58eFfA359bF3f54cAF0FFC81e5C9E"
  }
}

module.exports = nextConfig
