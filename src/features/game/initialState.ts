import IGameState from '../../types/state';
import Themes from './themes/themes';

const initialState: IGameState = {
  points: 0,
  difficult: {
    current: 'normal',
    parameters: {
      easy: {
        gridShrinkFactor: 0.6,
        wordsGrowthFactor: 0.6,
        wordsLengthFactor: 1.4,
        pointsByFoundWord: 1,
        reverseWordsExtraPoints: 1.1,
      },
      normal: {
        gridShrinkFactor: 0.8,
        wordsGrowthFactor: 0.8,
        wordsLengthFactor: 1.2,
        pointsByFoundWord: 2,
        reverseWordsExtraPoints: 1.2,
      },
      hard: {
        gridShrinkFactor: 1,
        wordsGrowthFactor: 1,
        wordsLengthFactor: 1,
        pointsByFoundWord: 3,
        reverseWordsExtraPoints: 1.3,
      },
    },
  },
  useCustom: false,
  useReverse: false,
  customWords: [],
  loadThemes: ['nomes'],
  themes: Themes,
  availableSpace: 0,
  matchPoints: 0,
  matches: 1,
  matchesLimit: 50,
  gameEnded: false,
  boardData: {
    board: [],
    boardSize: {
      columns: 0,
      rows: 0,
    },
    feedbacks: [],
    matchEnded: false,
  },
};

export default initialState;
