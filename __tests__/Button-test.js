import 'react-native';
import React from 'react';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Button', () => {

  it('renders correctly', () => {
    expect(renderer.create(
      <Button text={'hi'} />
    ).toJSON()).toMatchSnapshot()
  });
});
