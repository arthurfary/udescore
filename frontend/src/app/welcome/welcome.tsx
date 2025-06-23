import React from 'react';
import { View, Text } from 'react-native';
import useWelcome from './welcome.hook';
import styles from './welcome.styles';

export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const {} = useWelcome();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
    </View>
  );
};

export default Welcome;
