if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/29107295-906c24e9b01ff7fa.js",revision:"906c24e9b01ff7fa"},{url:"/_next/static/chunks/329-2a34661913321570.js",revision:"2a34661913321570"},{url:"/_next/static/chunks/764-b560bc371a51750e.js",revision:"b560bc371a51750e"},{url:"/_next/static/chunks/f2d3e444-4c10497d20491d68.js",revision:"4c10497d20491d68"},{url:"/_next/static/chunks/fec483df-c92ac368e0fa53d5.js",revision:"c92ac368e0fa53d5"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"01395af778c6fb71"},{url:"/_next/static/chunks/main-3b74cc6acff1c0f4.js",revision:"3b74cc6acff1c0f4"},{url:"/_next/static/chunks/pages/_app-1b9c373a5db1eaa2.js",revision:"1b9c373a5db1eaa2"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"d742f979193aeae4"},{url:"/_next/static/chunks/pages/autoLogin-21a6a76468c428f1.js",revision:"21a6a76468c428f1"},{url:"/_next/static/chunks/pages/blog-040dbbddf60d6232.js",revision:"040dbbddf60d6232"},{url:"/_next/static/chunks/pages/checkout-2a8abff744bf6eac.js",revision:"2a8abff744bf6eac"},{url:"/_next/static/chunks/pages/contact-b98674c64c342f51.js",revision:"b98674c64c342f51"},{url:"/_next/static/chunks/pages/correo-enviado-87fc9b7c33da9d3f.js",revision:"87fc9b7c33da9d3f"},{url:"/_next/static/chunks/pages/forgotPassword-b342da6c79162d01.js",revision:"b342da6c79162d01"},{url:"/_next/static/chunks/pages/index-ebe53241e7031354.js",revision:"ebe53241e7031354"},{url:"/_next/static/chunks/pages/login-d859c8c32d0f32e8.js",revision:"d859c8c32d0f32e8"},{url:"/_next/static/chunks/pages/mi_cuenta-907818ebcfdbea18.js",revision:"907818ebcfdbea18"},{url:"/_next/static/chunks/pages/mi_cuenta/cliente-b0ba4a8d7418340a.js",revision:"b0ba4a8d7418340a"},{url:"/_next/static/chunks/pages/mi_cuenta/orders-b130d6c29401dd5a.js",revision:"b130d6c29401dd5a"},{url:"/_next/static/chunks/pages/mi_cuenta/recycler-13209035de145707.js",revision:"13209035de145707"},{url:"/_next/static/chunks/pages/recovery-c653f84607bb6920.js",revision:"c653f84607bb6920"},{url:"/_next/static/chunks/pages/recycling-4f66df9ed05fa806.js",revision:"4f66df9ed05fa806"},{url:"/_next/static/chunks/pages/recycling/%5Bid%5D-657f39186b66c408.js",revision:"657f39186b66c408"},{url:"/_next/static/chunks/pages/signInCustomer-20b7dcead3b99303.js",revision:"20b7dcead3b99303"},{url:"/_next/static/chunks/pages/signInRecycler-dd09069d654b1cb9.js",revision:"dd09069d654b1cb9"},{url:"/_next/static/chunks/pages/store-6226e03619ac18a1.js",revision:"6226e03619ac18a1"},{url:"/_next/static/chunks/pages/store/%5Bid%5D-1cd6517b7c8cb039.js",revision:"1cd6517b7c8cb039"},{url:"/_next/static/chunks/pages/terminosYCondiciones-5943c6ee960ba8c8.js",revision:"5943c6ee960ba8c8"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-e5582c8e22c8022d.js",revision:"e5582c8e22c8022d"},{url:"/_next/static/css/0a2411335381a882.css",revision:"0a2411335381a882"},{url:"/_next/static/css/30053b7f77050a07.css",revision:"30053b7f77050a07"},{url:"/_next/static/css/3582f9e20a5088e5.css",revision:"3582f9e20a5088e5"},{url:"/_next/static/css/521bd4b5f39b4b82.css",revision:"521bd4b5f39b4b82"},{url:"/_next/static/css/634368d7c8f5d086.css",revision:"634368d7c8f5d086"},{url:"/_next/static/css/6531a2d30d0c8d79.css",revision:"6531a2d30d0c8d79"},{url:"/_next/static/css/7310d5eca4a77b5f.css",revision:"7310d5eca4a77b5f"},{url:"/_next/static/css/796b60c845551608.css",revision:"796b60c845551608"},{url:"/_next/static/css/86c3db56a9d2e0f3.css",revision:"86c3db56a9d2e0f3"},{url:"/_next/static/css/96ff15c5eb39e687.css",revision:"96ff15c5eb39e687"},{url:"/_next/static/css/d8bc4b977b423a3d.css",revision:"d8bc4b977b423a3d"},{url:"/_next/static/css/e339f77d2fc308fb.css",revision:"e339f77d2fc308fb"},{url:"/_next/static/css/eff460dbda998f22.css",revision:"eff460dbda998f22"},{url:"/_next/static/css/f705f9d61c7476f1.css",revision:"f705f9d61c7476f1"},{url:"/_next/static/css/f71d447fa375fc39.css",revision:"f71d447fa375fc39"},{url:"/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"71145515323e376971e1802aa000b90e"},{url:"/_next/static/media/bt_added_to_cart.45632f53.svg",revision:"63405dfb04c4269ecfcc8dfd667cc12f"},{url:"/_next/static/media/button_refresh_15001.465f617a.png",revision:"900fac8afc5868a8d34949ff6e763d9b"},{url:"/_next/static/media/close-eye.46ae17ee.png",revision:"635b747f9b2fb1ef1eabb6d175f4b181"},{url:"/_next/static/media/color.dae87a04.png",revision:"dae87a04"},{url:"/_next/static/media/email.d46af11e.svg",revision:"1a348c2540a98537a3257bdc67bd5667"},{url:"/_next/static/media/flechita.1c152575.svg",revision:"5d3b853e10a449f36ca6a3f9e8ea95a6"},{url:"/_next/static/media/hue.8b181838.png",revision:"8b181838"},{url:"/_next/static/media/icon_close.177b3bca.png",revision:"a19b23e760d615e450f73de342ec679d"},{url:"/_next/static/media/icon_menu.b70fc14a.svg",revision:"23ae2bbff5a3a0e37d238045dd321760"},{url:"/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"cd2cb126a70d30fd14c927571fd1920e"},{url:"/_next/static/media/logo-Aynimar.c247031e.svg",revision:"aa7868059066fe222489d7c4a377b224"},{url:"/_next/static/media/open-eye.c4d36bd6.png",revision:"82a9252aad508c74ae049a0530b3e05b"},{url:"/_next/static/media/primeicons.0112589c.ttf",revision:"0112589c"},{url:"/_next/static/media/primeicons.943ab24c.svg",revision:"943ab24c"},{url:"/_next/static/media/primeicons.ba3f916d.woff2",revision:"ba3f916d"},{url:"/_next/static/media/primeicons.f8b9e8a4.woff",revision:"f8b9e8a4"},{url:"/_next/static/media/primeicons.ffecb254.eot",revision:"ffecb254"},{url:"/_next/static/media/user-icon-ecologist.9ff66f06.svg",revision:"0a1aa2b818f07073aa020f05fa45de53"},{url:"/_next/static/qErDAYP0xfj6j3iWX7Rel/_buildManifest.js",revision:"2db9de23a9819902b27359f5d5721b5e"},{url:"/_next/static/qErDAYP0xfj6j3iWX7Rel/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/qErDAYP0xfj6j3iWX7Rel/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/icon-192x192.png",revision:"bd0cdb91cb9bbf12461f461f170fd2b8"},{url:"/icon-256x256.png",revision:"6d7fdceeced71e3ed4228e83f2ffc35c"},{url:"/icon-384x384.png",revision:"16a1fbd79cc0f0e09a3dd0db578dda04"},{url:"/icon-512x512.png",revision:"4a4e1f411cc71de6056a7a295becafa6"},{url:"/logo-Aynimar.png",revision:"c9cc8ccb3c77c7789cfb829d7914226d"},{url:"/manifest.json",revision:"510f38b35aa9dea6d54e2999acfc2370"},{url:"/q_icon-192x192.jpg",revision:"28b98f9346cf914b80b14c85319d2813"},{url:"/static/favicon.ico",revision:"d8f952be81ee6f91e3ca98c50d8829b3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
