# Vitrine de produtos Econverse

Este é o meu projeto para o teste de front-end da Econverse. Montei uma página em React e TypeScript a partir do layout do Figma, com uma vitrine de produtos que consome um arquivo JSON e abre um modal com os detalhes do produto escolhido.

## Tecnologias

- **React** e **TypeScript**, para os componentes e a tipagem dos dados
- **Vite**, para o servidor de desenvolvimento e o build
- **Sass (SCSS)**, para os estilos, com a convenção BEM nos nomes das classes
- **ESLint**, para checar o código

Não usei nenhuma biblioteca de componentes visuais (como Bootstrap). Todos os estilos são meus.

## Como rodar o projeto

### Pré-requisitos

- Node.js na versão 20.19 ou superior
- npm (já vem com o Node)

### Passo a passo

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/leotakahashii/econverse-test.git
   cd econverse-test
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço que o Vite mostrar no terminal, normalmente `http://localhost:5173/`.

### Outros comandos

| Comando | O que faz |
| --- | --- |
| `npm run build` | Confere os tipos do TypeScript e gera a versão de produção na pasta `dist` |
| `npm run lint` | Roda o ESLint em todo o projeto |
| `npm run preview` | Abre a versão gerada pelo build (veja a observação abaixo) |

## Sobre o proxy do Vite

O JSON de produtos fica em `app.econverse.com.br`, e esse servidor não envia o cabeçalho que permite o acesso de outro endereço (CORS). Por isso, buscar os dados direto do navegador, em `localhost`, falha.

Para resolver, configurei um **proxy** no `vite.config.ts`. O código pede os dados a um caminho local (`/api-produtos/...`), e o servidor do Vite repassa o pedido para a Econverse. Para o navegador, tudo vem do mesmo endereço, e o bloqueio some.

**Importante:** esse proxy só existe no servidor de desenvolvimento (`npm run dev`). Se o projeto for publicado em um servidor de verdade, será preciso configurar um proxy equivalente na hospedagem, ou pedir que o servidor da Econverse libere o CORS. Por isso, para avaliar o projeto, use o `npm run dev`.

## Como testar

Não escrevi testes automatizados, então a conferência é manual. O que vale checar:

1. **Vitrine:** os 10 produtos aparecem no carrossel, com foto, nome, preço em reais, parcelamento e "Frete grátis".
2. **Carrossel:** as setas rolam a fileira de um em um card.
3. **Modal:** clicar em um card abre o modal com foto, nome, preço e descrição. Ele fecha pelo `×` ou clicando no fundo escuro. O seletor de quantidade aumenta e diminui, sem passar de `01` para baixo.
4. **Newsletter:** os campos são obrigatórios, o e-mail é validado e, ao enviar, aparece uma mensagem de confirmação.
5. **Tipos e lint:** `npm run build` e `npm run lint` devem terminar sem erros.

## Estrutura do projeto

```text
src/
├── assets/            Imagens e ícones exportados do Figma
├── components/        Componentes da página
├── hooks/             Hooks personalizados
├── styles/            Variáveis, reset e estilos globais
├── types/             Tipos do TypeScript
└── utils/             Funções auxiliares
```

### Componentes

| Componente | Função |
| --- | --- |
| `Header` | Faixa de benefícios, logo, busca, ícones e menu de categorias |
| `Banner` | Banner principal com título e botão |
| `CategoryShortcuts` | Atalhos de categoria com ícones |
| `ProductShowcase` | Junta título, abas (ou "Ver todos") e carrossel |
| `SectionTitle`, `CategoryTabs`, `ProductList`, `ProductCard` | Partes da vitrine |
| `ProductModal` | Modal com os detalhes do produto |
| `PartnerBanners`, `BrandNavigator` | Banners de parceiros e navegação por marcas |
| `Newsletter`, `Footer` | Parte de baixo da página |
| `Reveal` | Animação de entrada das seções ao rolar |

### Hooks e funções

- `useProducts`: busca o JSON e controla os estados de carregando e erro.
- `useInView`: avisa quando um elemento entra na tela, e é usado pelo `Reveal`.
- `formatPrice`: formata um número como moeda brasileira.

## Decisões que tomei

- **Componentização:** a vitrine é o foco e aparece 3 vezes, então ela criei um componente só (`ProductShowcase`), reaproveitando com uma opção para trocar as abas pelo link "Ver todos".
- **HTML semântico e acessibilidade:** usei `header`, `main`, `section`, `nav` e `footer`, um único `h1`, `alt` nas imagens (vazio quando o ícone é só decoração), `aria-label` nos botões que só têm ícone e `role="dialog"` no modal.
- **SEO:** título, descrição e Open Graph definidos no `index.html`.
- **Animações:** a animação de entrada respeita a preferência do sistema por menos movimento (`prefers-reduced-motion`).
- **Dados que o JSON não traz:** o JSON só tem nome, descrição, foto e preço. O parcelamento é calculado a partir do preço (preço dividido por 2), e o "Frete grátis" é um texto fixo, como no layout.

## Limitações e próximos passos

- As abas de categoria e os atalhos de categoria só mudam o destaque visual. Eles não filtram os produtos, porque o JSON não traz a categoria.
- O preço antigo riscado que aparece no layout não foi implementado, porque o JSON aparece somente um preço.
- Os links, a busca e os botões de comprar ainda não levam a lugar nenhum, pois não há páginas nem servidor para isso.
- O layout foi construído para telas de 1440px de largura, e a versão responsiva ainda está pendente.
- O modal ainda não fecha com a tecla `Esc` e não prende o foco do teclado.

## Autor

Leonardo Takahashi Rebello ([github.com/leotakahashii](https://github.com/leotakahashii))