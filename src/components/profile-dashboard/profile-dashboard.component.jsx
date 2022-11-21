import React, { useContext } from 'react';

import { UserContext } from '../../contexts/user.context';

import { DashboardContainer, Title } from './profile-dashboard.styles';

const ProfileDashboard = () => {
  const { currentUser } = useContext(UserContext);
  const { displayName } = currentUser;

  return (
    <DashboardContainer>
      <Title>Hello, {displayName}</Title>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
