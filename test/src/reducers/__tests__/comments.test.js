import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT} from 'actions/types';

describe(('COMMENTS REDUCERS'), () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment'])
  })

  it('handles actions with unknow type', () => {
    const newState = commentsReducer([], {type : 'unknow'});
    expect(newState).toEqual([])
  })
})
