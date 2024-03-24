import {render} from '@testing-library/react-native';
import DetailsText from './detailsText';

const mockText = 'test in jest with test ideas';

describe('Details Text Component', () => {
  it('renders text corectlty', () => {
    const {getByText} = render(
      <DetailsText item={{pending: true, description: mockText}} lines={1} />,
    );
    expect(getByText(mockText)).toBeTruthy();
  });

  it('matches snapshot', () => {
    const {toJSON} = render(
      <DetailsText item={{pending: true, description: mockText}} lines={1} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
