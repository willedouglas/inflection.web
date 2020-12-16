import { render } from '@testing-library/react';
import Step from '../Step';

test('should render child text inside component', () => {
  const { container } = render(
    <Step path="path/passed/props">
      Im a Child!
    </Step>
  );

  expect(container.firstChild).toBeVisible();
});
