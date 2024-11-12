// personal-librarypersonal-library
// Object的操作練習

const library = {
  books: [],

  // 新增書籍
  addBook(book) {
    this.books.push(book);
  },

  // 更新書籍資訊
  updateBook(id, newInfo) {
    for (let book of this.books) {
      if (book.id == id) {
        Object.assign(book, newInfo);
        return; // 更新完畢，退出 methods
      }
    }
    console.log(`No book found with id: ${id}`);
  },

  // 刪除書籍
  deleteBook(id) {
    const index = this.books.findIndex((book) => book.id == id);
    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log(`No book found with id: ${id}`);
    }
  },

  // 列出所有可用書籍
  listAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.isAvailable);
    console.log('Available Books');
    availableBooks.forEach((book) =>
      console.log(`${book.title} by ${book.author}`)
    );
  },
};

// 測試: 新增一些書籍
library.addBook({
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isAvailable: true,
});

library.addBook({
  id: 2,
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  isAvailable: false,
});

library.addBook({
  id: 3,
  title: '1984',
  author: 'George Orwell',
  isAvailable: true,
});

// 列出所有可用書籍
library.listAvailableBooks();

// 更新書籍資訊
library.updateBook(2, { isAvailable: true });

// 列出所有可用書籍
library.listAvailableBooks();

// 刪除書籍
library.deleteBook(1);

// 列出所有書籍已確認刪除
console.log('All Books', library.books);
