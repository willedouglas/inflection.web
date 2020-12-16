import { submit } from '@resources/subscription';

const validateFirstStep = (values) => (
  !!values.firstName
  && !!values.lastName
  && !!values.email
  && !!values.phone
  && !!values.address
  && !!values.city
  && !!values.state
  && !!values.cep
  && !!values.country
);

const validateSecondStep = (values) => (
  !!values.amount
  && !!values.english
  && !!values.worked
  && !!values.tech
);

const isValidStep = (activeStep, values) => {
  const VALIDATION_STEP = {
    0: validateFirstStep(values),
    1: validateSecondStep(values),
    2: true,
  };

  return VALIDATION_STEP[activeStep];
};

const validateEmptyFields = (values, key, value) => {
  const validatedValues = { ...values };
  const isEmptyValue = !value;

  if (isEmptyValue) {
    validatedValues[key] = 'Esse campo é obrigatório.';
  } else {
    validatedValues[key] = '';
  }

  return validatedValues;
};

const submitSubscription = (subscription) => submit(subscription);

export {
  isValidStep,
  validateEmptyFields,
  submitSubscription,
};
