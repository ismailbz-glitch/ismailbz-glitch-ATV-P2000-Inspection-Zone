# ATV Inspection Zone (PWA)

Fluent-style Progressive Web App for zone inspections: add/edit zones, attach photos, export/print report, offline-ready with localStorage.

## 🛠 Files
- `index.html` – full app UI + logic
- `manifest.webmanifest` – PWA manifest (GitHub Pages base path configured)
- `service-worker.js` – caching for offline usage
- `icons/icon-192.png`, `icons/icon-512.png` – installable app icons
- `assets/logo-atv.svg` – splash/logo graphic

## 🚀 Deploy on GitHub Pages
1. Create a public repo named **ATV-Inspection-Zone** under **ismailbz-glitch**.
2. Upload all files/folders from this ZIP to the repo root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Save. Your app will be live at:
   https://ismailbz-glitch.github.io/ATV-Inspection-Zone/

> Note: The **manifest** and **service worker** are already scoped for `/ATV-Inspection-Zone/`.

## 📲 Install on phone
- Open the URL on Android (Chrome/Edge) → **Install app / Add to Home screen** prompt appears.
- On iPhone (Safari): Share → **Add to Home Screen**.

## 💾 Offline & Data
- App caches core assets for offline use after first load.
- All inspections are stored in your browser via `localStorage` (device-specific).

## 🧰 Optional tweaks
- Replace `assets/logo-atv.svg` with the official white SVG for production.
- Update colors in `:root` CSS variables.
- Add CSV export/import if needed.

---
© ATV Technologies
