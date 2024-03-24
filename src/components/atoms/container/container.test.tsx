import React from 'react';
import {render} from '@testing-library/react-native';
import BasicContainer from './container';
import {Text} from 'react-native';
import {it} from '@jest/globals';

const MockedChild = () => <Text>Test Children</Text>;
describe('BasicContainer component', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <BasicContainer>
        <MockedChild />
      </BasicContainer>,
    );
    expect(getByText('Test Children')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const {toJSON} = render(
      <BasicContainer>
        <MockedChild />
      </BasicContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
