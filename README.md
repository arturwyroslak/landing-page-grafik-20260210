# landing-page-grafik-20260210

Responsywna strona landing dla grafika komputerowego — szablon w HTML/CSS/JS z rozbudowanymi funkcjami.

Co zawiera:
- index.html — strona główna z sekcjami: hero, usługi, portfolio (lightbox), opinie, o mnie, kontakt
- styles.css — rozszerzone style (lightbox, skill bars, responsywne menu)
- script.js — logika: menu mobilne, lightbox, animacja skill bars, formularz kontaktowy

Szybkie uruchomienie:
1. Sklonuj repo: git clone https://github.com/arturwyroslak/landing-page-grafik-20260210.git
2. Otwórz index.html w przeglądarce — strona jest statyczna.

Formularz kontaktowy (Netlify):
- Plik zawiera atrybuty data-netlify="true" i ukryte pole form-name, co pozwala na prostą integrację z Netlify Forms.
- Jeśli wdrażasz na Netlify, formularz będzie wysyłał wiadomości bez dodatkowego backendu.

Alternatywa — Formspree / EmailJS:
- Aby użyć Formspree, usuń atrybut data-netlify z formularza i ustaw action="https://formspree.io/f/<your-id>" method="POST".
- Aby użyć EmailJS lub własnego endpointu, podłącz skrypt wysyłający fetch() do backendu.

Dalsze kroki i personalizacja:
- Podmień placeholderowe obrazy i teksty w index.html.
- Dodaj favicon (obecnie użyty placeholder).
- Dostosuj kolory w styles.css (zmienne :root).
- Optymalizuj obrazy przed wdrożeniem (kompresja, responsive srcset).
- Wdróż na Netlify, Vercel lub GitHub Pages.

Licencja: MIT
