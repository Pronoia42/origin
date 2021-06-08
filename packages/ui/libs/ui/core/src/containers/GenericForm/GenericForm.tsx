import { Box, Button, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import { DoubleColumnForm, SingleColumnForm } from '../../components';
import { useGenericFormEffects } from './GenericForm.effects';
import { TGenericForm } from './GenericForm.types';

export const GenericForm: TGenericForm = memo(
  ({
    submitHandler,
    validationSchema,
    initialValues,
    formTitleVariant,
    formTitle,
    fields,
    buttonText,
    buttonFullWidth,
    buttonWrapperProps,
    children,
    formClass,
    inputsVariant,
    formInputsProps,
    partOfMultiForm,
    twoColumns,
    processing,
    hideSubmitButton,
  }) => {
    const { control, register, onSubmit, errors, buttonDisabled, dirtyFields } =
      useGenericFormEffects({
        validationSchema,
        submitHandler,
        initialValues,
        partOfMultiForm,
      });

    return (
      <form onSubmit={onSubmit} className={formClass}>
        {formTitle && (
          <Box>
            <Typography variant={formTitleVariant ?? 'h4'}>
              {formTitle}
            </Typography>
          </Box>
        )}

        {twoColumns ? (
          <DoubleColumnForm
            processing={processing}
            fields={fields}
            control={control}
            register={register}
            errors={errors}
            dirtyFields={dirtyFields}
            formInputsProps={formInputsProps}
            inputsVariant={inputsVariant}
          />
        ) : (
          <SingleColumnForm
            processing={processing}
            fields={fields}
            control={control}
            register={register}
            errors={errors}
            dirtyFields={dirtyFields}
            formInputsProps={formInputsProps}
            inputsVariant={inputsVariant}
          />
        )}

        {children}

        <Box
          hidden={hideSubmitButton}
          my={2}
          display="flex"
          justifyContent="flex-end"
          {...buttonWrapperProps}
        >
          <Button
            fullWidth={buttonFullWidth}
            color="primary"
            name="submit"
            size="large"
            variant="contained"
            disabled={buttonDisabled}
            type="submit"
          >
            {buttonText}
          </Button>
        </Box>
      </form>
    );
  }
);
