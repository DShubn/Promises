import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then(saving => {
    console.log('Game saving:', saving);
  })
  .catch(error => {
    console.error('Error loading game saving:', error);
  });