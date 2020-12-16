import { render } from '@testing-library/react';
import MenuItem from '../MenuItem';

test('should render child text inside component', () => {
  const { getByText } = render(
    <MenuItem path="path/passed/props">
      Im a Child!
    </MenuItem>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
