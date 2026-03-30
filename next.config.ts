import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
