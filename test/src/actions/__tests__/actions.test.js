import { saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('ACTIONS', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    })
    it('has the correct payload', () => {
      const action = saveComment('OK');
      expect(action.payload).toEqual('OK');
    })
  })
})
