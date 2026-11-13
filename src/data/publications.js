// Simply Abu Dhabi publications.
// Online issues link out to the magazine viewer.
// Spreads are scanned pages stored in /public/publications.
// To add an issue, add one object to this list.

const publications = [
  {
    id: "book-of-art-and-culture-2026",
    title: "The Book of Art & Culture",
    issue: "October 2026",
    pages: "Pages 12–19",
    href: "https://books.simplyabudhabi.com/issue49/12/",
    spread: null,
  },
  {
    id: "book-of-icons",
    title: "The Book of Icons",
    issue: null,
    pages: null,
    href: "https://simplyabudhabi.com/SimplyAbuDhabiMagazines/issue48/index.html",
    spread: null,
  },
  {
    id: "book-25-pages-36-37",
    title: "Simply Abu Dhabi, Book 25",
    issue: "Book 25",
    pages: "Pages 36–37",
    href: null,
    spread: {
      src: "/publications/book-25-pages-36-37.jpg",
      width: 1024,
      height: 631,
      alt: "Simply Abu Dhabi Book 25, pages 36 and 37: Hollywood sign spread",
    },
  },
  {
    id: "book-23-pages-30-31",
    title: "Simply Abu Dhabi, Book 23",
    issue: "Book 23",
    pages: "Pages 30–31",
    href: null,
    spread: {
      src: "/publications/book-23-pages-30-31.jpg",
      width: 1024,
      height: 631,
      alt: "Simply Abu Dhabi Book 23, pages 30 and 31: The Century feature spread",
    },
  },
];

export default publications;
