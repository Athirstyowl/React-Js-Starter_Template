import React from 'react'
import { Field, Form, Formik } from 'formik'
import CustomTextField from '../atoms/CustomTextField'
import CustomButton from '../atoms/CustomButton'
import { Box, CircularProgress, Grid } from '@mui/material'

const GeneralForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  formProps,
  submitButtonProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...formProps}>
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid item xs={field.gridSize || 12} key={index}>
                <Field name={field.name}>
                  {({ field: formikField, meta }) => (
                    <CustomTextField
                      type={field.type}
                      label={field.label || ''}
                      value={formikField.value}
                      onChange={formikField.onChange}
                      onBlur={formikField.onBlur}
                      placeholder={field.placeholder || ''}
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                      {...formikField}
                    />
                  )}
                </Field>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ my: 2 }}>
            <CustomButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              {...submitButtonProps}>
              {isSubmitting ? <CircularProgress color={'secondary'} /> : 'Submit'}
            </CustomButton>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default GeneralForm
