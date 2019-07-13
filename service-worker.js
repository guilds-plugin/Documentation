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
    "revision": "5c4e2dc6bb7a07698ab5bac8953c2b32"
  },
  {
    "url": "assets/css/0.styles.50505080.css",
    "revision": "48250671061ecc9fe89025b175062f36"
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
    "url": "assets/js/10.3e4f2f17.js",
    "revision": "3558cf40f294f464adeed4ba97cb0951"
  },
  {
    "url": "assets/js/11.bf68875d.js",
    "revision": "7fe1d7e0c1c724e531a660d65cb06c91"
  },
  {
    "url": "assets/js/12.dd16c294.js",
    "revision": "05442b8e8abb72e07cc9ffed1060ec53"
  },
  {
    "url": "assets/js/13.e8e1176d.js",
    "revision": "14edd986a3d2aeb968d4eedd4ef19c98"
  },
  {
    "url": "assets/js/14.ead6047d.js",
    "revision": "70d036f8693ecf018e1c0fc5dc0bd26c"
  },
  {
    "url": "assets/js/2.8305f7d1.js",
    "revision": "4e9b5c9f40b645977301ac150fe9aa9d"
  },
  {
    "url": "assets/js/3.8d8b60e6.js",
    "revision": "4faea468ce335a6c2a1383f8129bca77"
  },
  {
    "url": "assets/js/4.dfbb35ab.js",
    "revision": "489051099c25cad566d5ec81de2cb7ec"
  },
  {
    "url": "assets/js/5.ae7fd582.js",
    "revision": "07ce81660a6053c889ae81853d8a2608"
  },
  {
    "url": "assets/js/6.2ec4bbcb.js",
    "revision": "9ef47fdcb4b6fcd956c7df2d29339ca8"
  },
  {
    "url": "assets/js/7.ec6da2fa.js",
    "revision": "f321989417d7e43381bf581c1ed4524c"
  },
  {
    "url": "assets/js/8.899a5e5a.js",
    "revision": "6e79e46640b05d471d2eb26a72a5dc1a"
  },
  {
    "url": "assets/js/9.4008ddce.js",
    "revision": "38684ae73b682c68585c7cef02c5814a"
  },
  {
    "url": "assets/js/app.626d5666.js",
    "revision": "f2b73479177ddc4c1fda743e3032c20c"
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
    "revision": "c4d3dc9cf505d9858de8013bc940f586"
  },
  {
    "url": "general/features.html",
    "revision": "98a68724be75f51a137c2dbfc323c8df"
  },
  {
    "url": "general/placeholders.html",
    "revision": "e2ba85dfcb2f3154a8b775fd0c0a8f00"
  },
  {
    "url": "helpmenu.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "index.html",
    "revision": "f5d028c7ea138ae01c1410df9b50e01a"
  },
  {
    "url": "install/configuration.html",
    "revision": "4ccd10eafc160491cf428886d4bad6b4"
  },
  {
    "url": "install/install.html",
    "revision": "54fa333f68ba774c5a55357e71eefb41"
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
    "revision": "6d89d58f83fa7b7d80e1fd5e569806d8"
  },
  {
    "url": "project/about.html",
    "revision": "0d0240baa9fc3f1dde95d9fd5d283e2f"
  },
  {
    "url": "project/introduction.html",
    "revision": "ef80a5304f8f95ef9f34e58a932cb4a9"
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
