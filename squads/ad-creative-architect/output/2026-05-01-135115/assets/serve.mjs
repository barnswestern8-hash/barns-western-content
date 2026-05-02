#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8891;
const ROOT = 'C:\\Users\\tarik\\Desktop\\Cloude';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.replace(/\?.*$/, ''));
  const filePath = path.join(ROOT, urlPath);

  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': mime,
        'Access-Control-Allow-Origin': '*',
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found: ' + urlPath);
    }
  } catch (e) {
    res.writeHead(500);
    res.end('Error: ' + e.message);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`READY http://127.0.0.1:${PORT}/`);
});
