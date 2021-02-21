const CACHE_KEY = "myPWAdemo";
const FILES_TO_CACHE = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/manifest.json",
  "/static/js/vendors~main.chunk.js",
  "/index.html",
  "/",
  "/users",
  "/favicon.ico",
];
const self = this;

self.addEventListener("install", (event) => {
  // wait till casheData is ready
  event.waitUntil(
    caches.open(CACHE_KEY).then((cache) => {
      // Save copy of all the urls that we want to cache
      cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Load data from cache only if there is no internet connection
  //   console.log(navigator);
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // If its availabel in cache then load from cache
        if (response) {
          return response;
        }
        // If page doesnt exists in cache then fetch it from server
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
