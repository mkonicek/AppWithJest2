import 'react-native';
import React from 'react';
import CreateScreen from '../CreateScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Advanced use case - simulate button tap
describe('CreateScreen', () => {

  it('expands help tooltip when tapped', () => {
    const component = renderer.create(
      <CreateScreen />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.getInstance().onHelpPress();
    // Simulate button click - how?
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
