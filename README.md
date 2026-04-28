# Teste Front-End - Econverse

Bem-vindo(a) ao repositório do Teste Técnico para a vaga de Desenvolvedor Front-End da Econverse! Este projeto consiste na construção de uma landing page e-commerce baseada no layout fornecido no Figma, com foco absoluto em fidelidade visual (Pixel Perfect), componentização em React e consumo dinâmico de dados.

## Tecnologias Utilizadas

* **React** + **TypeScript**
* **Vite** (para build e dev server super rápidos)
* **Sass (SCSS)** (para estilização componentizada, utilizando variáveis e aninhamentos)
* **HTML Semântico** (foco em acessibilidade e boas práticas de SEO)

## Como compilar, testar e rodar o projeto

Siga o passo a passo abaixo para executar o projeto localmente na sua máquina de forma rápida e fácil.

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado na máquina.
* Gerenciador de pacotes de sua preferência (NPM, Yarn ou PNPM).

### 1. Instalação
Clone este repositório para a sua máquina e acesse a pasta principal do projeto. Em seguida, instale as dependências:

```bash
# Clone o repositório
git clone [https://github.com/alacoka/teste-front-end.git](https://github.com/alacoka/teste-front-end.git)

# Acesse a pasta do frontend
cd teste-front-end/teste-front-end

# Instale as dependências
npm install
```

### 2. Rodando o projeto (Modo de Desenvolvimento)
Para iniciar o servidor local em modo de desenvolvimento (com HMR):

```bash
npm run dev
```
Após executar o comando, acesse a URL indicada no terminal (geralmente `http://localhost:5173`) no seu navegador.

### 3. Compilando o projeto (Build)
Para compilar o TypeScript e gerar os arquivos estáticos otimizados para produção:

```bash
npm run build
```
Este comando criará a pasta `dist` com a versão final da aplicação.

## Notas de Desenvolvimento e Soluções Adotadas

* **Consumo do JSON & CORS:** A integração com a lista de produtos possui restrições de CORS (Cross-Origin Resource Sharing) caso seja acessada diretamente via `localhost` no navegador ou em deploys estáticos simples. Para garantir que a aplicação possa ser testada e rodada perfeitamente pelos avaliadores durante o `npm run preview` e `npm run dev`, os dados foram incluídos localmente e importados diretamente. A lógica completa da requisição da API via `fetch` foi implementada e mantida comentada no componente `Vitrine`, demonstrando o conhecimento técnico de integração externa e resolução de problemas de rede.
* **Pixel Perfect:** As medidas (width/height), espaçamentos (gaps/paddings) e o hexadecimal das cores do Figma foram seguidos rigorosamente para garantir a máxima fidelidade ao layout proposto.
* **Componentização:** O layout foi arquitetado e dividido em componentes independentes (`Header`, `Banner`, `Vitrine`, `ProductCard`, `ProductModal`, `Categories`, `Partners`, `Brands` e `Footer`) para facilitar a manutenção e escalabilidade do código. O Modal de produtos gerencia seu próprio ciclo de vida através dos estados controlados pela `Vitrine`.

---
Desenvolvido com ☕ e dedicação por Kawã Alacoque.