import React from 'react';
import { mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: [ 'Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState ={initialState}>
      <CommentList/>
    </Root>);
});
afterEach(() => {
  wrapped.unmount()
})
it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows text for each comment', () => {
  expect(wrapped.find('ul').childAt(0).text()).toEqual('Comment 1')
  expect(wrapped.find('ul').childAt(1).text()).toEqual('Comment 2')

})
