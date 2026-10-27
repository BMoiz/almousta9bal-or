<!-- Arabic-first documentation for the Qais branch honorees page. -->

<div align="center">

<img src="https://raw.githubusercontent.com/BMoiz/almousta9bal-or/main/logo.jpg" alt="شعار مؤسسة المستقبل للثقافة والتربية والعلوم" width="140">

# almousta9bal-org — حفل تكريم المتفوقين | فرع قايس

**An Arabic-first honorees directory for the Future Organization's Qais branch recognition ceremony.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![No Build Step](https://img.shields.io/badge/build-none-brightgreen)

<img src="https://raw.githubusercontent.com/BMoiz/almousta9bal-or/main/home-desktop.png" alt="Desktop screenshot of the honorees page" width="800">

</div>

<div dir="rtl" align="right">

## نبذة عن المشروع

موقع ثابت من صفحة واحدة لعرض قائمة المكرّمين في حفل مؤسسة المستقبل للثقافة والتربية والعلوم — المكتب البلدي، فرع قايس. يوفّر البحث عن الأسماء والتصفية حسب النشاط، بواجهة عربية كاملة تدعم اتجاه الكتابة من اليمين إلى اليسار (RTL).

**الأنشطة المعروضة:** الأردوينو والروبوتيك، البرمجة والتطوير، حفظ القرآن الكريم، إنشاء المحتوى والإعلام، والمطالعة والقراءة.

</div>

## Screenshots

<table>
  <tr>
    <td width="60%">
      <img src="https://raw.githubusercontent.com/BMoiz/almousta9bal-or/main/filter-quran-desktop.png" alt="Desktop view with the Quran activity filter selected">
      <p align="center">Filtering by activity</p>
    </td>
    <td width="40%">
      <img src="https://raw.githubusercontent.com/BMoiz/almousta9bal-or/main/search-mobile.png" alt="Mobile view showing a name search">
      <p align="center">Searching on mobile</p>
    </td>
  </tr>
</table>

> Screenshot note: these captures were rendered in an offline environment. The Tajawal web font may therefore appear as a system fallback. For an exact representation of the live page, recapture them in a browser with internet access.

## Features

- **Arabic name search:** ignores Arabic diacritics and tatweel, and normalizes أ/إ/آ/ٱ to ا, ة to ه, and ى to ي.
- **Activity filters:** filter by Arduino/robotics, programming, Quran, media, or reading; the selected filter combines with the search query.
- **Dynamic honoree cards:** display a person's name, activity, optional award, and an icon selected from the data.
- **Empty state:** shows a message when no entries match.
- **Responsive layout:** CSS Grid and a mobile layout adjustment.
- **Accessibility foundations:** labelled search input, pressed states on filter buttons, visible keyboard focus, and a live region for updated results.
- **Simple static setup:** HTML, CSS, and vanilla JavaScript with no package manager, build process, or framework.

## Technology

| Purpose | Technology |
| --- | --- |
| Page structure | HTML5 |
| Styling and responsive layout | CSS3 |
| Search, filtering, and rendering | Vanilla JavaScript |
| Arabic typeface | [Tajawal](https://fonts.google.com/specimen/Tajawal) via Google Fonts |
| Icons | [Font Awesome 6.4.0](https://fontawesome.com/) via cdnjs |

The font and icon stylesheet are loaded from third-party CDNs. The core page does not require a build step, but those external assets require an internet connection to load.

## Project structure

```text
.
├── index.html                  # Page markup and content structure
├── style.css                   # Layout, colors, responsive styles, and focus states
├── script.js                   # Honoree data, rendering, search, and filtering
├── logo.jpg                    # Organization logo
├── home-desktop.png            # README screenshot
├── filter-quran-desktop.png    # Activity-filter screenshot
├── search-mobile.png           # Mobile-search screenshot
├── almousta9bal-org-updated.zip # Packaged project archive
└── README.md
```

## Run locally

No installation is required.

1. Download or clone this repository.
2. Open `index.html` in a browser, or start a local static server:

   ```bash
   python3 -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).

The HTML references `style.css`, `script.js`, and `logo.jpg` from the repository root.

## Update the honoree list

Edit the `honorees` array near the top of `script.js`. Each entry follows this shape:

```js
{
  name: "Full name",
  category: "arduino", // arduino | programming | quran | media | reading
  activity: "Activity label shown on the card",
  award: "",           // An empty string hides the award line
  gender: "male"       // male | female; selects the avatar icon
}
```

To add a person, add another object to the array and use an existing category key. To introduce a new activity, update both the filter buttons in `index.html` and the corresponding category values in `script.js`.

## Privacy and content ownership

The page source contains honorees' names and the organization's contact details. Confirm that the organization has permission to publish this information before making the repository public or sharing copies. The organization's logo and personal data should not be assumed to be covered by a software license.

## Known limitations

- The honoree list is hard-coded; there is no admin interface or external database.
- No automated test suite is included.
- Search normalizes common Arabic characters, but it does not infer all spelling variants (for example, الرحمن and الرحمان remain different).
- Fonts and icons depend on third-party CDNs and do not include local copies or Subresource Integrity attributes.
- Responsive behavior has only a small number of explicit breakpoints; test the page on the target devices before relying on it for a public event.
- The ceremony date and event label are static text in the HTML.
- The screenshot files are documentation images, not automated visual-regression tests.

## License

No software license has been added. Until a license is chosen and included, the repository's code is not granted an open-source license by default. Obtain the organization's approval before licensing or redistributing its logo, honoree information, or other organization-owned content.
