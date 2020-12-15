import React from 'react';

import RegisterPersonalInfo from './RegisterPersonalInfo';

const RegisterContent = ({ activeStep, onBlur, errors }) => {
  const getStepContent = (step) => {
    const CONTENT_STEPS = {
      0: <RegisterPersonalInfo onBlur={onBlur} errors={errors} />,
      1: '',
      2: '',
    };

    return CONTENT_STEPS[step];
  };

  return (
    <React.Fragment>
      {getStepContent(activeStep)}
    </React.Fragment>
  );
};

export default RegisterContent;
