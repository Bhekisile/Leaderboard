const variableName = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameId;

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
