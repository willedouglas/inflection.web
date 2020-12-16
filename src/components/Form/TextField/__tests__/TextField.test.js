import { render } from '@testing-library/react';
import TextField from '../TextField';

test('should render child text inside component', () => {
  const { container } = render(
    <TextField path="path/passed/props">
    </TextField>
  );

  expect(container.firstChild).toBeVisible();
});
