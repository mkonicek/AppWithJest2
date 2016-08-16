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

  // Advanced - See SUILink.react-test.js
  xit('expands help tooltip when tapped', () => {
    const component = ReactTestRenderer.create(
      <CreateScreen />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // Simulate button click - how?
    tree.button.onPress();
    // re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});