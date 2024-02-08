// arr = [{title, color, year}]

export function filterCars(word, arr) {
  return arr.filter((item) =>
    item.title.toLowerCase().includes(word.toLowerCase())
  );
}
