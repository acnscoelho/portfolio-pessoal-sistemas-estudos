# Sistema de Controle de Estudos

Sistema web para controle e organização de estudos para concursos públicos.

## Funcionalidades

### ✅ Implementadas

1. **Gerenciamento de Matérias**
   - Adicionar matérias com nome e prazo
   - Excluir matérias cadastradas
   - Alterar dificuldade das matérias

2. **Controle de Dificuldade**
   - Classificação em três níveis: Fácil, Médio, Difícil
   - Alteração de dificuldade a qualquer momento

3. **Planejamento Automático**
   - Cálculo automático de horas por dia/semana
   - Distribui **66.5 horas semanais** entre todas as matérias
   - Baseado na dificuldade, prazo e dias selecionados
   - Sistema de pesos por dificuldade:
     - Fácil: Peso 1 (menor prioridade)
     - Médio: Peso 1.5 (prioridade média)
     - Difícil: Peso 2 (maior prioridade)
   - **Seleção de dias**: Cada matéria pode ser estudada em dias específicos
   - **Cálculo inteligente**: Considera quantidade de dias + dificuldade na distribuição

4. **Gerenciamento de Tópicos**
   - Adicionar tópicos específicos por matéria
   - Marcar tópicos como estudados
   - Excluir tópicos

5. **Cronograma Semanal**
   - Visualização da distribuição de estudos
   - Organização por dias da semana
   - Cálculo automático do tempo por matéria

6. **Acompanhamento de Progresso**
   - Estatísticas gerais de estudo
   - Progresso individual por matéria
   - Percentual de conclusão baseado nos tópicos

7. **Persistência de Dados**
   - Armazenamento local com localStorage
   - Dados mantidos entre sessões
   - Sistema de backup e restauração completo

## 📚 Documentação

Este projeto possui documentação completa disponível no Wiki do repositório:

- 📋 **[Requisitos Funcionais](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/1.Requisitos-Funcionais)** - Especificação detalhada dos 7 requisitos que basearam o desenvolvimento
- 🎯 **[Épicos e User Stories](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/2.Épicos-e-User-Stories)** - Histórias de usuário organizadas por épicos funcionais  
- ✅ **[Critérios de Aceite](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/3.Critérios-de-Aceite)** - Critérios de validação para cada funcionalidade implementada
- 📋 **[Requisitos Não Funcionais](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/4.Requisitos-Não-Funcionais)** - Especificação dos requisitos não funcionais

> 💡 **Nota**: Esta documentação é referente à análise de sistemas e demonstra o processo completo de levantamento de requisitos, análise e especificação de funcionalidades.

## 📋 Documentação de Testes

O projeto inclui documentação completa de **planos e casos de teste** na pasta `documentos/`:

- 📄 **[Plano e Estratégia de Testes](./documentos/Plano%20e%20Estratégia%20de%20Testes%20Adaptada_Plano_de_teste.docx)** - Estratégia de testes adaptada para o sistema
- 🧪 **[Casos de Teste Funcionais](./documentos/Caso%20de%20Teste%20Funcional.docx)** - Casos de teste baseados nos 7 requisitos funcionais
- ⚡ **[Casos de Teste Não Funcionais](./documentos/Caso%20de%20Teste%20Não%20Funcional.docx)** - Testes de performance, usabilidade, compatibilidade e acessibilidade

> 📊 **Nota**: Estes documentos demonstram a aplicação prática de **técnicas de teste** e **estratégias de validação** seguindo metodologias profissionais de QA.

## 🐛 Bugs Identificados

Durante os testes do sistema, foram identificados alguns bugs que estão **documentados e rastreados** no GitHub Issues:

- 🔗 **[Visualizar Bugs Reportados](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/issues)** - Lista completa de bugs identificados durante os testes

