import React, { useState } from 'react';

import {
  makeStyles,
  Paper,
  Typography,
  Step,
  Stepper,
  StepLabel,
} from '@components';

import RegisterConfirmation from './RegisterConfirmation';
import RegisterFooter from './RegisterFooter';
import RegisterContent from './RegisterContent';

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

const Register = () => {
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const validate = (event) => {
    const auxErrors = { ...errors };
    const isEmptyValue = !event.target.value;

    if (isEmptyValue) {
      auxErrors[event.target.name] = 'Esse campo é obrigatório.';
    } else {
      auxErrors[event.target.name] = '';
    }

    setErrors(auxErrors);
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

  const isFinishStep = activeStep === steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const isNotFirstStep = activeStep !== 0;

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Inscrição
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {isFinishStep ? (
            <RegisterConfirmation />
          ) : (
            <RegisterContent
              onBlur={onBlur}
              activeStep={activeStep}
              errors={errors}
            />
          )}
          <RegisterFooter
            handleBack={handleBack}
            handleNext={handleNext}
            isLastStep={isLastStep}
            isNotFirstStep={isNotFirstStep}
          />
        </React.Fragment>
      </Paper>
    </main>
  );
};

export default Register;
