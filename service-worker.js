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
    "revision": "e21ba2b4236effc3692c6e8ead86f1f5"
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
    "url": "assets/js/4.350aa589.js",
    "revision": "489051099c25cad566d5ec81de2cb7ec"
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
    "url": "assets/js/app.e8e057f1.js",
    "revision": "b224f86978bbd6f2b149e6faefed4585"
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
    "revision": "a62733217ba92c6905e986f801d0b95b"
  },
  {
    "url": "general/features.html",
    "revision": "170762d31468aff9caedceb1beeb7b55"
  },
  {
    "url": "general/placeholders.html",
    "revision": "69940b800f877dab26f2f6461d6b16e3"
  },
  {
    "url": "helpmenu.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "index.html",
    "revision": "73f24cffeede9a86d5757853d2bdcb93"
  },
  {
    "url": "install/configuration.html",
    "revision": "8b72ceef1958246c73d72bc705a131f8"
  },
  {
    "url": "install/install.html",
    "revision": "2b4d83e824cc88f1d70d24a434cad73b"
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
    "revision": "2770067fc5170ae1d005d9c1ccc1063d"
  },
  {
    "url": "project/about.html",
    "revision": "0ec8773eb3e0a25c2df9d10f4a3cdd78"
  },
  {
    "url": "project/introduction.html",
    "revision": "2869c9a88864d10c7d408a56a49a9549"
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
