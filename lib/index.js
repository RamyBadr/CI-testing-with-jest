function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line
  if (searchTerm=="") {
    return []
  }
  return inputArr.filter(function(arrayElement) {
    const regex = new RegExp(searchTerm, "i");
    return arrayElement.url.match(regex);
  });
}
module.exports = {
  filterByTerm,
}