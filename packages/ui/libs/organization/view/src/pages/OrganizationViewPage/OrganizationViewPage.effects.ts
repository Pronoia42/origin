import { useTranslation } from 'react-i18next';
import {
  useMyIRecOrganizationData,
  useMyOrganizationData,
} from '@energyweb/origin-ui-organization-data';
import {
  getOrganizationViewLogic,
  getIRecOrganizationViewLogic,
} from '@energyweb/origin-ui-organization-logic';

export const useOrganizationViewPageEffects = () => {
  const { t } = useTranslation();
  const { organizationLoading, organization } = useMyOrganizationData();
  const { iRecOrgLoading, iRecOrganization } = useMyIRecOrganizationData();

  const { orgFormData, docsBlockHeading, companyProofData, signatoryData } =
    !!organization && getOrganizationViewLogic(t, organization);

  const iRecDataForms =
    !iRecOrgLoading &&
    !!iRecOrganization &&
    getIRecOrganizationViewLogic(t, iRecOrganization);

  const showCompanyProofDocs = organization?.documentIds?.length;
  const showSignatoryIdDocs = organization?.signatoryDocumentIds?.length;
  const showDocuments = showCompanyProofDocs || showSignatoryIdDocs;
  const pageLoading = organizationLoading || iRecOrgLoading;

  return {
    pageLoading,
    orgFormData,
    iRecDataForms,
    docsBlockHeading,
    showDocuments,
    showCompanyProofDocs,
    showSignatoryIdDocs,
    companyProofData,
    signatoryData,
  };
};
