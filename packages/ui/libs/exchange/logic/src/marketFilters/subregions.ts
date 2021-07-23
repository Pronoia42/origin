import { ConfigurationDTORegions } from '@energyweb/origin-backend-react-query-client';
import {
  FormSelectOption,
  SelectAutocompleteProps,
} from '@energyweb/origin-ui-core';
import { prepareSubRegionsOptions } from '../utils';

type TUseSubRegionsFilterLogic = (
  value: FormSelectOption[],
  onChange: (...event: any[]) => void,
  country: string,
  allRegions: ConfigurationDTORegions,
  selectedRegions: FormSelectOption[]
) => SelectAutocompleteProps;

export const useSubRegionsFilterLogic: TUseSubRegionsFilterLogic = (
  value,
  onChange,
  country,
  allRegions,
  selectedRegions
) => {
  return {
    value,
    onChange,
    field: {
      name: 'subregion',
      label: 'Subregion',
      multiple: true,
      options: prepareSubRegionsOptions(allRegions, country, selectedRegions),
    },
    errorExists: false,
    errorText: '',
    variant: 'filled',
  };
};
