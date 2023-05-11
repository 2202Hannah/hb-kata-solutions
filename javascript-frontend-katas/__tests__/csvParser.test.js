const { csvParser } = require("../katas/csvParser/csvParser");
const fs = require("fs");

describe("csvParser()", () => {
  it("returns an empty array if no data is present in the csv file", () => {
    fs.readFile("./data/blank.csv", "utf8", function(err, data) {
      expect(csvParser(data)).toEqual([]);
    });
  });
  // it("returns an array of objects if data is present in the csv file", () => {
  //   fs.readFile("./data/cities.csv", "utf8", function(err, data) {
  //     const parsedData = csvParser(data);
  //     const firstKey = Object.keys(parsedData[0])
  //     expect(firstKey.length).toNotBe(0);
  //   });
  // });
  it("returns the expected array of objects for the cities.csv data", () => {
    fs.readFile("./data/cities.csv", "utf8", function(err, data) {
           exptect(csvParser(data)).toEqual([{city}])
 });
})
})
