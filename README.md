![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20v3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Animation-Framer%20Motion-E902B5?style=flat&logo=framer&logoColor=white)
![Serverless](https://img.shields.io/badge/Backend-Serverless%20(FormSubmit)-blue?style=flat)

**Status:** ⏳ Completo (aguardando dados da empresa para validação do MVP)

# Unilab — Laboratório Veterinário

---

## Sobre o Projeto

Plataforma institucional e operacional web desenvolvida para um laboratório de diagnóstico e banco de sangue veterinário. O sistema digitaliza o fluxo de atendimento da recepção, permitindo agendamento de exames via WhatsApp com dados pré-formatados, triagem de doadores de sangue e captação de talentos (envio de currículos).

O sistema foi construído sob uma arquitetura 100% serverless (sem backend proprietário), focando em alta performance de carregamento, responsividade mobile-first e UI/UX premium.

---

## Arquitetura

O projeto utiliza uma arquitetura puramente Frontend, consumindo serviços de terceiros (Third-Party APIs) para mensageria, eliminando a necessidade e o custo de manutenção de um servidor Backend dedicado.

### Estrutura de Diretórios

frontend/
├── public/
│   └── images/         # Arquivos estáticos otimizados (logo.svg, etc)
├── src/
│   ├── app/            # Rotas da aplicação (Next.js App Router)
│   │   ├── banco-de-sangue/
│   │   ├── contato/
│   │   ├── exames/
│   │   ├── imagem/
│   │   ├── patologia/
│   │   ├── quem-somos/
│   │   └── trabalhe-conosco/
│   └── components/     # Componentes de UI reutilizáveis (Header)
├── tailwind.config.ts  # Configurações do Design System (Cores: unilab-red, unilab-gray)


**Stack Utilizada:**

| Biblioteca | Uso |
|------------|-----|
| Next.js | Framework de renderização (App Router) e otimização de imagens |
| React | Construção de interfaces |
| TypeScript | Tipagem estática rigorosa |
| Tailwind CSS | Estilização utilitária e responsividade |
| Framer Motion | Animações fluidas de entrada e transições de tela |
| Lucide React | Biblioteca de ícones SVG otimizados |
| FormSubmit | Infraestrutura Serverless para envio de formulários e anexos |

---

## Funcionalidades Implementadas

### Navegação Inteligente (Header)
- Design responsivo adaptativo: layout expandido em telas grandes (Desktop) e Bottom Sheet (modal inferior) dinâmico no Mobile.
- Efeito "Glassmorphism" (fundo desfocado) ao rolar a página.
- Renderização condicional do logotipo visando a melhor legibilidade em cada dispositivo.

### Agendamento de Exames (`/exames`)
- Formulário de triagem clínica utilizando "Pílulas de Seleção" (botões de clique rápido) nativas para mobile.
- Formatação automática de URL: empacota os dados do paciente, tutor e veterinário solicitante e redireciona para o WhatsApp da clínica utilizando a API `wa.me`, eliminando a necessidade de banco de dados.

### Banco de Sangue (`/banco-de-sangue`)
- Apresentação do programa de doação com foco em conversão e segurança.
- Formulário clínico avançado com validação de campos obrigatórios (vacinas, transfusão prévia).
- Integração nativa `mailto:` com formatação limpa de quebras de linha para o aplicativo de e-mail padrão do usuário.

### Trabalhe Conosco (`/trabalhe-conosco`)
- **Upload de Arquivos sem Backend:** Implementação de input de arquivo dinâmico com feedback visual.
- Integração via AJAX com a API pública do **FormSubmit**, permitindo o envio do formulário junto com o arquivo PDF do currículo diretamente para o e-mail do RH da empresa, mantendo o usuário na mesma tela com status de carregamento e mensagem de sucesso.

### Contato (`/contato`)
- Cartões de contato interativos (Smart Links) para ligação direta, WhatsApp e E-mail.
- Cartão de Emergência com destaque em vermelho e botões de ação dupla (Discar / WhatsApp) exclusivo para o Plantão do Banco de Sangue.
- Link direto para roteamento via GPS (Google Maps).

---

## Inconsistências e Pendências Conhecidas

| # | Problema | Módulo | Impacto |
|---|----------|--------|---------|
| 1 | Dados Institucionais | Global | Aguardando textos finais, fotos da equipe e endereços reais para substituir o conteúdo placeholder (Lorem Ipsum/Drafts) do MVP. |
| 2 | Ativação do FormSubmit | Trabalhe Conosco | O primeiro e-mail enviado via tela de currículos exigirá um clique de ativação manual na caixa de entrada do Outlook do laboratório. |

---

## Como Rodar

### Pré-requisitos

- Node.js 18 ou superior

### Inicialização (Frontend)

Como o projeto não utiliza Backend proprietário, basta iniciar a interface gráfica:

```bash
# Entre na pasta do projeto
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
A aplicação estará disponível em http://localhost:3000.

Estrutura de Rotas
Rota	Descrição
/	Landing page principal
/quem-somos	História, infraestrutura e corpo clínico
/imagem	Serviços de diagnóstico por imagem (Raio-X, Ultrassom)
/patologia	Serviços de patologia e exames laboratoriais
/banco-de-sangue	Programa de doadores e formulário de triagem
/exames	Agendamento via WhatsApp integrado
/trabalhe-conosco	Vagas abertas e envio de currículo com anexo (Serverless)
/contato	Localização GPS, telefones e plantão de emergência
Decisões Técnicas
Arquitetura Serverless (FormSubmit): Em vez de construir e hospedar um servidor Node.js apenas para processar o envio de currículos em PDF, optou-se pela API gratuita do FormSubmit via AJAX. Isso reduziu o tempo de desenvolvimento, eliminou custos de infraestrutura e manteve a arquitetura enxuta (apenas front-end).

Next.js Image Component (<Image>): Utilizado nativamente em todo o projeto (como na renderização do logotipo SVG) para garantir otimização de banda, lazy loading automático e prevenção de Cumulative Layout Shift (CLS).

Tailwind CSS + Variáveis Estritas: O design system foi travado dentro do tailwind.config.ts (cores unilab-red, unilab-gray, unilab-offWhite). Isso impede que cores fora da identidade visual sejam aplicadas acidentalmente durante a escala do projeto.

Framer Motion: Aplicado em componentes de texto e modais para criar uma percepção de valor (Premium/Tech) na interface, guiando o olhar do usuário sem comprometer a performance.

Desenvolvido por Felipe Marzochi©
