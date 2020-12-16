import { render } from '@testing-library/react';
import Paper from '../Paper';

test('should render child text inside component', () => {
  const { container } = render(
    <Paper path="path/passed/props">
    </Paper>
  );

  expect(container.firstChild).toBeVisible();
});
