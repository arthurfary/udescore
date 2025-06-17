import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Image,
} from 'react-native';

// Ícone de seta melhorado e centralizado
const ArrowIcon = ({ size = 24, color = 'white' }) => (
  <View style={{
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <View style={{
      width: size * 0.5,
      height: size * 0.5,
      borderRightWidth: 3,
      borderTopWidth: 3,
      borderColor: color,
      transform: [{ rotate: '45deg' }],
      marginLeft: -size * 0.02,
      marginTop: 0,
    }} />
  </View>
);

// Ícone de voltar melhorado e centralizado
const BackIcon = ({ size = 20, color = '#374151' }) => (
  <View style={{
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <View style={{
      width: size * 0.5,
      height: size * 0.5,
      borderLeftWidth: 3,
      borderTopWidth: 3,
      borderColor: color,
      transform: [{ rotate: '-45deg' }],
      marginRight: -size * 0.02,
      marginTop: 0,
    }} />
  </View>
);

const { width, height } = Dimensions.get('window');

const Logo = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de entrada suave
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Animação de flutuação suave
    const floatAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );
    floatAnimation.start();
  }, []);

  const float = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  return (
    <View style={styles.logoContainer}>
      <Animated.View
        style={[
          styles.logoVisualContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: float }
            ]
          }
        ]}
      >
        <Image
          source={require('../assets/logo_udescore.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};



function LoginScreen({ setPage }: Props): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    email: '',
    usuario: '',
    senha: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkLogin = async () => { /* Pasini: Faz igual para o registro! */

    const response = await fetch('https://udescore.fooyer.space/backend/login.php', { /* Pasini: Altere para register.php ! */
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: formData.usuario, senha: formData.senha }),  /* Pasini: Coloque as informações de registro ! */
          });

          const data = await response.json();

          if (data.success == false) { /* Pasini: Essa parte mantém igual (if e else) */
              alert(data.message)
          } else {
              setPage('Home');
          }
  };

  // Tela Splash
  if (currentScreen === 'splash') {
    return (
      <View style={styles.container}>
        <Logo />
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => setCurrentScreen('welcome')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela de Boas-vindas
  if (currentScreen === 'welcome') {
    return (
      <View style={styles.container}>
        <Logo />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Já tem uma conta?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Primeira vez?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setCurrentScreen('register')}
          >
            <Text style={styles.registerButtonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Tela de Login
  if (currentScreen === 'login') {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainerSmall}>
          <Logo />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Usuário</Text>
            <TextInput
              style={styles.input}
              value={formData.usuario}
              onChangeText={(value) => handleInputChange('usuario', value)}
              placeholder="seu.email@exemplo.com"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={formData.senha}
              onChangeText={(value) => handleInputChange('senha', value)}
              placeholder="••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={(e) => checkLogin(e)}
          >
            <ArrowIcon size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setCurrentScreen('welcome')}
          >
            <View style={styles.backButtonIcon}>
              <BackIcon size={18} color="#374151" />
            </View>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButtonOrange}
            onPress={() => setCurrentScreen('register')}
          >
            <Text style={styles.secondaryButtonTextWhite}>Cadastrar novo usuário</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Tela de Cadastro
  if (currentScreen === 'register') {
    return (
      <View style={styles.container}>
        <View style={styles.registerHeaderContainer}>
          <Text style={styles.registerTitle}>Cadastrar novo usuário</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={formData.nome}
              onChangeText={(value) => handleInputChange('nome', value)}
              placeholder="Seu Nome"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Matrícula</Text>
            <TextInput
              style={styles.input}
              value={formData.matricula}
              onChangeText={(value) => handleInputChange('matricula', value)}
              placeholder="1234"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="seu.email@exemplo.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={formData.senha}
              onChangeText={(value) => handleInputChange('senha', value)}
              placeholder="••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => alert('Cadastro realizado!')}
          >
            <ArrowIcon size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setCurrentScreen('welcome')}
          >
            <View style={styles.backButtonIcon}>
              <BackIcon size={18} color="#374151" />
            </View>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButtonOrange}
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.secondaryButtonTextWhite}>Já tem conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#022415',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainerSmall: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 80,
  },
  logoVisualContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 250,
    height: 180,
  },
  continueButton: {
    borderWidth: 2,
    borderColor: '#6B7280',
    paddingVertical: 18,
    paddingHorizontal: 35,
    borderRadius: 15,
    marginTop: 60,
  },
  continueButtonText: {
    color: '#D1D5DB',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'monospace',
    fontWeight: '600',
    letterSpacing: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'monospace',
    fontWeight: '600',
    letterSpacing: 1,
  },
  loginButton: {
    backgroundColor: '#00bf63',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    minWidth: 200,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  registerButton: {
    borderWidth: 2,
    borderColor: '#00bf63',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    minWidth: 200,
  },
  registerButtonText: {
    color: '#00bf63',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  backButtonIcon: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'monospace',
    fontSize: 16,
    letterSpacing: 1,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 98,
    left: 20,
    right: 20,
  },
  secondaryButtonOrange: {
    backgroundColor: '#FB923C',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
  },
  secondaryButtonTextWhite: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'monospace',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 120,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#4B5563',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 15,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  submitButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FB923C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: 20,
  },
  registerHeaderContainer: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  registerTitle: {
    color: '#FB923C',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 1,
    textShadowColor: 'rgba(251, 146, 60, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  separatorContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    width: '60%',
    height: 1,
    backgroundColor: '#4B5563',
  },
});

export default LoginScreen;