import { render } from '@testing-library/react';
import Avatar from '../Avatar';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Avatar
      path="path/passed/props">
      <h1>Im a Child!</h1>
    </Avatar>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
