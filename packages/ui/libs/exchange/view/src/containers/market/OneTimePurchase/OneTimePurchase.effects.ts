import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOneTimePurchaseFormLogic } from '@energyweb/origin-ui-exchange-logic';

export const useOneTimePurchaseEffects = () => {
  const { initialValues, validationSchema, fields, buttons } =
    useOneTimePurchaseFormLogic();

  const { register, control } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  return { register, control, fields, buttons };
};
