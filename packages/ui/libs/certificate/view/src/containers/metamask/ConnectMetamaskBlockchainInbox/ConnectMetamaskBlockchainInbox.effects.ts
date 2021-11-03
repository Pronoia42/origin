import { useConnectMetamaskBlockchainInboxLogic } from '@energyweb/origin-ui-certificate-logic';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useCertificateAppEnv } from '../../../context';

export const useConnectMetamaskPlaceHolderEffects = () => {
  const { allowedChainIds } = useCertificateAppEnv();

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('md'));

  const { clickHandler, buttonText, title } =
    useConnectMetamaskBlockchainInboxLogic(allowedChainIds);

  return { clickHandler, buttonText, title, mobileView };
};
