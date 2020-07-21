// example jest test for phone number component
import React from 'react';
import { Text } from 'react-native';
import PhoneNumber from './phone-number';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <PhoneNumber
      phoneNo="555-1234"
      disallowFontScaling
    />
    ).toJSON();
  expect(tree).toMatchSnapshot();
  
  // only one child (should be a text)
  expect(tree.children.length).toBe(1);

  const text = tree.children[0];
  // make sure explicit and default props are as expected
  expect(text.children[0]).toBe('555-1234');
  expect(text.props.style[1].fontSize).toBe(12);
  expect(text.props.allowFontScaling).toBe(false);
    
  
});