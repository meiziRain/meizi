const cacheName = 'v1';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
            ]);
        })
    );
});
this.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});
// this.addEventListener('fetch', e => {
//     e.respondWith(
//         fetch(e.request)
//         .then(res => {
//             const resClone = res.clone();
//             caches
//                 .open(cacheName)
//                 .then(cache => {
//                     cache.put(e.request, resClone);
//                 });
//             return res;
//         }).catch(err => caches.match(e.request).then(res => res))
//     );
// });