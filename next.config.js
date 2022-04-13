/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org',"c.tenor.com","pngimg.com",'https://pngimg.com','https://c.tenor.com', 'https://api.themoviedb.org/',"https://image.tmdb.org/t/original"],
  },
}

module.exports = nextConfig
