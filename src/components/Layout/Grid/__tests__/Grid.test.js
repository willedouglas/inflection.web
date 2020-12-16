import { render } from '@testing-library/react';
import Grid from '../Grid';

test('should render child text inside component', () => {
  const { getByText } = render(
    <Grid path="path/passed/props">
      Im a Child!
    </Grid>
  );

  expect(getByText(/Im a Child!/i)).toBeInTheDocument();
});
