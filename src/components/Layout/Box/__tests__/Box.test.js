import { render } from '@testing-library/react';
import Box from '../Box';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Box path="path/passed/props">
      Im a Child!
    </Box>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
