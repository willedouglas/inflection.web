import { render } from '@testing-library/react';
import FormHelperText from '../FormHelperText';

test('should render child text inside component', () => {
  const { getByText } = render(
    <FormHelperText path="path/passed/props">
      Im a Child!
    </FormHelperText>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
