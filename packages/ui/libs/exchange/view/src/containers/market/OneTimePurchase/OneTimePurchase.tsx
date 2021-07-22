import { Divider, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { MarketButton, TotalAndButtons } from '../TotalAndButtons';
import { useStyles } from './OneTimePurchase.styles';
import { useOneTimePurchaseEffects } from './OneTimePurchase.effects';
import { FormDatePicker } from 'libs/ui/core/src/components/form/FormDatePicker';
import { FormInput } from '@energyweb/origin-ui-core';

export const OneTimePurchase = () => {
  const classes = useStyles();
  const { register, control, fields, buttons } = useOneTimePurchaseEffects();

  const buttonsMock: MarketButton[] = [
    {
      label: 'Place bid order',
      onClick: () => {
        console.log('place bid clicked');
      },
      buttonProps: {
        variant: 'contained',
        disabled: true,
      },
    },
  ];

  return (
    <div className={classes.wrapper}>
      <Grid container>
        <Grid item xs={6}>
          <FormDatePicker
            control={control}
            errorExists={false}
            errorText={''}
            field={fields.generationFrom}
          />
        </Grid>
        <Grid item xs={6}>
          <FormDatePicker
            control={control}
            errorExists={false}
            errorText={''}
            field={fields.generationTo}
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container>
        <Grid item xs={6}>
          <FormInput
            variant="filled"
            field={fields.energy}
            isDirty={true}
            disabled={false}
            register={register}
            errorExists={false}
            errorText={''}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInput
            variant="filled"
            field={fields.price}
            isDirty={true}
            disabled={false}
            register={register}
            errorExists={false}
            errorText={''}
          />
        </Grid>
      </Grid>
      <TotalAndButtons totalPrice="$0.00" buttons={buttons} />
    </div>
  );
};
