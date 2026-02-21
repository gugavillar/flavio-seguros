# 🛡️ Flávio Seguros

Site institucional da **Flávio Seguros**, desenvolvido com **TanStack Start** utilizando **Server-Side Rendering (SSR)**, com foco em **performance, SEO, escalabilidade e manutenibilidade**.

O projeto utiliza uma stack moderna do ecossistema React, priorizando tipagem forte, validações seguras e boa experiência de desenvolvimento (DX).

---

## 🧱 Stack técnica

### Core
- ⚡ **TanStack Start** — Framework fullstack baseado em TanStack Router
- ⚛️ **React 18**
- 🟦 **TypeScript**

### UI & UX
- 🎨 **Tailwind CSS** — Estilização utilitária e responsiva
- 🧩 **Swiper** — Sliders e carrosséis interativos
- 🎯 **Lucide React** — Biblioteca de ícones SVG

### Validação & Forms
- ✅ **Zod** — Schemas de validação e inferência de tipos

### Autenticação
- 🔐 **Better Auth** — Autenticação moderna, desacoplada e segura
- 🔐 **Google OAuth** — Autenticação com Google

---

## 🧠 Arquitetura

- Renderização **SSR** para melhor indexação e tempo de carregamento
- File-based routing com **TanStack Router**
- Separação clara de responsabilidades (UI, features, lib)
- Validações centralizadas com Zod
- Componentização orientada a reuso

---

## 📌 Funcionalidades

- Apresentação de produtos de seguros (ex: vida, viagem, auto, residencial)
- Layout responsivo (mobile-first)
- Sliders e seções dinâmicas com Swiper
- Validação de params de rotas com Zod
- Integração com autenticação via Better Auth e Google OAuth
- Estrutura preparada para SEO e expansão futura

---

## 🖥️ Requisitos

- **Node.js** >= 18
- **pnpm** (recomendado)

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/gugavillar/flavio-seguros.git
cd flavio-seguros

# Instale as dependências: 
pnpm install

# Rode o projeto em modo de desenvolvimento:
pnpm dev
```

## Estrutura de pastas
```bash
src/
 ├─ routes/        # Rotas e layouts (TanStack Router)
 ├─ components/    
 |   ├─ core/      # Componentes reutilizáveis de UI
 |   ├─ public/    # Componentes da página pública
 |   └─ admin/     # Componentes da página de admin
 ├─ lib/           # Better Auth, Prismic, etc
 ├─ contexts/      # Contextos globais
 ├─ formatters/    # Funções de formatação
 ├─ utils/         # Funções utilitárias
 └─ public/        # Imagens e arquivos estáticos
 ```