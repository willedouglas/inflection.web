import React from 'react';

import RegisterPersonalInfo from './RegisterPersonalInfo';
import RegisterProfessionalInfo from './RegisterProfessionalInfo';
import RegisterConfirmation from './RegisterConfirmation';

const RegisterContent = ({
  onSubmit,
  onBlur,
  activeStep,
  errors,
  values,
}) => {
  const getStepContent = (step) => {
    const getRegisterPersonalInfoStep = () => (
      <RegisterPersonalInfo
        onBlur={onBlur}
        values={values}
        errors={errors}
      />
    );

    const getRegisterProfessionalInfoStep = () => (
      <RegisterProfessionalInfo
        onChange={onBlur}
        values={values}
        errors={errors}
      />
    );

    const getRegisterConfirmationStep = () => (
      <RegisterConfirmation
        onBlur={onBlur}
        values={values}
        errors={errors}
        onSubmit={onSubmit}
      />
    );

    const CONTENT_STEPS = {
      0: getRegisterPersonalInfoStep(),
      1: getRegisterProfessionalInfoStep(),
      2: getRegisterConfirmationStep(),
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
