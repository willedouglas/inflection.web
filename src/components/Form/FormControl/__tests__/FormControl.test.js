import { render } from '@testing-library/react';
import FormControl from '../FormControl';

test('should render child text inside component', () => {
  const { getByText } = render(
    <FormControl
      path="path/passed/props">
      <h1>Im a Child!</h1>
    </FormControl>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
