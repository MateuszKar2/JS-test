//This np.
//Maciej biegnie szybko, ponieważ Maciej próbuje złapać pociąg.
//Maciej biegnie szybko, ponieważ on(this) próbuje złapać pociąg.

const bookShelf = {
    authors: ["Bernard Cornwell", "Robert Sheckley"],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  
  console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley"]
  bookShelf.addAuthor("Tanith Lee");
  console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

  //W zasięgu globalnym ,,this" to undefined
  //Wartość ,,kontekstu" będzie określony nie w momencie utworzenia ale w momencie wywołania