### Principais Issues Identificadas:
- **Issue #7**: Mensagem de erro ao restaurar backup (funcionalidade funciona, mas exibe erro)
- **Issue #6**: Cronograma mostra quantidade incorreta de matérias
- **Issue #5**: Sistema aceita datas inválidas no prazo de conclusão

> 📋 **Nota**: Esta seção demonstra o processo de **identificação, documentação e rastreamento de defeitos** como parte do portfólio de testes.

## 🎬 Demonstrações de Testes Não Funcionais

### 📱 **RNF02 - Responsividade**
📹 **[Assistir: Teste de Responsividade](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/releases/download/v1.0-videos/responsividade.mp4)**

**Demonstrado:**
- ✅ Adaptação automática para diferentes tamanhos de tela
- ✅ Layout responsivo mantendo funcionalidade completa

---

### 🌐 **RNF03 - Compatibilidade de Navegadores** 
📹 **[Assistir: Teste de Compatibilidade](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/releases/download/v1.0-videos/compatibilidade.mp4)**

**Navegadores Testados:**
- ✅ **Chrome**
- ✅ **Firefox** 
- ✅ **Edge**
- ✅ **Safari**

---

### ♿ **RNF07 - Acessibilidade**
📹 **[Assistir: Teste de Acessibilidade](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/releases/download/v1.0-videos/acessibilidade.mp4)**

**Funcionalidades Testadas:**
- ✅ **Navegação por teclado** (Tab para navegar entre elementos)
- ✅ **Tecla Enter** para confirmar ações e adicionar matérias

---

> 📹 **Nota**: Vídeos demonstram execução prática dos **Requisitos Não Funcionais** especificados na [documentação de testes](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/4.Requisitos-Não-Funcionais).

## 🚀 Servidor Localhost Otimizado

## Como Usar

### 1. Iniciando a Aplicação

#### **🚀 Método Recomendado (Servidor Localhost):**
```bash
# 1. Instalar dependências do Node.js
npm install

# 2. Iniciar servidor otimizado
npm start
# ou para desenvolvimento:
npm run dev

# 3. Acessar no navegador:
# http://localhost:3000
```

#### **📂 Método Alternativo (Arquivo Direto):**
- Abra o arquivo `index.html` diretamente no navegador
- **Limitação**: Não suporta testes de performance automatizados

> 💡 **Recomendação**: Use o servidor localhost para melhor performance e compatibilidade com ferramentas de teste

### **📋 Scripts NPM Disponíveis:**
```bash
npm start                    # Iniciar servidor em modo produção
npm run dev                  # Iniciar servidor em modo desenvolvimento
npm run test:k6              # Executar testes de performance K6
npm run test-k6-with-export  # Executar testes K6 + exportar resultados JSON
npm run dash_k6              # Executar testes K6 com dashboard web
npm run test:cypress         # Executar testes E2E Cypress (futuro)
```
### **📊 Dashboard Web K6:**
```bash
# Executar testes com dashboard web interativo
npm run dash_k6

# Após execução, será gerado:
# - html-report.html (na raiz do projeto)
# - Dashboard mostra métricas em tempo real
# - Gráficos interativos de performance
# - Timeline detalhado das requests
```

**🎯 Benefícios do Dashboard:**
- ✅ **Visualização em tempo real** durante os testes
- ✅ **Gráficos interativos** de latência e throughput  
- ✅ **Timeline detalhado** de todas as requests
- ✅ **Relatório HTML** profissional para apresentações

### **📊 Resultado do Dashboard K6 - Teste de Stress Gradual**

O dashboard gerado mostra visualmente o comportamento do sistema durante o teste de ramp-up:

#### **📈 HTTP Performance Overview:**
- **Request Rate**: Crescimento gradual de 0 a ~100 req/s
- **Request Duration P95**: Mantido consistentemente abaixo de 60ms
- **Request Failed**: Zero falhas durante todo o teste (linha verde constante)

#### **👥 Virtual Users (VUs):**
- **Ramp-up suave**: 0 → 10 → 50 → 100 usuários ao longo de 3m35s
- **Comportamento linear**: Crescimento controlado e previsível
- **Pico sustentado**: 100 usuários simultâneos por 2 minutos

