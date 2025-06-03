![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Extra](https://img.shields.io/badge/Ponto%20Extra-Autentica%C3%A7%C3%A3o%20JWT-purple)

# 🌱 Sistema de Coleta – AEP ENTREGA 1

Este é um sistema web completo para **agendamento de coleta de resíduos recicláveis**, desenvolvido com foco social e sustentável. O projeto foi construído com **React + Tailwind CSS** no frontend e **Node.js + Express** no backend.

## 📁 Estrutura do Projeto

AEP-ENTREGA1/
├── backend/ # API REST com Express
│ ├── src/
│ │ └── server.js
│ ├── package.json
├── frontend/ # Interface do usuário com React + Tailwind
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ ├── package.json
└── README.md


---

## Tecnologias Utilizadas

- **Frontend**
  - React
  - React Router DOM
  - Tailwind CSS
  - Axios

- **Backend**
  - Node.js
  - Express
  - Cors
  - Nodemon (ambiente de desenvolvimento)

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js instalado (versão recomendada: 18+)
- Git instalado

---

### 1. Clone o repositório

```bash
git clone https://github.com/GustavoZanardi15/AEP-ENTREGA1-2025.git
cd AEP-ENTREGA1-2025


2. Rodar o Backend
cd backend
npm install       # Instala as dependências
npm run dev       # Inicia o servidor em http://localhost:3000
Se npm run dev der erro, instale o nodemon globalmente:
npm install -g nodemon



3. Rodar o Frontend
Abra um novo terminal:
cd frontend
npm install       # Instala as dependências
npm run dev       # Inicia o frontend em http://localhost:5173


Como Testar a Integração
Acesse http://localhost:5173 no navegador.

Use o menu fixo no topo para navegar entre:
Início
Agendar Coleta: preencha e envie o formulário.
Lista de Agendamentos: veja os dados salvos da API.
Os dados devem aparecer atualizados após uma nova coleta ser agendada.


Funcionalidades
Agendamento de coletas com nome, tipo de resíduo e data.
Listagem dos agendamentos com dados vindos da API.
Navegação fluida com React Router.


Notas Importantes
Sempre rode frontend e backend ao mesmo tempo para garantir o funcionamento completo.
O backend atual usa armazenamento em memória (os dados são perdidos ao reiniciar o servidor).
Para produção, considere integrar com banco de dados (como MongoDB, PostgreSQL etc.).


Desenvolvido como parte do desafio acadêmico da disciplina de Projeto Integrador (Unicesumar – 2025).
