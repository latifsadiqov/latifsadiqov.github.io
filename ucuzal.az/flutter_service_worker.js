'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9095009093704f9e620eba3f0900af7a",
"assets/assets/images/animal.png": "d796a12f6983ab4cc485fadb2f34298d",
"assets/assets/images/appliance.png": "7749aab7ff85b3eedc2fb9b681437220",
"assets/assets/images/baby.png": "3ff972a826b37074874a56f5f99ad224",
"assets/assets/images/beauty.png": "b2bf00992661dfd0ec9289470ec72d08",
"assets/assets/images/book.png": "483b104c96ed51d102e208a64641e334",
"assets/assets/images/car.png": "1b67edb4aa8043d409c86cf44e6a3dbd",
"assets/assets/images/clothes.png": "8e9aba03cbf0e08a4853388099d4954e",
"assets/assets/images/computer.png": "e19cb1c2ec0e42190b205e426d9367fe",
"assets/assets/images/construction.png": "3121e81715e9bb14bdb1258a8ce81017",
"assets/assets/images/furniture.png": "81a2bbed1ce3d6bc5f6b5b2de250f6c2",
"assets/assets/images/land.png": "651adb87ec7d3d4beaafc70484183d60",
"assets/assets/images/medical.png": "200422f0a83927f9bb0259ccca69a86c",
"assets/assets/images/no_profile_photo.jpg": "7e3f9aefcaba4a6eadde2151b82c8a5f",
"assets/assets/images/other.png": "3f6fd151daaebadbcef77ef603253571",
"assets/assets/images/real-estate.png": "f3672df673478a0039d00b3b254bfe86",
"assets/assets/images/services.png": "9c8a29bc0ee3517a63b69fd7b1308318",
"assets/assets/images/shops.png": "05d31e9b576e7f6063baebe42b334464",
"assets/assets/images/smartfon.png": "cff1408457f3e338ded0e16a6d75da58",
"assets/assets/images/smartphone.png": "2f2d52ef73ca90929e1b9ac0f7d1f155",
"assets/assets/images/ucuzal_logo.png": "91c633518b1c1e446916a993c8b19601",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ba2b6679e82babd241fa18451a8ddf2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "91c633518b1c1e446916a993c8b19601",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/android-chrome-192x192.png": "1a281692c14b9e33ceafee8608ec5e80",
"icons/android-chrome-512x512.png": "d967dcdb8d0e0ccfcdfefb62511b1bb3",
"icons/android-chrome-maskable-192x192.png": "77629bb3fe0b5227a46c8259b0e924c2",
"icons/android-chrome-maskable-512x512.png": "d967dcdb8d0e0ccfcdfefb62511b1bb3",
"index.html": "dedaad1525c7ec24d4a385ac6654ef04",
"/": "dedaad1525c7ec24d4a385ac6654ef04",
"main.dart.js": "f9fe0a7940aac3a27c70f2415493304e",
"manifest.json": "e4763d949d605f8afcb64907a71f685d",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
