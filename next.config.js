/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  pwa: {
    //indicamos el destino donde se van a encontrar nuestros archivos publicos
    dest: 'public',
    //indicamos si vamos a registrar o no un worker
    register: true,
    //modo que vamos a trabajar
    mode: 'development'/* 'production' */,
    //para habilitarlo segun sea el caso.
    disable: true/* false */,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
});

/* const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
} */

module.exports = nextConfig