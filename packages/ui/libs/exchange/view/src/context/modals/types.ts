import {
  Bundle,
  BundlePublicDTO,
} from '@energyweb/exchange-react-query-client';
import { IDeviceWithSupply } from '@energyweb/origin-ui-exchange-logic';
import { ExchangeModalsActionsEnum } from './reducer';

export interface IExchangeModalsStore {
  removeSupply: {
    open: boolean;
    supplyId: string;
  };
  updateSupply: {
    open: boolean;
    deviceWithSupply: IDeviceWithSupply;
  };
  bundleDetails: {
    open: boolean;
    bundle: Bundle | BundlePublicDTO;
    isOwner?: boolean;
  };
}

interface IShowUpdateSupplyAction {
  type: ExchangeModalsActionsEnum.SHOW_UPDATE_SUPPLY;
  payload: {
    open: boolean;
    deviceWithSupply: IDeviceWithSupply;
  };
}

interface IShowRemoveSupplyAction {
  type: ExchangeModalsActionsEnum.SHOW_REMOVE_SUPPLY;
  payload: {
    open: boolean;
    supplyId: string;
  };
}

interface IShowBundleDetailsAction {
  type: ExchangeModalsActionsEnum.SHOW_BUNDLE_DETAILS;
  payload: {
    open: boolean;
    bundle: Bundle | BundlePublicDTO;
    isOwner?: boolean;
  };
}

export type TExchangeModalsAction =
  | IShowUpdateSupplyAction
  | IShowRemoveSupplyAction
  | IShowBundleDetailsAction;
