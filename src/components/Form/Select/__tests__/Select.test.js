import { render } from '@testing-library/react';
import Select from '../Select';

test('should render child text inside component', () => {
  const { container } = render(
    <Select path="path/passed/props" value="option">
      <option value="option">Option</option>
    </Select>
  );

  expect(container.firstChild).toBeVisible();
});
