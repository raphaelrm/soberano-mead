# Soberano — Gerando o APK Android

Este é um projeto Vite + React + Capacitor pronto. Eu não consigo compilar
o `.apk` binário no meu ambiente (não tenho acesso à internet nem ao Android
SDK), mas os passos abaixo, no **seu computador**, são rápidos.

## Pré-requisitos
- Node.js 18+ instalado (https://nodejs.org)
- Android Studio instalado (https://developer.android.com/studio) — ele já
  vem com o Android SDK necessário

## Passo a passo

1. Extraia esta pasta e abra um terminal dentro dela.

2. Instale as dependências:
   ```
   npm install
   ```

3. Gere o build web (isso cria a pasta `dist/`):
   ```
   npm run build
   ```

4. Adicione a plataforma Android e sincronize:
   ```
   npx cap add android
   npx cap sync android
   ```

5. Abra o projeto no Android Studio:
   ```
   npx cap open android
   ```

6. Dentro do Android Studio:
   - Espere o Gradle sincronizar (primeira vez demora um pouco)
   - Vá em **Build → Build Bundle(s) / APK(s) → Build APK(s)**
   - O APK assinado (debug) aparece em
     `android/app/build/outputs/apk/debug/app-debug.apk`
   - Pra gerar um APK/AAB **assinado para produção** (Play Store), use
     **Build → Generate Signed Bundle / APK** e crie sua própria keystore.

## Alternativa sem Android Studio (build na nuvem)

Se preferir não instalar o Android Studio, dá pra usar o **Expo EAS Build**
com um wrapper Capacitor+Expo, mas o caminho mais direto pra um app puramente
web como este é o Capacitor + Android Studio acima, ou usar um serviço como
o **PWABuilder** (https://pwabuilder.com), que gera um APK a partir de um PWA
hospedado — nesse caso você hospedaria a pasta `dist/` em algo como Vercel/
Netlify (grátis) e apontaria o PWABuilder pra essa URL.

## Segurança
Este projeto não faz nenhuma chamada de rede, não pede permissões sensíveis
do Android e não coleta dados — é uma calculadora local. O `AndroidManifest.xml`
gerado pelo Capacitor não terá permissões extras além do básico.
