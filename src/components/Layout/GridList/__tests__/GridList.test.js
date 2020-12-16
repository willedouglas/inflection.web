import { render } from '@testing-library/react';
import GridList from '../GridList';

test('should render child text inside component', () => {
  const { container } = render(
    <GridList path="path/passed/props">
      Im a Child!
    </GridList>
  );

  expect(container.firstChild).toBeVisible();
});
