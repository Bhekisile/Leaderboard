const gameScores = (name, score) => {
  const li = document.createElement('li');
  li.textContent = `${name}: ${score}`;
  return li;
//   const li = {
//     tagName: 'li',
//     textContent: `${name}: ${score}`,
//     createElement() {
//       return `${this.tagName} ${this.textContent}`;
//     },
//   };
//   return li.createElement();
};
export default gameScores;