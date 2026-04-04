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

Plataforma institucional e operacional web desenvolvida para um laboratório de diagnóstico e banco de sangue veterinário. O sistema digitaliza o fluxo de atendimento da recepção, permitindo:

- Agendamento de exames via WhatsApp com dados pré-formatados
- Triagem de doadores de sangue
- Captação de talentos (envio de currículos com anexo)

A aplicação foi construída sob uma arquitetura **100% serverless** (sem backend proprietário), com foco em:

- Alta performance de carregamento
- Responsividade mobile-first real
- UI/UX com percepção premium

---

## Arquitetura

O projeto utiliza uma arquitetura puramente **Frontend**, consumindo serviços de terceiros (Third-Party APIs) para mensageria e envio de dados, eliminando completamente a necessidade de um servidor backend dedicado.

### Estrutura de Diretórios

```text
frontend/
├── public/
│   └── images/         # Arquivos estáticos otimizados (logo.svg, mapa-unilab.jpg, etc)
├── src/
│   ├── app/            # Rotas da aplicação (Next.js App Router)
│   │   ├── banco-de-sangue/
│   │   ├── contato/
│   │   ├── exames/
│   │   ├── imagem/
│   │   ├── patologia/
│   │   ├── quem-somos/
│   │   └── trabalhe-conosco/
│   └── components/     # Componentes de UI reutilizáveis
├── tailwind.config.ts  # Design System (cores e tokens)

Stack Utilizada
Biblioteca	Uso
Next.js	Framework de renderização (App Router) e otimização
React	Construção de interfaces
TypeScript	Tipagem estática rigorosa
Tailwind CSS	Estilização utilitária e responsividade
Framer Motion	Animações e transições
Lucide React	Ícones SVG otimizados
FormSubmit	Infraestrutura serverless para formulários

Funcionalidades Implementadas
Navegação Inteligente (Header)
Layout adaptativo: Desktop completo + Bottom Sheet no mobile
Efeito Glassmorphism ao rolar
Micro-interações de UX (controle de estado e visibilidade)
Renderização condicional do logotipo

Diagnóstico por Imagem (/imagem)
Grid responsivo de alta performance
Serviços: Radiografia, Ultrassom, Ecocardiograma, ECG e Pressão arterial
Animações sequenciais com Framer Motion

Guia de Exames (/exames)
Sistema de Accordion interativo
Organização de +50 exames laboratoriais
Estrutura pensada para evitar scroll excessivo

Banco de Sangue (/banco-de-sangue)
Página otimizada para conversão
Formulário com pílulas de seleção (UX mobile)
Integração direta com WhatsApp (wa.me)
Serialização automática de dados

Trabalhe Conosco (/trabalhe-conosco)
Upload de arquivos sem backend
Feedback visual de envio
Integração AJAX com FormSubmit
Envio direto de currículo (PDF)

Contato (/contato)
Smart Links (ligação, WhatsApp e e-mail)
Card de emergência com destaque
Mapa estático otimizado com redirecionamento para GPS
Sem uso de iFrame pesado

🚀 Diferenciais Técnicos
Arquitetura zero backend (serverless real)
Integração com WhatsApp sem API paga
Upload de arquivos sem infraestrutura própria
UX mobile-first de verdade
Prevenção de scroll hijacking
Estrutura escalável sem banco de dados

Inconsistências e Pendências Conhecidas
#	Problema	Módulo	Impacto
1	Dados institucionais	Global	Aguardando conteúdo final
2	Ativação do FormSubmit	Trabalhe Conosco	Primeiro envio exige confirmação por e-mail

Como Rodar
Pré-requisitos
Node.js 18 ou superior
Inicialização
cd frontend
npm install
npm run dev

A aplicação estará disponível em:

http://localhost:3000


🌐 Deploy

https://unilab-nu.vercel.app


Estrutura de Rotas
Rota	Descrição
/	Landing page
/quem-somos	Institucional
/imagem	Diagnóstico por imagem
/patologia	Exames laboratoriais
/banco-de-sangue	Doadores
/exames	Catálogo de exames
/trabalhe-conosco	Currículos
/contato	Contato e localização

Decisões Técnicas

Arquitetura Serverless (FormSubmit)
Eliminação de backend próprio, reduzindo custo e complexidade.

Performance Mobile
Mapa estático substitui Google Maps embed para evitar travamento de scroll.

Escalabilidade (Accordion)
Permite crescimento do catálogo sem comprometer UX.

Next.js Image
Otimização automática e prevenção de CLS.

Design System com Tailwind
Padronização rígida de cores e estilos.

Framer Motion
Animações leves com foco em experiência.

📊 Métricas (futuro)
Lighthouse Performance
SEO Score
Accessibility
Tempo de carregamento
Autor

Desenvolvido por Felipe Marzochi
