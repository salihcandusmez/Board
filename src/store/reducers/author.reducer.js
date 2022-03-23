import { FETCH_AUTHOR } from '../types';

const initialState = {
  data: {},
  loading: false
};

class Book {
  constructor(name, editionCount, firstPublishYear, pages) {
    this.name = name;
    this.editionCount = editionCount;
    this.firstPublishYear = firstPublishYear;
    this.pages = pages;
    this.readTime = pages && (pages / 60).toFixed(1);
  }
}

function parseBooksByYear(books) {
  const booksByYear = {};

  books.forEach((book) => {
    const b = new Book(
      book.title,
      book.edition_count,
      book.first_publish_year,
      book.number_of_pages_median,
      book.re
    );

    book.publish_year?.forEach((year) => {
      if (booksByYear[year] === undefined) {
        booksByYear[year] = [b];
      } else {
        booksByYear[year].push(b);
      }
    });
  });

  return booksByYear;
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_AUTHOR:
      return {
        ...state,
        data: parseBooksByYear(payload),
        loading: false
      };

    default:
      return state;
  }
};
