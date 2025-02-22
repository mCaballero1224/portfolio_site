const fetchBooks = async () => {
  try {
    // Get book data
    const response = await fetch('/db/books');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const booksData = await response.json();
    // Set up HTML list
    const libraryList = document.getElementById('library-list');
    booksData.forEach(book => {
      // Create list element and append to list
      const li = document.createElement('li');
      libraryList.appendChild(li);
      // Set up content of list element
      li.classList.add('book-item');
      titleElement = document.createElement('span');
      titleElement.classList.add('book-title');
      authorElement = document.createElement('span');
      authorElement.classList.add('book-author');
      publicationYearElement = document.createElement('span');
      publicationYearElement.classList.add('book-publishing-year');
      bookLinkElement = document.createElement('span');
      bookLinkElement.classList.add('book-link');
      bookLink = document.createElement('a');
      titleElement.appendChild(bookLink);

      // Add data to spans
      bookLink.textContent = book.title;
      bookLink.href = book.link;
      bookLink.target = "_blank";
      authorElement.textContent = ` by ${book.author}`;
      publicationYearElement.textContent = ` (${book.publication_year})`;

      // Append spans to list item
      li.appendChild(titleElement);
      li.appendChild(authorElement);
      li.appendChild(publicationYearElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchBooks();
