import {
  KYCStatus,
  OrganizationStatus,
  UserStatus,
} from '@energyweb/origin-backend-core';

export const userMock = {
  id: 123,
  title: 'Mr',
  firstName: 'Test',
  lastName: 'User',
  username: 'testuser@mail.com',
  telephone: '111-111-111',
  blockchainAccountAddress: '0x111111111111111f123',
  blockchainAccountSignedMessage: '0x11111112233abc',
  notifications: true,
  rights: 1,
  status: UserStatus.Active,
  kycStatus: KYCStatus.Passed,
  organization: {
    id: 100,
    name: 'Test User Organization',
    status: OrganizationStatus.Active,
  },
  emailConfirmed: false,
};
