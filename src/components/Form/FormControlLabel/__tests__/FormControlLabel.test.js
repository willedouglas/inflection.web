import { render } from '@testing-library/react';
import Checkbox from '../../Checkbox/Checkbox';
import FormControlLabel from '../FormControlLabel';

test('should render child text inside component', () => {
  const { container } = render(
    <FormControlLabel control={<Checkbox />}>
    </FormControlLabel>
  );

  expect(container.firstChild).toBeVisible();
});
