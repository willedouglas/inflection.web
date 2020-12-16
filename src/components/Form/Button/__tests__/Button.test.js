import { render } from '@testing-library/react';
import Button from '../Button';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Button path="path/passed/props">
      Im a Child!
    </Button>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
