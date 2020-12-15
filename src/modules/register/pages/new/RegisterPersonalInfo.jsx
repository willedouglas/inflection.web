import React from 'react';

import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  Avatar,
} from '@components';

import RegisterLinkedin from './RegisterLinkedin';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(3),
  },
}));

const RegisterPersonalInfo = ({
  onBlur,
  values,
  errors,
  readOnly,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados pessoais
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Avatar
          className={classes.large}
          src={values.profilePicture}
          alt="User Avatar"
        />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="Nome"
            defaultValue={values.firstName}
            onBlur={onBlur}
            error={!!errors.firstName}
            helperText={errors.firstName}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Sobrenome"
            defaultValue={values.lastName}
            onBlur={onBlur}
            error={!!errors.lastName}
            helperText={errors.lastName}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            defaultValue={values.email}
            error={!!errors.email}
            helperText={errors.email}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Celular"
            defaultValue={values.phone}
            error={!!errors.phone}
            helperText={errors.phone}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Endereço"
            defaultValue={values.address}
            error={!!errors.address}
            helperText={errors.address}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="Cidade"
            defaultValue={values.city}
            error={!!errors.city}
            helperText={errors.city}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Estado"
            defaultValue={values.state}
            error={!!errors.state}
            helperText={errors.state}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cep"
            name="cep"
            label="CEP"
            defaultValue={values.cep}
            error={!!errors.cep}
            helperText={errors.cep}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="País"
            defaultValue={values.country}
            error={!!errors.country}
            helperText={errors.country}
            onBlur={onBlur}
            disabled={readOnly}
            required
            fullWidth
          />
        </Grid>
      </Grid>
      { !readOnly && <RegisterLinkedin />}
    </React.Fragment>
  );
};

export default RegisterPersonalInfo;
