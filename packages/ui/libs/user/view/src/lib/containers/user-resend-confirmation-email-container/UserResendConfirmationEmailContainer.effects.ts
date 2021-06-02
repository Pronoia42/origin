import { useApiResendConfirmationEmail } from '@energyweb/origin-ui-user-data-access';

export const useUserResendConfirmationEmailContainerEffects = () => {
  const { submitHandler, isLoading } = useApiResendConfirmationEmail();
  return { submitHandler, isLoading };
};
