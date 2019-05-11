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
    "revision": "fca2aedde72c0d25dab3b08756a003d1"
  },
  {
    "url": "assets/css/0.styles.292e15e1.css",
    "revision": "5ac47b2ea99c9a5759a012aff3a1c23f"
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
    "url": "assets/js/10.c586b659.js",
    "revision": "61ff12741e8456d4282b7c3941b8e36c"
  },
  {
    "url": "assets/js/11.0ecf1576.js",
    "revision": "b6a4c6cf1b89b9b759cb1861cb2a0ed8"
  },
  {
    "url": "assets/js/12.e941c778.js",
    "revision": "cc7765ab69c49011c4b8ea3e94c66825"
  },
  {
    "url": "assets/js/13.cba793ca.js",
    "revision": "66e5f396083cb3329bcbc7fe2aa48787"
  },
  {
    "url": "assets/js/14.fbdbb5e9.js",
    "revision": "873a3fc7e8a56f5879b39be7140d579c"
  },
  {
    "url": "assets/js/2.64733279.js",
    "revision": "014fcfe877398f7ef618baf83d0f9075"
  },
  {
    "url": "assets/js/3.e61f74c4.js",
    "revision": "7defc03d3e87f3a3880a188c6194d50a"
  },
  {
    "url": "assets/js/4.72f409b4.js",
    "revision": "2557ab87131254932ec02ceb6b03d96e"
  },
  {
    "url": "assets/js/5.a72b7730.js",
    "revision": "0ab7954d29aa8fa25225bfac24239d23"
  },
  {
    "url": "assets/js/6.41fcb300.js",
    "revision": "b321f0f912a317306f4cf0347d189d09"
  },
  {
    "url": "assets/js/7.9ae26ad8.js",
    "revision": "29380c0346e1857603d406d23938b1f3"
  },
  {
    "url": "assets/js/8.179391d1.js",
    "revision": "536959e9909015d001aaba74a062a303"
  },
  {
    "url": "assets/js/9.05468e20.js",
    "revision": "0c144304de5f173c0fafc4d0157f5aac"
  },
  {
    "url": "assets/js/app.86269517.js",
    "revision": "54a28c87825e802f80c7acf94faa232c"
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
    "url": "helpmenu.png",
    "revision": "63deede60d3ae2c19ba4c6e9ba30740c"
  },
  {
    "url": "index.html",
    "revision": "482209c1d2b5c9f29c8e4e065612f130"
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
