# 🏦 Coop Cred

CoopCred Front-end é a interface web moderna do sistema de cooperativa de crédito desenvolvido em Angular 20.
O projeto se integra ao back-end [Coop Cred](https://github.com/raimundofullstack/coop-cred) (Node.js + MongoDB), responsável pela autenticação JWT, gerenciamento de contas e transações financeiras, presente em meu repositório.
Este repositório foca na experiência do usuário, incluindo autenticação, dashboard interativo e gerenciamento de contas (corrente e poupança).

## 🚀 Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## 🧩 Estrutura do Projeto

```
src/
 ├─ app/
 │   ├─ core/                     # Serviços e configurações globais
 │   ├─ features/
 │   │   ├─ auth/                 # Módulo de autenticação (login)
 │   │   └─ accounts/             # Módulo de contas e poupanças
 │   │       ├─ components/       # Componentes reutilizáveis
 │   │       ├─ models/           # Model de accounts
 │   │       ├─ pages/            # Páginas (Dashboard, etc.)
 │   │       └─ services/         # Serviços HTTP
 │   ├─ app.routes.ts             # Configuração das rotas principais
 │   └─ main.ts                   # Ponto de entrada da aplicação
 ├─ assets/                       # Ícones, imagens e estilos globais
 └─ environments/                 # Configurações de ambiente
```

## 💡 Funcionalidades

- ✅ Login de usuário, Criação de usuário, com validações e loading
- ✅ Dashboard com listagem de contas
- ✅ Extrato individual de cada conta
- ✅ Criação de nova conta poupança com objetivo (modal interativo)
- ✅ Atualização automática da lista após criação
- ✅ Logout funcional e redirecionamento para tela de login
- ✅ Integração com backend Node.js / MongoDB

## 🧱 Como Rodar o Projeto

```
# Instalar dependências
npm install

# Rodar o servidor local
npm start

# Acessar no navegador
http://localhost:4200

```

## 🧭 Próximos Passos

- Permitir realizar "depositos", "saques" e "transferencias"
- Adicionar dashboard financeiro com gráficos (saldo, metas, etc.)
- Adicionar tema escuro (dark mode)

## 👨‍💻 Autor

Raimundo Martins | Desenvolvedor Full Stack

💼 Projeto desenvolvido para fins de demonstração de arquitetura front-end moderna com Angular, TypeScript e conexão API ao back-end.
