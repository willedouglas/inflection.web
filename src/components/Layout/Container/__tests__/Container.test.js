import { render } from '@testing-library/react';
import Container from '../Container';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Container path="path/passed/props">
      Im a Child!
    </Container>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
