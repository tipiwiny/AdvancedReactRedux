import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root>
    <CommentBox/>
  </Root>);
});
afterEach(() => {
  wrapped.unmount()
})
it('has a text area and two buttons', () => {
  expect(wrapped.find('button').length).toEqual(2);
  expect(wrapped.find('textarea').length).toEqual(1);
})
describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'ok'
      }
    })
    wrapped.update()
  })
  it('has a text area that users can type in', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('ok')
  })

  it('when form is submitted, textarea should be get emptied', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('ok')
    wrapped.find('form').simulate('submit', {
      target: {
        value: ''
      }
    })
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
