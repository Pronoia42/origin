import { Divider } from '@material-ui/core';
import React from 'react';
import { TotalAndButtons } from '../TotalAndButtons';
import { useStyles } from './OneTimePurchase.styles';
import { useOneTimePurchaseEffects } from './OneTimePurchase.effects';
import { FormDatePicker } from 'libs/ui/core/src/components/form/FormDatePicker';
import { FormInput } from '@energyweb/origin-ui-core';

export const OneTimePurchase = () => {
  const classes = useStyles();
  const { register, control, fields, buttons } = useOneTimePurchaseEffects();

  return (
    <div>
      <div className={classes.block}>
        <div className={classes.item}>
          <FormDatePicker
            control={control}
            errorExists={false}
            errorText={''}
            field={fields.generationFrom}
          />
        </div>
        <div className={classes.item}>
          <FormDatePicker
            control={control}
            errorExists={false}
            errorText={''}
            field={fields.generationTo}
          />
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.block}>
        <div className={classes.item}>
          <FormInput
            variant="filled"
            field={fields.energy}
            isDirty={true}
            disabled={false}
            register={register}
            errorExists={false}
            errorText={''}
            margin="none"
          />
        </div>
        <div className={classes.item}>
          <FormInput
            variant="filled"
            field={fields.price}
            isDirty={true}
            disabled={false}
            register={register}
            errorExists={false}
            errorText={''}
            margin="none"
          />
        </div>
      </div>
      <TotalAndButtons totalPrice="$0.00" buttons={buttons} />
    </div>
  );
};
