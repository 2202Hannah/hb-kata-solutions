const morseCode = require("./morse-code");

describe("morseCode()", () => {
  test("When passed one letter's code it returns the alphabet equivalent", () => {
    const str = ".-";
    const result = morseCode(str);
    expect(result).toBe("a");
  });
  test("When passed two letter's of code it returns the alphabet equivalent", () => {
    const str = ".... ..";
    const result = morseCode(str);
    expect(result).toBe("hi");
  });
  test("When passed five letter's of code it returns the equivalent word", () => {
    const str = ".... . .-.. .-.. ---";
    const result = morseCode(str);
    expect(result).toBe("hello");
  });
  test("When passed a whole sentence in morse code it returns the equivalent sentence", () => {
    const str = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
    const result = morseCode(str);
    expect(result).toBe("good morning northcoders");
});
})
