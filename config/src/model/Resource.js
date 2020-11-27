class Resource {
  constructor(title, type, description, url, price) {
    this.title = title;
    this.type = type;
    this.description;
    this.url = url;
    this.price = price;
  }
}

class Book extends Resource {
  constructor(title, type, description, url, price, author){
    super(title, type, description, url, price);
    //author is specific to Book
    this.author = author;
  }
}
module.exports = Resource;
