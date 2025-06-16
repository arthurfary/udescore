import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './Pages/Home';
import LoginScreen from './Pages/LoginScreen';

function App(): React.JSX.Element {
  const [page, setPage] = useState('Login');

  let screen;

  switch (page) {
    case 'Login':
      screen = <LoginScreen setPage={setPage} />;
      break;
    case 'Home':
      screen = <Home />;
      break;
    default:
      screen = <LoginScreen setPage={setPage} />;
  }

  return (
    <View style={styles.container}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
