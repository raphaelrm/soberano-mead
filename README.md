# Soberano — O Alquimista de Hidromel

Versão 3.83 — Mjölnir.

## Publicação no GitHub Pages

Este repositório está preparado para publicação automática pelo GitHub Actions.

1. Crie um repositório GitHub e envie os arquivos deste projeto para a raiz.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**.
3. Faça push para a branch `main` ou execute manualmente o workflow **Deploy Soberano 3.83** em **Actions**.
4. O workflow instala as dependências, executa `npm run build` e publica `dist` no GitHub Pages.

O `vite.config.js` usa `base: './'` para que os assets funcionem também quando o projeto estiver publicado em uma URL de repositório (`usuario.github.io/nome-do-repositorio/`).
