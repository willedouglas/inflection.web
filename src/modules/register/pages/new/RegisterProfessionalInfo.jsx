import React from 'react';

import {
  makeStyles,
  Grid,
  Typography,
  Slider,
  Select,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@components';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const RegisterProfessionalInfo = ({
  onChange,
  values,
  errors,
  readOnly,
}) => {
  const classes = useStyles();

  const handleUpdateSlider = (event, value) => onChange({ target: { name: 'amount', value } });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados profissionais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom>
            Qual sua expectativa salárial (em mil reais)?
          </Typography>
          <Slider
            valueLabelDisplay="auto"
            value={values.amount}
            step={1}
            min={1}
            max={15}
            marks
            onChange={handleUpdateSlider}
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom>
            Qual é o seu nível de inglês?
          </Typography>
          <FormControl className={classes.formControl} error={!!errors.english}>
            <InputLabel id="english">Nível de inglês</InputLabel>
            <Select
              labelId="english"
              id="english"
              name="english"
              value={values.english}
              onChange={onChange}
              disabled={readOnly}
              autoWidth
              native
            >
              <option value="basic">Básico</option>
              <option value="intermediate">Intermediário</option>
              <option value="expert">Avançado</option>
            </Select>
            { !!errors.english && <FormHelperText>{errors.english}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom>
            Em quais lugares você já trabalhou?
          </Typography>
          <TextField
            id="worked"
            name="worked"
            label="Experiências"
            defaultValue={values.worked}
            error={!!errors.worked}
            helperText={errors.worked}
            onBlur={onChange}
            disabled={readOnly}
            multiline
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom>
            Quais tecnologias você conhece?
          </Typography>
          <TextField
            id="tech"
            name="tech"
            label="Tecnologias"
            defaultValue={values.tech}
            error={!!errors.tech}
            helperText={errors.tech}
            onBlur={onChange}
            disabled={readOnly}
            multiline
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RegisterProfessionalInfo;
