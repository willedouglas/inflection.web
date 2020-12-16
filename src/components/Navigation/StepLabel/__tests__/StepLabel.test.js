import { render } from '@testing-library/react';
import StepLabel from '../StepLabel';

test('should render child text inside component', () => {
  const { getByText } = render(
    <StepLabel path="path/passed/props">
      Im a Child!
    </StepLabel>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
