import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(buffer => json(buffer))
      .then(data => JSON.parse(data))
      .catch(error => {
        throw error;
      });
  }
}