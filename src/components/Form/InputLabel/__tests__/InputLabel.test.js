import { render } from '@testing-library/react';
import InputLabel from '../InputLabel';

test('should render child text inside component', () => {
  const { getByText } = render(
    <InputLabel
      path="path/passed/props">
      <h1>Im a Child!</h1>
    </InputLabel>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
