
/**
 * Filter all products by name
 * @param {array} data - Currency List
 * @param {string} term - Term to search
 */
const filterCurrency = (data, search) => {
  if (search === '') {
    return data;
  }
  return data.filter(item =>
    item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}

export {
  filterCurrency
}