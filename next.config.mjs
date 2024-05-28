// export default nextConfig;
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Specify the src directory
  srcDir: "src",
};

export default withNextIntl(nextConfig);
