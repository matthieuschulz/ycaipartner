/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export to disable server-side rendering
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig 