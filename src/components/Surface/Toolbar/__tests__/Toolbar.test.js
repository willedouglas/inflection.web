import { render } from '@testing-library/react';
import Toolbar from '../Toolbar';

test('should render child text inside component', () => {
  const { container } = render(
    <Toolbar path="path/passed/props">
    </Toolbar>
  );

  expect(container.firstChild).toBeVisible();
});
