# 🙏 Sistema de Doações para Igrejas - DonateFaith

Um sistema completo de gerenciamento de doações voltado para igrejas. O objetivo é facilitar a captação de recursos, o acompanhamento das metas de arrecadação e a transparência com os doadores.

## 📌 Funcionalidades

- Cadastro e login de usuários (com autenticação via token)
- Cadastro de igrejas e fundos de doação
- Criação e gerenciamento de metas de arrecadação
- Registro de doações vinculadas a metas
- Relatórios e gráficos de desempenho:
  - Total doado por meta
  - Meta com mais doações
  - Usuário que mais doou
  - Progresso diário de metas
  - Porcentagem de conclusão das metas
- Exportação de dados em Excel
- Suporte a múltiplas formas de pagamento (ex: cartão, Pix)

## 🧰 Tecnologias Utilizadas

### Backend
- C# (.NET 6+)
- Entity Framework Core
- ASP.NET Web API
- JWT (JSON Web Tokens) para autenticação
- ClosedXML para geração de planilhas Excel

### Frontend
- React + Next.js
- TailwindCSS
- Axios para consumo de API

### Banco de Dados
- SQL Server

## 🚀 Como Executar o Projeto

### Pré-requisitos

- .NET 6 ou superior
- Node.js 18+
- SQL Server
- Visual Studio ou VS Code
