import React, { useState, useEffect } from 'react';

import {
  makeStyles,
  Paper,
  Typography,
  Step,
  Stepper,
  StepLabel,
} from '@components';

import { isValidStep, validateEmptyFields, submitSubscription } from './registerService';

import RegisterConfirmation from './RegisterConfirmation';
import RegisterFooter from './RegisterFooter';
import RegisterContent from './RegisterContent';
import RegisterLoading from './RegisterLoading';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

const steps = ['Dados pessoais', 'Dados profissionais', 'Enviar informações'];

const Register = ({ location }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ amount: 1, english: 'basic' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const isFinishStep = activeStep === steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const isNotFirstStep = activeStep !== 0;
  const isValid = isValidStep(activeStep, values);

  const updateWithLinkedin = () => {
    const { state = {} } = location;
    const auxValues = { ...values };

    Object.keys(state).forEach((key) => { auxValues[key] = state[key]; });

    setValues(auxValues);
    setLoading(false);
  };

  const validate = (event) => {
    const { value, name } = event.target;
    const validatedValues = validateEmptyFields(errors, name, value);

    setErrors(validatedValues);
  };

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const onBlur = (event) => {
    validate(event);
    handleChange(event);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = () => submitSubscription(values);

  useEffect(() => {
    updateWithLinkedin();
  }, []);

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Inscrição
        </Typography>
        <Stepper
          activeStep={activeStep}
          className={classes.stepper}
          alternativeLabel
          nonLinear
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {loading ? <RegisterLoading /> : (
          <React.Fragment>
            {isFinishStep ? (
              <RegisterConfirmation />
            ) : (
              <RegisterContent
                onBlur={onBlur}
                onSubmit={onSubmit}
                activeStep={activeStep}
                values={values}
                errors={errors}
              />
            )}
            <RegisterFooter
              isValid={isValid}
              handleBack={handleBack}
              handleNext={handleNext}
              isLastStep={isLastStep}
              isNotFirstStep={isNotFirstStep}
            />
          </React.Fragment>
        )}
      </Paper>
    </main>
  );
};

export default Register;
