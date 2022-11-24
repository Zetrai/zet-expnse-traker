import React, { useContext } from 'react';

import Header from '../../components/common/header/header.component';
import Authentication from '../../components/profile-components/authentication/authentication.component';
import ProfileDashboard from '../../components/profile-components/profile-dashboard/profile-dashboard.component';
import { ReactComponent as ProfileLogo } from '../../assets/icons/people_circle.svg';

import { signOutUser } from '../../utils/firebase/firebase.util';

import { UserContext } from '../../contexts/user.context';

import { ProfileContainer } from './profile.styles';

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  const check = () => <ProfileLogo onClick={signOutUser} />;

  return (
    <ProfileContainer>
      <Header title='Profile' ProfileLogo={currentUser ? check : undefined} />
      {!currentUser ? <Authentication /> : <ProfileDashboard />}
    </ProfileContainer>
  );
};

export default Profile;