#### **📊 Transfer Rate:**
- **Volume crescente**: 0 → 4 MB/s no pico
- **Capacidade sustentada**: 4 MB/s mantidos durante pico de carga
- **Total transferido**: ~500MB de dados processados com sucesso

#### **🎯 Insights Visuais:**
- **Degradação zero**: Performance mantida estável mesmo com 10x mais usuários
- **Escalabilidade comprovada**: Sistema responde linearmente ao aumento de carga
- **Confiabilidade total**: Gráfico de falhas permanece em zero durante todo o teste

> 📸 **Dashboard gerado**: `html-report.html` - Relatório interativo com timestamp: 2025-08-18 19:30:28

### 2. Adicionando Matérias
1. Na aba "Matérias", preencha:
   - Nome da matéria (ex: Matemática)
   - Prazo para conclusão
   - Nível de dificuldade
2. Clique em "Adicionar Matéria"

### 3. Configurando Dias de Estudo
1. Clique em "Dias da Semana" na matéria desejada
2. Selecione os dias que deseja estudar essa matéria
3. Clique em "Salvar Dias"
4. O sistema recalculará automaticamente as horas

### 4. Gerenciando Tópicos
1. Clique em "Gerenciar Tópicos" na matéria desejada
2. Digite o nome do tópico (ex: Álgebra Linear)
3. Clique em "Adicionar Tópico"
4. Marque os tópicos conforme for estudando

### 5. Visualizando o Cronograma
1. Acesse a aba "Cronograma"
2. Veja a distribuição semanal de estudos
3. Cada dia mostra apenas as matérias programadas para aquele dia

### 6. Acompanhando o Progresso
1. Acesse a aba "Progresso"
2. Visualize estatísticas gerais
3. Acompanhe o progresso de cada matéria

### 7. Backup e Restauração
1. **Fazer Backup:**
   - Acesse a aba "Backup"
   - Clique em "💾 Baixar Backup"
   - Arquivo será salvo como `backup-estudos-YYYY-MM-DD.json`

2. **Restaurar Backup:**
   - Acesse a aba "Backup"
   - Clique em "Escolher arquivo" e selecione seu backup (.json)
   - Clique em "📥 Restaurar Backup"
   - Confirme a substituição dos dados

3. **Limpar Dados:**
   - Use apenas se quiser recomeçar do zero
   - Ação irreversível - faça backup antes!

## 📊 Sistema de Distribuição de Horas (66.5h semanais)

O sistema distribui automaticamente **66.5 horas semanais** entre suas matérias baseado nos pesos de dificuldade **E** nos dias selecionados:

### Fórmula de Cálculo:
- **Peso Final** = Peso da Dificuldade × Quantidade de Dias
- **Pesos de Dificuldade**: Fácil (1) | Médio (1.5) | Difícil (2)

### Exemplos Práticos:

**Exemplo 1 - Considerando dias da semana:**
- **Matemática** (Difícil, 5 dias) = peso 2 × 5 = **10**
- **Português** (Médio, 7 dias) = peso 1.5 × 7 = **10.5**  
- **Informática** (Fácil, 3 dias) = peso 1 × 3 = **3**
- **Total de pesos:** 23.5
- **Distribuição:**
  - Matemática: (10/23.5) × 66.5h = **28.3h/semana** (5.7h/dia nos 5 dias)
  - Português: (10.5/23.5) × 66.5h = **29.7h/semana** (4.2h/dia nos 7 dias)
  - Informática: (3/23.5) × 66.5h = **8.5h/semana** (2.8h/dia nos 3 dias)

