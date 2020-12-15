import React from 'react';

import { makeStyles, Button } from '@components';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkedin: {
    marginTop: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const RegisterConfirmation = ({
  isValid,
  isNotFirstStep,
  isLastStep,
  handleBack,
  handleNext,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      {isNotFirstStep && (
        <Button onClick={handleBack} className={classes.button}>
          Voltar
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
        disabled={!isValid}
      >
        {isLastStep ? 'Enviar' : 'Próximo'}
      </Button>
    </div>
  );
};

export default RegisterConfirmation;
