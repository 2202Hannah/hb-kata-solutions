const {
  needleInHaystack
} = require("../katas/needleInHaystack/needleInHaystack");

describe("needleInHaystack()", () => {
  it("Returns an empty array if the needle is not present in the haystack", () => {
    const needle = "Sausages";
    const haystack = {
      name: "Northcoders",
      description: "Awesome coding bootcamp",
      staff: {
        tutors: "James and Chris",
        support: "Louise"
      },
      contactDetails: {
        web: "https://northcoders.com",
        phone: "",
        address: {
          office: "Northcoders, Gold 67, The Sharp Project, Manchester",
          postcode: "M40 5BJ"
        }
      },
      reviews: {
        april: {
          chris: "I love Northcoders",
          james: "It is awesome!"
        },
        may: {
          louise: "Northcoders is a fantastic coding bootcamp"
        }
      }
    };
    expect(needleInHaystack(haystack, needle)).toEqual([]);
  });
  it("Returns the correct path for one instance of the needle when case is the same", () => {
    const needle = "M40";
    const haystack = {
      name: "Northcoders",
      description: "Awesome coding bootcamp",
      staff: {
        tutors: "James and Chris",
        support: "Louise"
      },
      contactDetails: {
        web: "https://northcoders.com",
        phone: "",
        address: {
          office: "Northcoders, Gold 67, The Sharp Project, Manchester",
          postcode: "M40 5BJ"
        }
      },
      reviews: {
        april: {
          chris: "I love Northcoders",
          james: "It is awesome!"
        },
        may: {
          louise: "Northcoders is a fantastic coding bootcamp"
        }
      }
    };
    expect(needleInHaystack(haystack, needle)).toEqual([
      "contactDetails.address.postcode"
    ]);
  });
  it("Returns the correct path for one instance of the needle when case is different", () => {
    const needle = "m40";
    const haystack = {
      name: "Northcoders",
      description: "Awesome coding bootcamp",
      staff: {
        tutors: "James and Chris",
        support: "Louise"
      },
      contactDetails: {
        web: "https://northcoders.com",
        phone: "",
        address: {
          office: "Northcoders, Gold 67, The Sharp Project, Manchester",
          postcode: "M40 5BJ"
        }
      },
      reviews: {
        april: {
          chris: "I love Northcoders",
          james: "It is awesome!"
        },
        may: {
          louise: "Northcoders is a fantastic coding bootcamp"
        }
      }
    };
    expect(needleInHaystack(haystack, needle)).toEqual([
      "contactDetails.address.postcode"
    ]);
  });
});
