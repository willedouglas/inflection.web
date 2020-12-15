import React from 'react';

import { Typography } from '@components';

import RegisterPersonalInfo from './RegisterPersonalInfo';
import RegisterProfessionalInfo from './RegisterProfessionalInfo';

const RegisterConfirmation = ({
  onBlur,
  values,
  errors,
}) => (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Confirme suas informações
    </Typography>
    <Typography variant="subtitle1">
      Garante que tudo que você nos informou está correto e boa sorte.
    </Typography>
    <br />
    <RegisterPersonalInfo
      onBlur={onBlur}
      values={values}
      errors={errors}
      readOnly
    />
    <br />
    <RegisterProfessionalInfo
      onBlur={onBlur}
      values={values}
      errors={errors}
      readOnly
    />
  </React.Fragment>
);

export default RegisterConfirmation;