**Exemplo 2 - Matérias com mesmo peso, dias diferentes:**
- **Direito** (Difícil, 7 dias) = peso 2 × 7 = **14**
- **História** (Difícil, 3 dias) = peso 2 × 3 = **6**
- **Total de pesos:** 20
- **Distribuição:**
  - Direito: (14/20) × 66.5h = **46.6h/semana** (6.7h/dia nos 7 dias)
  - História: (6/20) × 66.5h = **19.9h/semana** (6.6h/dia nos 3 dias)

## Estrutura do Projeto

```
C:\sistema-estudos\
├── documentos/
│   ├── Caso de Teste Funcional.docx                    # Casos de teste funcionais
│   ├── Caso de Teste Não Funcional.docx               # Casos de teste não funcionais  
│   └── Plano e Estratégia de Testes Adaptada_Plano_de_teste.docx  # Plano de testes
├── test/
│   └── K6/
│       ├── results/                                    # Resultados JSON dos testes (gerado)
│       └── performance.test.js                         # Script de testes K6
├── cypress/
│   └── e2e/
│       └── index.cy.js                                 # Testes E2E automatizados com Cypress
├── node_modules/                                       # Dependências do Node.js (gerado)
├── html-report.html                                    # Dashboard web K6 (gerado)
├── index.html                                          # Aplicação principal (SPA)
├── server.js                                           # Servidor Node.js otimizado
├── package.json                                        # Dependências e scripts NPM
└── README.md                                           # Documentação do projeto
```

## Requisitos

### **🚀 Para Servidor Localhost (Recomendado):**
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **NPM** (incluído com Node.js)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado

### **📂 Para Acesso Direto (Limitado):**
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- **Limitação**: Não suporta testes de performance automatizados

