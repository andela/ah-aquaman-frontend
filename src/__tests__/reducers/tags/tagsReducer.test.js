import {TAGS_LOADED } from '../../../actions/types';
import tags from '../../../reducers/tags/tags';

  describe("Tags Reducer Tests", () => {
    const initialState = {
        tags: [],
        isLoading: false
    };

    it("should Load all tags", () => {
      const successAction = {
        type:TAGS_LOADED,
        payload:['programming','career change']
      };
      const successState = {
        tags:['programming','career change'],
        isLoading: false,
      }
      expect(tags(initialState, successAction)).toEqual(successState);
    });
  });
