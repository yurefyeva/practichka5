self.addEventListener('install', function(event){
  console.log('Service workers installing...', event);
})

self.addEventListener('activate', function(event){
  console.log('Activationg Service Workers', event);
  return self.clients.claim();
})

self.addEventListener('fetch', function(event){
  console.log('Fetching Something..', event);
})