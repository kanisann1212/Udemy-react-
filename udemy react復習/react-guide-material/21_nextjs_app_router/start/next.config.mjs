/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // ↑これでhtmlを出力するモードになることでSGができる
  trailingSlash:true
  // ↑これでURLにかならず末尾に／がつく
};

export default nextConfig;
