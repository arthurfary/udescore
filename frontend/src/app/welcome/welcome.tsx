import React from 'react';
import { View, Text } from 'react-native';
import useWelcome from './welcome.hook';

export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const {} = useWelcome();
  return (
    <View>
      <Text>Welcome Screen</Text>
    </View>
  );
};

export default Welcome;
