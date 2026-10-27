<div align="center">

<img src="picture/logo.jpg" alt="شعار مؤسسة المستقبل للثقافة والتربية والعلوم" width="140">

# حفل تكريم المتفوقين — فرع قايس

**Honorees page for the annual recognition ceremony of the Future Culture, Education and Science Organization (Qais branch)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla%20JavaScript-F7DF1E?logo=javascript&logoColor=black)

<img src="docs/assets/home-desktop.png" alt="Full page: header, search box, activity filters and the grid of honoree cards" width="800">

</div>

<div dir="rtl" align="right">

## نبذة

موقع من صفحة واحدة لعرض قائمة المكرمين في حفل التكريم السنوي (12/9/2026) لمؤسسة المستقبل للثقافة والتربية والعلوم، المكتب البلدي – فرع قايس. يمكن البحث بالاسم والتصفية حسب النشاط: الأردوينو والروبوتيك، البرمجة والتطوير، حفظ القرآن الكريم، إنشاء المحتوى والإعلام، المطالعة والقراءة. الواجهة عربية بالكامل بتخطيط من اليمين إلى اليسار (RTL).

</div>

## Screenshots

<table>
  <tr>
    <td width="60%"><img src="docs/assets/filter-quran-desktop.png" alt="Desktop view with the Quran memorization filter selected, showing two honorees"></td>
    <td width="40%"><img src="docs/assets/search-mobile.png" alt="Mobile view with a name typed in the search box, showing one matching honoree"></td>
  </tr>
  <tr>
    <td align="center">Filter by activity</td>
    <td align="center">Search on mobile</td>
  </tr>
</table>

<!-- The screenshots were rendered in an offline environment: Font Awesome icons are the same free icon set, but the Tajawal font was unavailable, so a system fallback font was used. Replace them with captures from a normal browser for exact typography. -->

## Features

- **Search by name.** Matching ignores diacritics and unifies أ/إ/آ → ا, ة → ه and ى → ي, so "احمد" finds "أحمد".
- **Filter by activity** with six buttons. Search and filter combine.
- **Honoree cards** with name, activity and award (the award line is hidden when empty), and an icon chosen from the `gender` field.
- **Empty-result message** when nothing matches.
- **Arabic RTL layout** (`lang="ar" dir="rtl"`), green and white identity with the organization's logo, Tajawal font and Font Awesome icons.
- **Responsive layout:** CSS grid plus one breakpoint at 600px.
- **Accessibility basics:** labelled search field, `aria-pressed` on filter buttons, visible keyboard focus, live region for results.

## Tech stack

| Area | Technology |
| --- | --- |
| Markup / styling / logic | HTML5, CSS3, vanilla JavaScript (no framework, no build step) |
| Font | [Tajawal](https://fonts.google.com/specimen/Tajawal) via Google Fonts |
| Icons | [Font Awesome 6.4.0](https://fontawesome.com/) via cdnjs |

Fonts and icons are loaded from CDNs, so an internet connection is needed for them to appear; the page still works without them.

## Project structure

```text
.
├── index.html          Page structure and entry point
├── css/style.css       Styles and brand colors (CSS variables)
├── js/script.js        Honorees data, rendering, search and filters
├── picture/logo.jpg    Organization logo
└── docs/assets/        README screenshots
```

## Run locally

No installation is required. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing the honorees

The list is the `honorees` array at the top of `js/script.js`:

```js
{
    name: "Full name",
    category: "arduino",          // arduino | programming | quran | media | reading
    activity: "Activity label shown on the card",
    award: "",                    // leave empty to hide the award line
    gender: "male"                // male | female (selects the card icon)
}
```

To add a new activity, add a button in `index.html` with a new `category` key and use the same key in the data.

## Privacy note

`index.html` and `js/script.js` contain full names of honorees and the organization's phone number and email address. Review this data before publishing, forking or sharing the repository.

## Known limitations

- No automated tests.
- The honoree data is hard-coded in `js/script.js`; there is no admin interface or external data source.
- Name search is exact after normalization: spelling variants such as "الرحمن" and "الرحمان" are treated as different.
- Icons and fonts depend on third-party CDNs (no fallback copy, no Subresource Integrity).
- Only one responsive breakpoint; the layout was checked at 320, 375, 768 and 1280 px widths for horizontal overflow only.
- The "annual ceremony" badge and the event date in the header are plain text, not configurable.

## License

No license has been chosen yet. Until one is added, all rights are reserved by the owner. The logo and the honoree data belong to the organization and should not be covered by a code license.
