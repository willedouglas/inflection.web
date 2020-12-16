import { render } from '@testing-library/react';
import Checkbox from '../Checkbox';

test('should render child text inside component', () => {
  const { container } = render(
    <Checkbox>
    </Checkbox>
  );
 
  expect(container.firstChild).toBeVisible();
});
