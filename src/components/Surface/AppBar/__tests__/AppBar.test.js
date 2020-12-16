import { render } from '@testing-library/react';
import AppBar from '../AppBar';

test('should render child text inside component', () => {
  const { container } = render(
    <AppBar path="path/passed/props">
    </AppBar>
  );

  expect(container.firstChild).toBeVisible();
});
