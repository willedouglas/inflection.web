import { render } from '@testing-library/react';
import Stepper from '../Stepper';

test('should render child text inside component', () => {
  const { container } = render(
    <Stepper path="path/passed/props">
    </Stepper>
  );

  expect(container.firstChild).toBeVisible();
});
