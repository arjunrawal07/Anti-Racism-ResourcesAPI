//Logic to interpret or parse HTML from webpage

const axios = require("axios");
const cheerio = require("cheerio");
class ResourceScraper {
  async getAllResources() {
    let resourcesList = [];
    let webpage = await this.getWebPage();
    return resourcesList;
  }
}
