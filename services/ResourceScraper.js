//Logic to interpret or parse HTML from webpage
const axios = require("axios");
const cheerio = require("cheerio");

class ResourceScraper {
  async getAllResources() {
    let resourcesList = [];

    let webpage = await this.getWebPage();
    console.log(webpage);
    return resourcesList;
  }

  async getWebPage() {
    let response = await axios.get("https://www.google.com/alerts#3:7");
    return response.data;
  }
}

module.exports = ResourceScraper;
