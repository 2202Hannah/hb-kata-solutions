const { findPartner } = require("../katas/findPartner/findPartner");

describe("findPartner()", () => {
  it("Returnts 'Harriet' when there is one direction to the right", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["right"])).toEqual(["Harriet"]);
  });
  it("Returnts 'Kavita' when there is one direction to the left", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["left"])).toEqual(["Kavita"]);
  });
  it("Returnts Harriet, Mitch, Jonny when there are 3 directions to the right", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["right", "right", "right"])).toEqual([
      "Harriet",
      "Mitch",
      "Jonny"
    ]);
  });
  it("Returnts 'Harriet' when there are 3 directions right up up", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["right", "right", "right"])).toEqual([
      "Harriet",
      "Mitch",
      "Jonny"
    ]);
  });
  it("Returnts 'Amul' when there is 1 direction down", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["down"])).toEqual(["Amul"]);
  });
  it("Returnts Kavita, JD, Haz when there are 3 directions left left down", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["left", "left", "down"])).toEqual([
      "Kavita",
      "JD",
      "Haz"
    ]);
  });
  it("Returnts Kavita, JD, Haz when there are 4 directions left left down down", () => {
    const students = [
      ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
      ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"]
    ];
    expect(findPartner(students, ["left", "left", "down", "down"])).toEqual([
      "Kavita",
      "JD",
      "Haz"
    ]);
  });
});
