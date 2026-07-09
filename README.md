# React Movies App

Aplicação web desenvolvida com **React + TypeScript** para busca e navegação de filmes, com foco em experiência do usuário, componentização e boas práticas de desenvolvimento Front-end.

O projeto consome a API pública do TMDB (The Movie Database) e implementa funcionalidades modernas presentes em aplicações reais do mercado, como busca dinâmica, scroll infinito e skeleton loading.

---

## 📸 Demonstração

<p align="center">
  <img width="933" height="916" alt="Animação da aplicação" src="/src/assets/movies-app-animation.gif" />
</p>

---

## Tecnologias utilizadas

- React
- TypeScript
- React Router
- CSS Modules
- Git & GitHub

---

## Funcionalidades

- Consumo de API de filmes (TMDB)
- Busca dinâmica com debounce
- Scroll infinito com paginação via API
- Skeleton loading
- Loading states e tratamento de erros
- Rotas dinâmicas com useParams e useLocation
- Custom Hooks
- Dropdown Menu
- Interface responsiva
- Versionamento com Git

---

## Conceitos trabalhados

Este projeto foi desenvolvido com foco em consolidar conhecimentos de Front-end moderno, incluindo:

- Componentização e reutilização de código
- Gerenciamento de estado
- Consumo de APIs REST
- Navegação entre páginas e manipulação de rotas
- Performance com debounce
- Organização escalável de projetos React
- Estruturação com TypeScript
- Experiência do usuário (UX)

---

## Aprendizados

Este projeto foi onde mais desenvolvi minha noção de **arquitetura de aplicação** — como organizar pastas, separar responsabilidades e escrever código que outros desenvolvedores consigam entender e manter.

O maior desafio técnico foi a implementação do **scroll infinito**: foi necessário entender quais dados a API disponibilizava (total de páginas, página atual), transformá-los dinamicamente no estado da aplicação e orquestrar corretamente o `useState` para acumular os filmes e o `useEffect` para controlar quando uma nova requisição deveria acontecer.

A migração do projeto para **TypeScript** também foi um aprendizado importante, tipar props, estados e retornos de função tornou o código mais seguro e me forçou a pensar com mais precisão sobre os dados que trafegam na aplicação.

---

## 📸 Preview

> Em desenvolvimento 🚧

---

## Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/gutosavi/react-movies-app

# Acesse a pasta
cd react-movies-app

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com o seu token da API do TMDB:

```
VITE_TOKEN=seu_token_aqui
```

> Para obter um token, crie uma conta em [themoviedb.org](https://www.themoviedb.org/) e gere uma chave de API nas configurações da conta.

```bash
# Execute o projeto
npm run dev
```

---

## Acesse o projeto

**GitHub:** https://github.com/gutosavi/react-movies-app

---

## Autor

### Gustavo Savi

- LinkedIn: https://www.linkedin.com/in/gustavo-savi
- GitHub: https://github.com/gutosavi
