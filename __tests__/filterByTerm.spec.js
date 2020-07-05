const {filterByTerm} = require('../lib');
const input = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" }
];
describe("Filter function", () => {
  // test stuff
  test("it should throw error when passing empty url", () => {
    try {
      expect(filterByTerm(input, "")).toThrow('searchTerm cannot be empty');
    } catch (error) {
      
    }
    
  });
  test("it should throw error when passing empty array", () => {
    try {
      expect(filterByTerm([], "LINK")).toThrow();
    } catch (error) {
      
    }
    
  });
  test("it should filter by a search term (link)", () => {
    // testing is a matter of inputs, functions, and expected outputs.
    
    //As per spec the function under test should leave out the objects whose url property does not match the given search term.
    const output = [{ id: 3, url: "https://www.link3.dev" }];
    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
    // expect(filterByTerm(input, "notFound")).toEqual([]);
  });
});