const ResourceScraper = require("./services/ResourceScraper");
const express = require("express");
const app = express();

//Listening for the request, then the response
app.get("/", async (req, res) => {
  let resourceScraper = new ResourceScraper();
  let resourcesList = await resourceScraper.getAllResources();
  //Returns list back to user
  res.send(resourcesList);
});
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
