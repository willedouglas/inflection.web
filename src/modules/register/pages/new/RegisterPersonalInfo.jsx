import React from 'react';

import {
  Grid,
  Typography,
  TextField,
} from '@components';

import RegisterLinkedin from './RegisterLinkedin';

const RegisterPersonalInfo = ({ onBlur, errors }) => (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Dados pessoais
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="firstName"
          name="firstName"
          label="Nome"
          onBlur={onBlur}
          error={!!errors.firstName}
          helperText={errors.firstName}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="lastName"
          name="lastName"
          label="Sobrenome"
          onBlur={onBlur}
          error={!!errors.lastName}
          helperText={errors.lastName}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          name="email"
          label="Email"
          error={!!errors.email}
          helperText={errors.email}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="phone"
          name="phone"
          label="Celular"
          error={!!errors.phone}
          helperText={errors.phone}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="address"
          name="address"
          label="Endereço"
          error={!!errors.address}
          helperText={errors.address}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="city"
          name="city"
          label="Cidade"
          error={!!errors.city}
          helperText={errors.city}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="Estado"
          error={!!errors.state}
          helperText={errors.state}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="cep"
          name="cep"
          label="CEP"
          error={!!errors.cep}
          helperText={errors.cep}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="country"
          name="country"
          label="País"
          error={!!errors.country}
          helperText={errors.country}
          onBlur={onBlur}
          required
          fullWidth
        />
      </Grid>
    </Grid>
    <RegisterLinkedin />
  </React.Fragment>
);

export default RegisterPersonalInfo;
