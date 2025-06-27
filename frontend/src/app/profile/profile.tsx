import React from 'react';
import { View, Text } from 'react-native';
import useProfile from './profile.hook';
import styles from './profile.styles';

export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const {} = useProfile();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
