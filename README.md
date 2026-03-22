# Dagsosoft — Portfolio & Personal Branding

Nowoczesna aplikacja webowa zbudowana w oparciu o **Vue 3**, **Vite** oraz **Tailwind CSS v4**. Projekt wspiera wielojęzyczność (PL, EN, DE) dzięki **vue-i18n**.

## 🚀 Technicze Stack

- **Framework**: Vue 3 (Composition API)
- **Tooling**: Vite
- **Styling**: Tailwind CSS v4 (z natywnymi zmiennymi CSS)
- **i18n**: vue-i18n (współdzielone pliki JSON w `src/locales/`)
- **Animacje**: Custom CSS & Scroll Reveal logic

## 🛠️ Jak uruchomić projekt lokalnie

### 1. Wymagania wstępne
Upewnij się, że masz zainstalowane:
- [Node.js](https://nodejs.org/) (zalecana wersja 18+)
- npm (dołączony do Node.js) lub yarn

### 2. Instalacja zależności
Sklonuj repozytorium, przejdź do folderu projektu i wykonaj:
```bash
npm install
```

### 3. Konfiguracja środowiska
Skopiuj plik `.env.example` do `.env` i uzupełnij klucz dla Formspree (do obsługi formularza kontaktowego):
```bash
cp .env.example .env
```
Następnie edytuj `.env` i wstaw swój URL formularza:
`VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/TWÓJ_ID_FORMULARZA`

### 4. Uruchomienie serwera deweloperskiego
Aby włączyć serwer z podglądem na żywo (Hot Module Replacement), wpisz:
```bash
npm run dev
```
Aplikacja będzie dostępna pod adresem: `http://localhost:5173` (domyślnie).

## 📦 Budowanie i produkcja

### Budowanie wersji produkcyjnej
Aby wygenerować zoptymalizowane pliki w katalogu `dist/`, wykonaj:
```bash
npm run build
```

### Podgląd buildu
Możesz przetestować wersję produkcyjną lokalnie za pomocą:
```bash
npm run preview
```

## 🌐 Wielojęzyczność (i18n)

Tłumaczenia znajdują się w folderze `src/locales/`:
- `pl.json` — Polski (domyślny)
- `en.json` — Angielski
- `de.json` — Niemiecki

Aplikacja zapamiętuje wybór języka w `localStorage`.
