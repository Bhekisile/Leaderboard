import './styles.css';

const submitBtn = document.getElementById('submit');
const scoreList = document.getElementById('score-list');

let scores = JSON.parse(localStorage.getItem('scores')) || [];

function Score(name, score) {
  this.name = name;
  this.score = score;
}

function displayScores() {
  scoreList.innerHTML = '';
  scores.forEach((recentScore) => {
    const newScore = document.createElement('li');
    newScore.classList.add('newScore');
    newScore.innerHTML = `<p>${recentScore.name} ${recentScore.score}`;
    scoreList.appendChild(newScore);
  });
}

function addScore(name, score) {
  const newScore = new Score(name, score);
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores();
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const name = nameInput.value;
  const score = scoreInput.value;
  addScore(name, score);
  nameInput.value = '';
  scoreInput.value = '';
});