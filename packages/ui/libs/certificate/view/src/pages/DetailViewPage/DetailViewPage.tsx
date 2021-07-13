import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { CertificateDetails } from '../../containers';
import { useDetailedPageViewEffects } from './DetailViewPage.effects';
import { useStyles } from './DetailViewPage.styles';

export const DetailViewPage = () => {
  const { certificate, isLoading } = useDetailedPageViewEffects();
  const classes = useStyles();

  if (isLoading) return <CircularProgress />;

  return (
    <div className={classes.wrapper}>
      <CertificateDetails certificate={certificate} />
    </div>
  );
};
