/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96ca62b596d5c01c0a88a33d3172d836"
  },
  {
    "url": "assets/css/0.styles.314efdc8.css",
    "revision": "729d56203eeab7072670f8be3d7b2445"
  },
  {
    "url": "assets/img/helpmenu.63deede6.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "assets/img/jetbrains.eae49d50.png",
    "revision": "eae49d50612915dd43858e0f73d50588"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ae8f615b.js",
    "revision": "b70c549dc4ab7ef9699430c2f338d651"
  },
  {
    "url": "assets/js/11.802d0ce7.js",
    "revision": "7fe1d7e0c1c724e531a660d65cb06c91"
  },
  {
    "url": "assets/js/12.92724229.js",
    "revision": "05442b8e8abb72e07cc9ffed1060ec53"
  },
  {
    "url": "assets/js/13.2a4691f0.js",
    "revision": "14edd986a3d2aeb968d4eedd4ef19c98"
  },
  {
    "url": "assets/js/14.ead6047d.js",
    "revision": "70d036f8693ecf018e1c0fc5dc0bd26c"
  },
  {
    "url": "assets/js/2.d4aafdb9.js",
    "revision": "4e9b5c9f40b645977301ac150fe9aa9d"
  },
  {
    "url": "assets/js/3.8d8b60e6.js",
    "revision": "4faea468ce335a6c2a1383f8129bca77"
  },
  {
    "url": "assets/js/4.d8b36f63.js",
    "revision": "3f8f3aaff337d5dd7deff4342fcef3ed"
  },
  {
    "url": "assets/js/5.275d42b0.js",
    "revision": "263bf3fc1cca08a98aa7034ff8868bbd"
  },
  {
    "url": "assets/js/6.46c523fd.js",
    "revision": "edbf73db1031ad562f1eeca9db6ffcc2"
  },
  {
    "url": "assets/js/7.a54e78f9.js",
    "revision": "f321989417d7e43381bf581c1ed4524c"
  },
  {
    "url": "assets/js/8.12af775c.js",
    "revision": "6e79e46640b05d471d2eb26a72a5dc1a"
  },
  {
    "url": "assets/js/9.88280ced.js",
    "revision": "a29fc1bdeb1869fbc06640d7f5470ef2"
  },
  {
    "url": "assets/js/app.02b4a85f.js",
    "revision": "691e1ab481e196a363ee6c4491869525"
  },
  {
    "url": "favicons/android-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/android-icon-192x192.png",
    "revision": "d6aac088e3316a5d7798f41197a24b17"
  },
  {
    "url": "favicons/android-icon-36x36.png",
    "revision": "e3c818d51ca5f257c8ce4784b1de6faf"
  },
  {
    "url": "favicons/android-icon-48x48.png",
    "revision": "51faecd00cbb6651e4c09234eae4fe0f"
  },
  {
    "url": "favicons/android-icon-72x72.png",
    "revision": "e766896e22377f30c3264b0d1a2a424d"
  },
  {
    "url": "favicons/android-icon-96x96.png",
    "revision": "dc8417115770f296b13f97e1cd05af25"
  },
  {
    "url": "favicons/apple-icon-114x114.png",
    "revision": "a0dd483851da07a7d25429932aa2170a"
  },
  {
    "url": "favicons/apple-icon-120x120.png",
    "revision": "4a4f3e2726153f4de7f7d9a8cddf2d8a"
  },
  {
    "url": "favicons/apple-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/apple-icon-152x152.png",
    "revision": "f592faaec6d424094ae36f1c24d22dba"
  },
  {
    "url": "favicons/apple-icon-180x180.png",
    "revision": "380b78beb2fa388b1b38942b6ab19986"
  },
  {
    "url": "favicons/apple-icon-57x57.png",
    "revision": "4914cb079533fc08272f9340dab959a5"
  },
  {
    "url": "favicons/apple-icon-60x60.png",
    "revision": "746564dcb9743b75eb91c036050df80d"
  },
  {
    "url": "favicons/apple-icon-72x72.png",
    "revision": "e766896e22377f30c3264b0d1a2a424d"
  },
  {
    "url": "favicons/apple-icon-76x76.png",
    "revision": "96321bb8ace620ba90a2272cd15572c9"
  },
  {
    "url": "favicons/apple-icon-precomposed.png",
    "revision": "74c061c7136dd038833be4f01f0a504c"
  },
  {
    "url": "favicons/apple-icon.png",
    "revision": "74c061c7136dd038833be4f01f0a504c"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "c19a943e06b6a15509a469ef19ac1a32"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "2b5a1c4a3a7255a183521b72846edd8e"
  },
  {
    "url": "favicons/favicon-96x96.png",
    "revision": "dc8417115770f296b13f97e1cd05af25"
  },
  {
    "url": "favicons/icon-192x192.png",
    "revision": "aa6fb94ca9262b85d0608a50fd3d6e93"
  },
  {
    "url": "favicons/icon-512x512.png",
    "revision": "ba13b9acc7e85613de5b50348fe093a3"
  },
  {
    "url": "favicons/ms-icon-144x144.png",
    "revision": "a0683d6ad71bf4c60880c756f35c8a11"
  },
  {
    "url": "favicons/ms-icon-150x150.png",
    "revision": "68f1030d5fe5baa3b4e74b18bdc07d67"
  },
  {
    "url": "favicons/ms-icon-310x310.png",
    "revision": "496d4d3a040b9aba51975fffc269641e"
  },
  {
    "url": "favicons/ms-icon-70x70.png",
    "revision": "f03c2c932e394f3ec507d6c5f89889a6"
  },
  {
    "url": "general/commands.html",
    "revision": "2687b3c07bae619c746a4e7aa96bda5c"
  },
  {
    "url": "general/features.html",
    "revision": "ba285639345ca126911cf76f35ea21a4"
  },
  {
    "url": "general/placeholders.html",
    "revision": "aaf29bd30b005eb6ac266830babfc40c"
  },
  {
    "url": "helpmenu.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "index.html",
    "revision": "549c9d0fe1e411aad81f972b38bdd4b5"
  },
  {
    "url": "install/configuration.html",
    "revision": "5335398b34a33b79eacd906587646cd1"
  },
  {
    "url": "install/install.html",
    "revision": "fc3c0d9c7a7e834a42df4489bc62524f"
  },
  {
    "url": "jetbrains.png",
    "revision": "eae49d50612915dd43858e0f73d50588"
  },
  {
    "url": "logo-nav.png",
    "revision": "5356779b19fd25216da729e609563d0e"
  },
  {
    "url": "logo.png",
    "revision": "58fd15aaac962f2aaf90d24e90eaaca9"
  },
  {
    "url": "misc/future.html",
    "revision": "39fefff7e0a5e4abfb8645e258a6b54f"
  },
  {
    "url": "project/about.html",
    "revision": "d5fb42877504bd856cb7892ab6f18864"
  },
  {
    "url": "project/introduction.html",
    "revision": "9748614ebc728d93f648c28184616c8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
