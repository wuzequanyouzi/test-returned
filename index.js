import * as vite from 'vite';
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const server = vite.createServer({
  root: __dirname,
  server: {
    port: 1337,
  },
});

server.then(async _server => {
  _server.watcher.on('all', (type) => {
    switch (type) {
      case 'change':
        vite.build();
        break;
    
      default:
        break;
    }
  });
  
  await _server.listen();
  _server.printUrls()
})