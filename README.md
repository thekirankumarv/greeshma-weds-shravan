# Greeshma Weds Shravan

A digital wedding invitation for the wedding of **Greeshma** and **Shravan**.

**Wednesday, 25 November 2026**
Muhurtham: 9:50 a.m., Dhanu Lagnam
Jaya C. Suvarna Kalyana Mantapa, Sri Gokarnanatha Kshethra, Kudroli, Mangalore
[Directions on Google Maps](https://maps.app.goo.gl/SPCPene5PYdfRgtG9)

## Features

- Temple doors that swing open to reveal the invitation
- Temple bells and a tanpura drone, generated with the Web Audio API (mute toggle included)
- Falling jasmine, marigold and rose petals; tap anywhere for more
- Marigold toran, swinging bells, rotating rangoli mandalas and flickering diyas
- Live countdown to the muhurtham (India Standard Time)
- Google Maps link, Add to Calendar link and a QR code for directions
- Mobile-first layout, keyboard accessible, respects reduced-motion settings

## Project structure

```
index.html   Markup and content
styles.css   Styles and animations
script.js    Toran, mandalas, coastline, petals, sound, countdown and QR code
```

No build step and no framework. Fonts come from Google Fonts and the QR code from
[qrcodejs](https://github.com/davidshimjs/qrcodejs) on cdnjs.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy

Any static host works. With GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**.
