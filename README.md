# Europa 2026 — Roteiro Mestre

Site estático mobile-first para a viagem de 05 a 15 de novembro de 2026.

## Estrutura

- `index.html` — shell do site
- `styles.css` — identidade visual e responsividade
- `trip-data.js` — todos os dados da viagem
- `app.js` — navegação e interações
- `.nojekyll` — compatibilidade simples com GitHub Pages

## Como editar

A maior parte das alterações deve ser feita em `trip-data.js`.

Você pode:
- alterar voos;
- atualizar hospedagens;
- editar atividades de cada dia;
- mudar status de reservas;
- adicionar novas atividades.

No site, checkboxes da corrida, tema e status de reservas ficam salvos no navegador via `localStorage`.

## Publicar no GitHub Pages

1. Envie todos os arquivos para a raiz do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione branch **main** e pasta **/(root)**.
5. Salve.

O endereço deve ficar no padrão:

`https://vaspmateus-web.github.io/europa-2026-roteiro/`

## Observação

O site não inventa horários, restaurantes ou coordenadas que não estejam definidos. Itens ainda abertos aparecem como `A DEFINIR`, `RESERVAR`, `VERIFICAR` ou `PRECISA DECIDIR`.
