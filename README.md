# AIHR Landing Page

Landing page tieng Viet cho AIHR - Human Capital Intelligence.

## Gioi Thieu

AIHR giup doanh nghiep SME xay dung Phong Nhan su thong minh bang Gen AI, AI Agent, Automation va du lieu nhan su.

Trang duoc xay bang HTML, CSS va JavaScript thuan trong mot file chinh:

- `index.html`
- `assets/`

Khong dung React, Tailwind hay framework phuc tap.

## Cach Mo Website

Mo truc tiep file sau bang Chrome hoac Edge:

```text
index.html
```

Hoac sau khi dua len hosting/GitHub Pages, dat `index.html` o thu muc goc cua repository.

## Cau Truc Thu Muc

```text
.
|-- index.html
|-- README.md
|-- google-apps-script-aihr-leads.gs
|-- HUONG_DAN_KET_NOI_GOOGLE_SHEET.md
`-- assets/
    |-- logo-aihr-transparent-clean.png
    |-- logo-aihr-clean-header.png
    |-- ngo-phu-manh.png
    |-- zalo-qr-0983423822.png
    `-- ...
```

## Tinh Nang Chinh

- Responsive cho desktop, tablet va mobile.
- Sticky header.
- Smooth scroll.
- Reveal animation khi cuon.
- Hero dashboard visual.
- Counter animation cho so lieu hero.
- Form dang ky nhan tai lieu.
- Ket noi Google Sheet thong qua Google Apps Script.
- CTA tu van qua Zalo.
- QR Zalo trong section lien he va popup noi.

## Cau Hinh Form Google Sheet

Form dang ky trong `index.html` gui du lieu ve Google Apps Script thong qua bien:

```javascript
const GOOGLE_SHEET_WEB_APP_URL = '...';
```

Neu can thay Google Sheet hoac Apps Script khac, cap nhat URL Web App tai bien nay.

File script mau:

```text
google-apps-script-aihr-leads.gs
```

Huong dan chi tiet:

```text
HUONG_DAN_KET_NOI_GOOGLE_SHEET.md
```

## Lien He

AIHR - Human Capital Intelligence

- Website: https://www.aihr.com.vn
- Email: phumanhai@gmail.com
- Mobile/Zalo: 098 342 3822
