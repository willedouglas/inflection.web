import { render } from '@testing-library/react';
import Slider from '../Slider';

test('should render child text inside component', () => {
  const { container } = render(
    <Slider path="path/passed/props">
    </Slider>
  );

  expect(container.firstChild).toBeVisible();
});
