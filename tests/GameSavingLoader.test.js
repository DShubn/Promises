import GameSavingLoader from '../src/GameSavingLoader';
import read from '../src/reader';
import json from '../src/parser';

jest.mock('../src/reader');
jest.mock('../src/parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    read.mockClear();
    json.mockClear();
  });

  test('load() должен возвращать объект GameSaving - Promises', async () => {
    const mockData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    read.mockResolvedValue(new ArrayBuffer(mockData.length * 2));
    json.mockResolvedValue(mockData);

    const saving = await GameSavingLoader.load();

    expect(saving).toEqual(JSON.parse(mockData));
    expect(read).toHaveBeenCalled();
    expect(json).toHaveBeenCalledWith(expect.any(ArrayBuffer));
  });

  test('load() должен обр.ошибки', async () => {
    read.mockRejectedValue(new Error('Read error'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Read error');
    expect(read).toHaveBeenCalled();
    expect(json).not.toHaveBeenCalled();
  });
});