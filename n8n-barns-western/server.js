/**
 * Servidor HTTP local — Receptor de comandos do n8n para Claude Code
 * Rode com: node server.js
 */

const http = require('http');
const { exec } = require('child_process');

// ============================================================
// CONFIGURAÇÕES — Ajuste aqui
// ============================================================
const SECRET_TOKEN = 'Tarik8952'; // Mesmo valor que você vai colocar no n8n
const PORT = 3000;
const PROJECT_DIR = 'C:\\Users\\tarik\\Desktop\\Cloude';
// ============================================================

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();

  // Aceita apenas POST /run-squad
  if (req.method !== 'POST' || req.url !== '/run-squad') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  // Verifica autenticação
  if (req.headers['x-api-key'] !== SECRET_TOKEN) {
    console.warn(`[${timestamp}] Tentativa não autorizada bloqueada`);
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  console.log(`[${timestamp}] Comando recebido do n8n — iniciando squad...`);

  // Responde imediatamente para n8n não fazer timeout (Claude pode demorar)
  res.writeHead(202, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: true,
    message: 'Squad Barns Western Content iniciado em background',
    timestamp
  }));

  // Executa o Claude Code em background
  const command = `"C:\\Users\\tarik\\AppData\\Roaming\\npm\\claude.cmd" -p "/opensquad run barns-western-content"`;

  exec(command, {
    cwd: PROJECT_DIR,
    timeout: 600000, // 10 minutos máximo
    env: { ...process.env }
  }, (error, stdout, stderr) => {
    const doneAt = new Date().toISOString();
    if (error) {
      console.error(`[${doneAt}] ERRO na execução:`, error.message);
      if (stderr) console.error('stderr:', stderr);
      return;
    }
    console.log(`[${doneAt}] Squad concluído com sucesso!`);
    if (stdout) console.log('Output:', stdout.substring(0, 500));
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('================================================');
  console.log(' Servidor Claude Code Trigger rodando!');
  console.log(`  URL local: http://localhost:${PORT}/run-squad`);
  console.log(`  Projeto:   ${PROJECT_DIR}`);
  console.log('================================================');
  console.log('Aguardando comandos do n8n via túnel...\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Servidor encerrado.');
  server.close();
});
