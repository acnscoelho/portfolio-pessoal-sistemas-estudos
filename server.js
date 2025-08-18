const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para logs (opcional)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos com cache otimizado
app.use(express.static('.', {
  maxAge: '1d',        // Cache por 1 dia
  etag: true,          // ETags para cache inteligente
  lastModified: true,  // Headers de última modificação
  index: ['index.html'] // Arquivo padrão
}));

// Rota para SPA - todas as rotas retornam index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Sistema de Controle de Estudos rodando em:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`📊 Pronto para testes K6 e Cypress!`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Servidor sendo finalizado...');
  process.exit(0);
});