### **🧪 Para Testes Automatizados (Opcional):**
- **K6** para testes de performance ([Download](https://k6.io/))
- **Cypress** para testes E2E ([Docs](https://www.cypress.io/))

> 💡 **Nota**: O sistema funciona offline em ambos os métodos

## Tecnologias Utilizadas

### **📱 Frontend:**
- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- localStorage para persistência

### **🚀 Backend/Servidor:**
- Node.js
- Express.js (framework web)
- NPM para gerenciamento de dependências

### **🧪 Testes e Automação:**
- K6 para testes de performance
- Cypress para testes E2E
- Scripts de automação em JavaScript
- Export de resultados em JSON para análise
- Dashboard web interativo para visualização em tempo real

## Características Técnicas

### **🎯 Frontend:**
- **Responsivo**: Funciona em desktop e mobile
- **Single Page Application**: 4 abas organizadas (Matérias, Cronograma, Progresso, Backup)
- **Sem banco de dados**: Dados armazenados localmente
- **Interface moderna**: Design clean e intuitivo
- **Sistema de backup**: Exportação e importação completa de dados

### **⚡ Performance:**
- **Servidor Node.js otimizado**: Suporta 100+ usuários simultâneos
- **Cache inteligente**: Headers otimizados para performance
- **Connection pooling**: Gerenciamento eficiente de conexões
- **Zero falhas**: 100% de taxa de sucesso em testes de carga

### **🧪 Testabilidade:**
- **Testes automatizados**: Compatível com K6 e Cypress
- **Métricas precisas**: Monitoramento de performance real
- **Dashboard interativo**: Visualização web em tempo real
- **Export de resultados**: Relatórios JSON e HTML para análise detalhada
- **Thresholds rigorosos**: P90 < 150ms, P95 < 300ms, Max < 800ms
- **CI/CD ready**: Servidor estável para automação

### **📊 Comandos de Teste K6:**

```bash
# Teste básico de performance
npm run test:k6

# Teste com export JSON para análise
npm run test-k6-with-export

# Teste com dashboard web interativo
npm run dash_k6
```

**🎯 Cenários de Teste Disponíveis:**
- **Ramp-up gradual**: 0 → 10 → 50 → 100 usuários em 3m35s
- **Thresholds enterprise**: Limites rigorosos de latência e falhas
- **Validação completa**: Status, tempo de resposta, throughput
- **Visualização avançada**: Dashboard com gráficos em tempo real

## 💾 Sistema de Backup

### Quando Fazer Backup?
- **Antes de limpar dados do navegador**
- **Antes de trocar de computador/navegador**
- **Semanalmente** (como precaução)
- **Antes de grandes atualizações do sistema**

### Formato do Backup
- **Arquivo**: `backup-estudos-YYYY-MM-DD.json`
- **Conteúdo**: Todas as matérias, tópicos, dificuldades, dias da semana e progresso
- **Compatibilidade**: Funciona entre Chrome, Firefox, Edge, Safari
- **Portabilidade**: Transfere dados entre diferentes computadores

### Segurança
- ✅ Dados ficam apenas no seu computador
- ✅ Nenhuma informação é enviada para servidores
- ✅ Backup pode ser armazenado onde você quiser
- ✅ Arquivo JSON pode ser aberto em qualquer editor de texto

### 🚀 Características do Projeto

- ✅ **Sistema completamente funcional** - Aplicação web real e utilizável
- ✅ **Infraestrutura otimizada** - Servidor Node.js para alta performance
- ✅ **Documentação profissional** - Requisitos, US e critérios completos
- ✅ **Testes automatizados** - Performance validada com K6
- ✅ **Testes automatizados** - Os testes com Cypress simulam interações reais do usuário, como preenchimento de formulários, navegação e validação de mensagens na interface.
- ✅ **Código limpo e organizado** - Boas práticas de desenvolvimento
- ✅ **Responsividade total** - Funciona em desktop e mobile
- ✅ **Análise comparativa** - Métricas antes/depois da otimização
- ✅ **Dashboard K6 profissional** - Visualização interativa de performance
- ✅ **Testes rigorosos** - Thresholds enterprise-grade com 100% aprovação
- ✅ **Zero dependências externas** - Roda offline, sem APIs ou banco de dados
- ✅ **Escalabilidade comprovada** - Testado com 100+ usuários simultâneos
- ✅ **Evidência visual** - Relatórios HTML com timestamp e gráficos detalhados

## 📋 Changelog

### **🚀 Versão 1.1** - Agosto 2025
**"Servidor Node.js Otimizado"**

#### **✨ Novidades:**
- 🏗️ **Servidor Node.js + Express** para alta performance
- 🧪 **Testes automatizados K6** para validação de carga
- 📊 **Dashboard web interativo** para visualização em tempo real
- 📦 **Scripts NPM** para automação de tarefas
- ⚡ **Performance melhorada**: 50% → 100% sucesso com 100 usuários
- 📈 **Export de resultados** em JSON e HTML para análise
- 📚 **Documentação expandida** com métricas e comparações

#### **🔧 Melhorias Técnicas:**
- Zero falhas em testes de carga (vs 35-50% falhas anteriores)
- Tempo de resposta otimizado (20ms médio com 100 usuários, P95 < 75ms)
- Suporte a 100+ usuários simultâneos (vs ~25 anteriores)
- Connection pooling e cache inteligente
- Dashboard web K6 com métricas visuais em tempo real
- Thresholds rigorosos: P90 < 150ms, P95 < 300ms, Max < 800ms
- Throughput sustentado de 50+ req/s e 4 MB/s de transferência

#### **🔄 Compatibilidade:**
- ✅ Mantém acesso direto ao `index.html`
- ✅ Todas as funcionalidades preservadas
- ✅ Zero breaking changes

### **📦 Versão 1.0** - Agosto 2025
**"Lançamento Inicial"**
- Sistema SPA completo com 7 requisitos funcionais
- Interface responsiva e moderna
- Sistema de backup/restauração
- Documentação completa (Wiki + README)

---

**📅 Data de criação**: Agosto 2025  
**🔢 Versão**: 1.1 - Servidor Node.js Otimizado  
**👨‍💻 Desenvolvido por**: [Ana Cláudia Coelho](https://github.com/acnscoelho)
