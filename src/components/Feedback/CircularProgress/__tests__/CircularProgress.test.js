import { render } from '@testing-library/react';
import CircularProgress from '../CircularProgress';

test('should render child text inside component', () => {
  const { container } = render(
    <CircularProgress>
    </CircularProgress>
  );

  expect(container.firstChild).toBeVisible();
});
