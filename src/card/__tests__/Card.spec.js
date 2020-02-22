import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../Card';

describe('Card component tests', () => {
  test('Should render the outer div and children correctly', () => {
    const card = shallow(
      <Card>
        <span>Hello</span>
      </Card>
    );

    expect(card.find('div.card')).toBeTruthy();
    expect(card.find('div span')).toBeTruthy();
    expect(card.find('div span').text()).toEqual('Hello');
  });
});
