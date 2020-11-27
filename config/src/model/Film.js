const Resource = require("./Resource");

class Film extends Resource {
  constructor(title, type, description, url, price, director, genre) {
    super(title, type, description, url, price);

    //director and genre is specific to Film
    this.director = director;
    this.genre = genre;
  }
}

module.exports = Film;
