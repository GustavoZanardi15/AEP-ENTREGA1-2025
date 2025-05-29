# ♻️ Backend – AEP-ENTREGA1

Este é o servidor da aplicação de **Agendamento de Coletas Recicláveis**, desenvolvido com **Node.js + Express**. Ele expõe uma API REST simples para criação e listagem de agendamentos, armazenando os dados em memória.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📁 Estrutura de Pastas

backend/
├── index.js # Ponto de entrada da aplicação
├── package.json # Dependências e scripts
└── src/
├── data/
│ └── banco.js # Armazenamento temporário em memória
└── routes/
└── agendamentos.js # Rotas da API para agendamentos


---

## ⚙️ Como Executar

1. Acesse o diretório do backend:
```bash
cd backend

2. Instale as dependências:
npm install


3.Inicie o servidor:
node index.js

O servidor será iniciado em: http://localhost:3001


📌 Rotas Disponíveis
GET /agendamentos
Retorna todos os agendamentos cadastrados.

Exemplo de resposta:
[
  {
    "id": 1,
    "nome": "Gustavo Zanardi",
    "tipo": "Vidro",
    "data": "2025-06-01",
    "criadoEm": "2025-05-29T10:33:34.562Z"
  }
]


POST /agendamentos
Cadastra um novo agendamento.

Exemplo de requisição:
{
  "nome": "Gustavo Zanardi",
  "tipo": "Papel",
  "data": "2025-06-01"
}


Exemplo de resposta:
{
  "id": 2,
  "nome": "Gustavo Zanardi",
  "tipo": "Papel",
  "data": "2025-06-01",
  "criadoEm": "2025-05-29T11:00:00.000Z"
}


🛠️ Funcionalidades Implementadas
✅ Cadastro de agendamentos com nome, tipo de resíduo e data.
✅ Listagem de todos os agendamentos.
✅ Armazenamento temporário dos dados (in-memory).
✅ Middleware de CORS e JSON configurado.

📌 Observações
Os dados são armazenados temporariamente em memória (perdem-se ao reiniciar o servidor).

Este backend será integrado ao frontend React na sequência do projeto.


