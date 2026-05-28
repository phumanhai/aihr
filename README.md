# AIHR Landing Page

Landing page cho AIHR - Human Capital Intelligence.

Website duoc xay bang HTML, CSS va JavaScript thuan. Khong dung React, Tailwind hay framework phuc tap.

## File Chinh

```text
index.html
```

Mo truc tiep `index.html` bang Chrome/Edge de xem local, hoac dua len GitHub Pages/hosting voi `index.html` nam o thu muc goc.

## Cau Truc Bat Buoc Khi Upload

Khi upload len GitHub, can giu dung cau truc sau:

```text
.
|-- index.html
|-- README.md
|-- google-apps-script-aihr-leads.gs
|-- HUONG_DAN_KET_NOI_GOOGLE_SHEET.md
`-- assets/
    |-- ai-cb-chinh-sach.png
    |-- ai-dao-tao.png
    |-- ai-kpi-nang-luc.png
    |-- ai-truyen-thong-noi-bo.png
    |-- ai-tuyen-dung.png
    |-- aihr-hero-tro-ly-tri-thuc-mini.png
    |-- aihr-hero-tuyen-dung-mini.png
    |-- dashboard-ai-hr.png
    |-- expert-aihr-playbook-v2.png
    |-- logo-aihr-transparent-clean.png
    `-- zalo-qr-0983423822.png
```

## Luu Y Khi Upload Len GitHub

- Phai upload ca thu muc `assets`, khong chi upload moi `index.html`.
- Ten thu muc phai la `assets`, viet thuong dung nhu trong code.
- Ten file anh phai dung 100%, vi GitHub/hosting co phan biet chu hoa va chu thuong.
- Khong doi ten file anh neu chua sua lai duong dan trong `index.html`.
- Neu logo hoac anh bi vo tren website, kiem tra truoc tien xem cac file trong `assets` da co tren GitHub chua.
- Duong dan anh trong HTML dang la duong dan tuong doi, vi du:

```html
<img src="assets/logo-aihr-transparent-clean.png" alt="AIHR Human Capital Intelligence">
```

## Danh Sach Anh Dang Duoc Website Su Dung

Website hien dang dung dung 11 file anh sau:

```text
assets/ai-cb-chinh-sach.png
assets/ai-dao-tao.png
assets/ai-kpi-nang-luc.png
assets/ai-truyen-thong-noi-bo.png
assets/ai-tuyen-dung.png
assets/aihr-hero-tro-ly-tri-thuc-mini.png
assets/aihr-hero-tuyen-dung-mini.png
assets/dashboard-ai-hr.png
assets/expert-aihr-playbook-v2.png
assets/logo-aihr-transparent-clean.png
assets/zalo-qr-0983423822.png
```

Neu mot trong cac file tren thieu tren GitHub, website se hien icon anh loi hoac text alt thay cho anh.

## Tinh Nang Chinh

- Responsive cho desktop, tablet va mobile.
- Sticky header.
- Smooth scroll.
- Reveal animation khi cuon.
- Hero dashboard visual.
- Counter animation cho so lieu hero.
- Modal chi tiet cho 6 nhom giai phap.
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

## Cach Kiem Tra Sau Khi Deploy

Sau khi upload len GitHub/hosting:

1. Mo website.
2. Kiem tra logo header co hien khong.
3. Kiem tra 2 anh hero mini co hien khong.
4. Kiem tra 6 anh trong muc giai phap co hien khong.
5. Kiem tra anh chuyen gia co hien khong.
6. Kiem tra QR Zalo co hien khong.
7. Bam `Xem chi tiet` de kiem tra modal.
8. Bam CTA Zalo de kiem tra link Zalo.
9. Gui thu form neu can kiem tra Google Sheet.

## Lien He

AIHR - Human Capital Intelligence

- Website: https://www.aihr.com.vn
- Email: phumanhai@gmail.com
- Mobile/Zalo: 098 342 3822

