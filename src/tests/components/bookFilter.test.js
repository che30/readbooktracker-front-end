import React from 'react';
import renderer from 'react-test-renderer';
import BookFilter from '../../components/bookFilter';

it('renders properly', () => {
  const tree = renderer
    .create(<BookFilter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
