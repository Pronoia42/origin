import {
  ComposedDevice,
  ComposedPublicDevice,
} from '@energyweb/origin-ui-device-data';
import {
  FallbackIconProps,
  IconTextProps,
  SpecFieldProps,
} from '@energyweb/origin-ui-core';
import { CodeNameDTO } from '@energyweb/origin-device-registry-irec-local-api-react-query-client';

export type TUseSpecsForAllDeviceCardArgs = {
  device: ComposedPublicDevice;
};

export type TUseSpecsForAllDeviceCardReturnType = {
  specsData: SpecFieldProps[];
  iconsData: IconTextProps[];
};

export type TUseSpecsForAllDeviceCard = (
  args: TUseSpecsForAllDeviceCardArgs
) => TUseSpecsForAllDeviceCardReturnType;

export type TUseSpecsForMyDeviceCardArgs = {
  device: ComposedDevice;
  allTypes: CodeNameDTO[];
};
export type TUseSpecsForMyDeviceCardReturnType = {
  imageUrl: string;
  fallbackIcon: FallbackIconProps['icon'];
  cardHeaderProps: {
    deviceName: string;
    buttonText: string;
    buttonLink: string;
    specFieldProps: SpecFieldProps;
  };
  cardContentProps: {
    iconsProps: IconTextProps[];
  };
};
export type TUseSpecsForMyDeviceCard = (
  args: TUseSpecsForMyDeviceCardArgs
) => TUseSpecsForMyDeviceCardReturnType;
