self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
// 可選：如需離線快取再補 Cache API，先保持極簡避免快取舊版
