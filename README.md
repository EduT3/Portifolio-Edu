# Portifólio Eduardo

Meu primeiro portifólio, desenvolvido com HTML, CSS e JavaScript. O projeto reúne uma apresentação pessoal, uma página sobre o autor e uma demonstração de alternância entre temas claro e escuro.

## Executar

Abra `index.html` no navegador. Não há dependências nem etapa de build. Para servir por HTTP, execute `python -m http.server 8000` na raiz e acesse http://localhost:8000.

## Estrutura

- `index.html`: apresentação e redes sociais
- `about.html`: sobre o portifólio
- `modo.html`: demonstração de tema
- `style/`: estilos das páginas
- `script/main.js`: alternância de tema com estado acessível
- `assets/`: fotografia e ícones

## Acessibilidade e responsividade

Navegação com indicação da página atual, link para pular ao conteúdo, foco visível e layout adaptável a telas pequenas. O tema é uma demonstração da página Módulos; não é persistido entre visitas.

## Verificação manual

1. Abra as três páginas em larguras de 320, 768 e 1440 px.
2. Navegue usando Tab e Enter; confira os links e o foco.
3. Na página Módulos, alterne o tema várias vezes; confira o texto e `aria-pressed` do botão.
4. Verifique o console do navegador. Não há suíte de testes ou build configurado.

[Publicação originalmente indicada pelo projeto](https://portifolio-edu.vercel.app/index.html). O site publicado pode diferir do código desta branch.
