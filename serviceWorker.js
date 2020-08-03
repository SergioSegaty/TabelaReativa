var cacheName = "ListaTarefas";
var filesToCache = [
    "/",
    "/index.html",
    "/src/js/app.js",
    "/src/js/controller.js",
    "/src/js/models.js",
    "/src/js/unitTest.js",
    "/src/js/main.js",
    "/src/css/styles.css"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});