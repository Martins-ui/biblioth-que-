function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const bookList = document.getElementById('bookList');
    const books = bookList.getElementsByClassName('book');

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.textContent.toLowerCase().includes(filter)) {
            book.style.display = ''; // Affiche le livre
        } else {
            book.style.display = 'none'; // Cache le livre
        }
    }
}
