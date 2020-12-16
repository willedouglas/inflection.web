import { render } from '@testing-library/react';
import Typography from '../Typography';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Typography path="path/passed/props">
      Im a Child!
    </Typography>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
