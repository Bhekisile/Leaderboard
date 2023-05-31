import './styles.css';
import gameScores from '../module/gameScores.js';
import saveScore from '../module/saveScore.js';
import getScores from '../module/getScores.js';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameId;
// const refreshBtn = document.getElementById('refresh');

const myGame = async () => {
  const storedGameId = localStorage.getItem('gameId');
  if (storedGameId) {
    gameId = storedGameId;
  } else {
    const response = await
    fetch(`${apiUrl}games/`, {
      method: 'POST',
      headers: {
        'Content-Type':
        'application/json',
      },
      body:
    JSON.stringify({ name: 'This is My New Game' }),
    });
    const data = await
    response.json();
    gameId = data.result;
    localStorage.setItem('gameId', gameId);
  }
};
myGame();

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  try {
    const scores = await getScores(gameId);
    const scoresList = document.getElementById('score-list');
    scoresList.innerHTML = '';
    scores.forEach(({ user, score }) => {
      const li = gameScores(user, score);
      scoresList.appendChild(li);
    });
  } catch (error) {
    // console.error(error);
  }
});

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name'); // id from name input field
  const scoreInput = document.getElementById('score'); // id from score input field
  const { value: name } = nameInput;
  const { value: score } = scoreInput;
  await saveScore(gameId, name, score);
  nameInput.value = '';
  scoreInput.value = '';
});