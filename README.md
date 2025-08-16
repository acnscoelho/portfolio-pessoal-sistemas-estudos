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
- 🎯 **[Épicos e User Stories](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/2.%C3%89picos-e-User-Stories)** - Histórias de usuário organizadas por épicos funcionais  
- ✅ **[Critérios de Aceite](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/3.Crit%C3%A9rios-de-Aceite)** - Critérios de validação para cada funcionalidade implementada
- - 📋 **[Requisitos Não Funcionais](https://github.com/acnscoelho/portfolio-pessoal-sistemas-estudos/wiki/4.Requisitos-Não-Funcionais)** - Especificação dos requisitos não funcionais

> 💡 **Nota**: Esta documentação faz parte do portfólio de análise de sistemas e demonstra o processo completo de levantamento de requisitos, análise e especificação de funcionalidades.

## Como Usar

### 1. Abrindo a Aplicação
- Abra o arquivo `index.html` no seu navegador
- Ou clique duas vezes no arquivo para abrir automaticamente

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
├── index.html          # Aplicação principal
└── README.md           # Este arquivo
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- Não requer conexão com internet

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- localStorage para persistência

## Características Técnicas

- **Responsivo**: Funciona em desktop e mobile
- **Single Page Application**: 4 abas organizadas (Matérias, Cronograma, Progresso, Backup)
- **Sem banco de dados**: Dados armazenados localmente
- **Interface moderna**: Design clean e intuitivo
- **Sistema de backup**: Exportação e importação completa de dados

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

## 🎯 Projeto de Portfólio

Este é um **projeto de portfólio profissional** que demonstra habilidades em:

- **📋 Análise de Requisitos** - Levantamento e especificação de necessidades funcionais
- **🎯 Gestão de Produto** - Épicos, User Stories e Critérios de Aceite
- **💻 Desenvolvimento Frontend** - HTML5, CSS3, JavaScript ES6+
- **📱 Design Responsivo** - Interface adaptável para múltiplos dispositivos
- **🔄 Versionamento** - Git Flow e estratégias de branching
- **📚 Documentação Técnica** - Especificações detalhadas e guias de uso

### 🚀 Características do Projeto

- ✅ **Sistema completamente funcional** - Aplicação web real e utilizável
- ✅ **Documentação profissional** - Requisitos, US e critérios completos
- ✅ **Código limpo e organizado** - Boas práticas de desenvolvimento
- ✅ **Responsividade total** - Funciona em desktop e mobile
- ✅ **Sem dependências externas** - Roda offline, sem APIs ou banco de dados

---

**📅 Data de criação**: Agosto 2025  
**🔢 Versão**: 1.0  
**👨‍💻 Desenvolvido por**: [Ana Cláudia Coelho](https://github.com/acnscoelho)
