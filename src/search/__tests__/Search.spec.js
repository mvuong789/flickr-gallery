import React from 'react';
import { shallow } from 'enzyme';
import Search from '@search/Search';

describe('Search component tests', () => {
  it('should render an input with no value', () => {
    const search = shallow(<Search />);

    expect(search.props().value).toEqual('');
    expect(search.find('input')).toBeTruthy();
  });

  it('should update value when it has changed', () => {
    const onChange = jest.fn();
    const search = shallow(<Search onChange={onChange} />);

    search.find('input').simulate('change', { target: { value: 'dog' } });
    expect(search.props().value).toEqual('dog');
  });
});
