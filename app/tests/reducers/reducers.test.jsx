var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'mince'
      };
      var res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText);
    });
  });

  describe('ShowCompletedReducer', () => {
    it('should flip showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLTED',
      };
      var res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true);
    });
  });
});
