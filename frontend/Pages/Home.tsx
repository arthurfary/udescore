import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';

const { width } = Dimensions.get('window');

// Função para gerar fundos automaticamente
const generateBackgroundType = (courseName, index) => {
  const patterns = ['chip', 'server', 'circuit', 'code', 'geometric', 'wave'];

  // Baseado no nome do curso
  const nameHash = courseName.split('').reduce((hash, char) => {
    return hash + char.charCodeAt(0);
  }, 0);

  // Mistura hash do nome com índice para variedade
  const patternIndex = (nameHash + index) % patterns.length;
  return patterns[patternIndex];
};

// Componente de Ícone melhorado
const IconComponent = ({ name, onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const renderIcon = () => {
    switch (name) {
      case 'home':
        return (
          <View style={styles.homeIcon}>
            <View style={styles.homeRoof} />
            <View style={styles.homeBody} />
            <View style={styles.homeDoor} />
          </View>
        );
      case 'trophy':
        return (
          <View style={styles.trophyIcon}>
            <View style={styles.trophyCup} />
            <View style={styles.trophyLeftHandle} />
            <View style={styles.trophyRightHandle} />
            <View style={styles.trophyStem} />
            <View style={styles.trophyBase} />
            <View style={styles.trophyTopDetail} />
            <View style={styles.trophyMiddleDetail} />
          </View>
        );
      case 'profile':
        return (
          <View style={styles.profileIcon}>
            <View style={styles.profileHead} />
            <View style={styles.profileBody} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.iconTouchable}>
      <View style={styles.iconBase}>
        {renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

// Componente individual do curso com padrões automáticos
const CourseCard = ({ courseName, courseLink, backgroundType, onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(courseName, courseLink);
    } else if (courseLink) {
      Linking.openURL(courseLink);
    }
  };

  const getBackgroundColors = () => {
    switch (backgroundType) {
      case 'chip':
        return {
          primary: '#1e40af',
          secondary: '#3b82f6',
          accent: '#60a5fa',
        };
      case 'server':
        return {
          primary: '#374151',
          secondary: '#6b7280',
          accent: '#9ca3af',
        };
      case 'circuit':
        return {
          primary: '#065f46',
          secondary: '#10b981',
          accent: '#34d399',
        };
      case 'code':
        return {
          primary: '#1f2937',
          secondary: '#7c3aed',
          accent: '#a78bfa',
        };
      case 'geometric':
        return {
          primary: '#dc2626',
          secondary: '#ef4444',
          accent: '#f87171',
        };
      case 'wave':
        return {
          primary: '#0891b2',
          secondary: '#06b6d4',
          accent: '#67e8f9',
        };
      default:
        return {
          primary: '#1e40af',
          secondary: '#3b82f6',
          accent: '#60a5fa',
        };
    }
  };

  const renderBackgroundPattern = () => {
    const colors = getBackgroundColors();

    switch (backgroundType) {
      case 'chip':
        return (
          <View style={styles.patternContainer}>
            {[...Array(8)].map((_, i) => (
              <View
                key={`line-${i}`}
                style={[
                  styles.chipLine,
                  {
                    top: 15 + i * 12,
                    backgroundColor: colors.accent,
                    opacity: 0.6 - i * 0.05,
                  }
                ]}
              />
            ))}
            <View style={[styles.chipProcessor, { backgroundColor: colors.secondary }]} />
            {[...Array(12)].map((_, i) => (
              <View
                key={`dot-${i}`}
                style={[
                  styles.chipDot,
                  {
                    top: 20 + (i % 4) * 20,
                    left: 30 + Math.floor(i / 4) * 60,
                    backgroundColor: colors.accent,
                  }
                ]}
              />
            ))}
          </View>
        );

      case 'server':
        return (
          <View style={styles.patternContainer}>
            {[...Array(5)].map((_, i) => (
              <View key={`rack-${i}`}>
                <View
                  style={[
                    styles.serverRack,
                    {
                      top: 20 + i * 18,
                      backgroundColor: colors.secondary,
                      opacity: 0.7,
                    }
                  ]}
                />
                {[...Array(4)].map((_, j) => (
                  <View
                    key={`led-${i}-${j}`}
                    style={[
                      styles.serverLed,
                      {
                        top: 24 + i * 18,
                        left: 40 + j * 15,
                        backgroundColor: j % 2 === 0 ? '#10b981' : '#ef4444',
                      }
                    ]}
                  />
                ))}
              </View>
            ))}
          </View>
        );

      case 'circuit':
        return (
          <View style={styles.patternContainer}>
            {[...Array(10)].map((_, i) => (
              <View
                key={`path-${i}`}
                style={[
                  styles.circuitPath,
                  {
                    top: 15 + i * 10,
                    left: 10 + (i % 3) * 25,
                    width: 50 + i * 6,
                    backgroundColor: colors.accent,
                    opacity: 0.8 - i * 0.05,
                  }
                ]}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <View
                key={`component-${i}`}
                style={[
                  styles.circuitComponent,
                  {
                    top: 20 + (i % 4) * 22,
                    right: 15 + Math.floor(i / 4) * 40,
                    backgroundColor: colors.secondary,
                  }
                ]}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <View
                key={`solder-${i}`}
                style={[
                  styles.circuitSolder,
                  {
                    top: 18 + (i % 5) * 16,
                    left: 20 + Math.floor(i / 5) * 30,
                    backgroundColor: colors.accent,
                  }
                ]}
              />
            ))}
          </View>
        );

      case 'code':
        return (
          <View style={styles.patternContainer}>
            <View style={styles.codePattern}>
              <View style={styles.codeLine}>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'<'}
                </Text>
                <Text style={[styles.codeText, { color: '#f59e0b' }]}>
                  {'div '}
                </Text>
                <Text style={[styles.codeText, { color: colors.secondary }]}>
                  {'className'}
                </Text>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'="py-5">'}
                </Text>
              </View>
              <View style={[styles.codeLine, { marginLeft: 15 }]}>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'<'}
                </Text>
                <Text style={[styles.codeText, { color: '#f59e0b' }]}>
                  {'div '}
                </Text>
                <Text style={[styles.codeText, { color: colors.secondary }]}>
                  {'className'}
                </Text>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'="container">'}
                </Text>
              </View>
              <View style={[styles.codeLine, { marginLeft: 30 }]}>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'<'}
                </Text>
                <Text style={[styles.codeText, { color: '#10b981' }]}>
                  {'ProductConsumer'}
                </Text>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {' />'}
                </Text>
              </View>
              <View style={[styles.codeLine, { marginLeft: 15 }]}>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'</'}
                </Text>
                <Text style={[styles.codeText, { color: '#f59e0b' }]}>
                  {'div'}
                </Text>
                <Text style={[styles.codeText, { color: colors.accent }]}>
                  {'>'}
                </Text>
              </View>
            </View>
          </View>
        );

      case 'geometric':
        return (
          <View style={styles.patternContainer}>
            {[...Array(12)].map((_, i) => (
              <View
                key={`geo-${i}`}
                style={[
                  styles.geometricShape,
                  {
                    top: 10 + (i % 4) * 30,
                    left: 20 + Math.floor(i / 4) * 50,
                    backgroundColor: colors.accent,
                    opacity: 0.7 - (i % 3) * 0.2,
                    transform: [{ rotate: `${i * 30}deg` }],
                  }
                ]}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <View
                key={`triangle-${i}`}
                style={[
                  styles.triangleShape,
                  {
                    top: 25 + (i % 2) * 60,
                    right: 15 + Math.floor(i / 2) * 40,
                  }
                ]}
              />
            ))}
          </View>
        );

      case 'wave':
        return (
          <View style={styles.patternContainer}>
            {[...Array(6)].map((_, i) => (
              <View
                key={`wave-${i}`}
                style={[
                  styles.waveShape,
                  {
                    top: 20 + i * 20,
                    backgroundColor: colors.accent,
                    opacity: 0.6 - i * 0.08,
                    transform: [{ scaleX: i % 2 === 0 ? 1 : -1 }],
                  }
                ]}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <View
                key={`circle-${i}`}
                style={[
                  styles.floatingCircle,
                  {
                    top: 15 + (i % 4) * 25,
                    right: 10 + Math.floor(i / 4) * 80,
                    backgroundColor: colors.secondary,
                    opacity: 0.5,
                  }
                ]}
              />
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  const colors = getBackgroundColors();

  return (
    <TouchableOpacity style={styles.courseCard} onPress={handlePress}>
      <View style={[styles.courseBackground, { backgroundColor: colors.primary }]}>
        {renderBackgroundPattern()}
        <View style={styles.courseOverlay} />
        <View style={styles.courseLabel}>
          <Text style={styles.courseName}>{courseName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Componente principal que gera a lista de cursos
const CourseList = ({ courses, onCoursePress }) => {
  return (
    <View style={styles.courseContainer}>
      {courses.map((course, index) => (
        <CourseCard
          key={course.id || index}
          courseName={course.name}
          courseLink={course.link}
          backgroundType={generateBackgroundType(course.name, index)}
          onPress={onCoursePress}
        />
      ))}
    </View>
  );
};

// Componente de Loading
const LoadingComponent = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#4ade80" />
    <Text style={styles.loadingText}>Carregando cursos...</Text>
  </View>
);

// Componente de Erro
const ErrorComponent = ({ onRetry, errorMessage }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorTitle}>Ops! Algo deu errado</Text>
    <Text style={styles.errorText}>{errorMessage}</Text>
    <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
      <Text style={styles.retryButtonText}>Tentar Novamente</Text>
    </TouchableOpacity>
  </View>
);

// Componente principal da aplicação
const App = () => {
  const [cursosData, setCursosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // ⚠️ CONFIGURAÇÃO DA API - ALTERE AQUI PARA SUA API REAL ⚠️
  const API_CONFIG = {
    // Substitua pela URL da sua API real
    baseUrl: 'https://jsonplaceholder.typicode.com', // API de exemplo
    endpoints: {
      cursos: '/posts', // Endpoint que retorna a lista de cursos
    },
    headers: {
      'Content-Type': 'application/json',
      // Adicione headers de autenticação se necessário:
      // 'Authorization': 'Bearer seu-token-aqui',
      // 'X-API-Key': 'sua-chave-api-aqui',
    },
    // Configurações de timeout
    timeout: 10000, // 10 segundos
  };

  // ⚠️ PARA USAR SUA API REAL, DESCOMENTE E CONFIGURE:
  /*
  const API_CONFIG = {
    baseUrl: 'https://sua-api-real.com/api',
    endpoints: {
      cursos: '/cursos',
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer seu-token-aqui',
    },
  };
  */

  // Função para fazer chamadas HTTP com timeout
  const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout da requisição')), timeout)
      )
    ]);
  };

  // Função para buscar cursos da API
  const fetchCursos = async () => {
    try {
      setError(null);

      console.log('Buscando cursos da API...');
      console.log(`URL: ${API_CONFIG.baseUrl}${API_CONFIG.endpoints.cursos}`);

      const response = await fetchWithTimeout(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.cursos}`,
        {
          method: 'GET',
          headers: API_CONFIG.headers,
        },
        API_CONFIG.timeout
      );

      console.log('Status da resposta:', response.status);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data.length, 'itens');

      // Validação dos dados recebidos
      if (!Array.isArray(data)) {
        throw new Error('Formato de dados inválido - esperado array');
      }

      if (data.length === 0) {
        throw new Error('Nenhum curso encontrado na API');
      }

      // Mapear dados da API para o formato esperado pelo app
      const cursosFormatados = data.slice(0, 10).map((item, index) => ({
        id: item.id || index,
        // Adapte estes campos conforme sua API:
        name: item.title || item.name || item.titulo || item.nome || `Curso ${index + 1}`,
        link: item.link || item.url || `https://exemplo.com/curso/${item.id}`,
        description: item.body || item.description || item.descricao,
        category: item.category || item.categoria || 'Geral',
        // Adicione outros campos conforme necessário
      }));

      console.log('Cursos formatados:', cursosFormatados.length);
      setCursosData(cursosFormatados);

    } catch (err) {
      console.error('Erro ao buscar cursos:', err);
      setError(err.message);

      // Em caso de erro, você pode usar dados de fallback (opcional)
      setCursosData([
        {
          id: 'offline-1',
          name: 'Curso de Exemplo (Modo Offline)',
          link: 'https://www.google.com',
          description: 'Este é um curso de exemplo quando a API não está disponível',
        }
      ]);
    }
  };

  // useEffect para carregar os cursos quando o componente monta
  useEffect(() => {
    loadCursos();
  }, []);

  // Função para carregar cursos (inicial)
  const loadCursos = async () => {
    setLoading(true);
    await fetchCursos();
    setLoading(false);
  };

  // Função para recarregar os cursos (retry)
  const handleRetry = () => {
    loadCursos();
  };

  // Função para pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCursos();
    setRefreshing(false);
  };

  // Função para lidar com cliques nos cursos
  const handleCoursePress = (courseName, courseLink) => {
    console.log(`Curso selecionado: ${courseName}`);
    console.log(`URL: ${courseLink}`);

    // Validação do link antes de abrir
    if (courseLink && courseLink !== '#' && courseLink.startsWith('http')) {
      Linking.openURL(courseLink).catch(err => {
        console.error('Erro ao abrir link:', err);
        Alert.alert('Erro', 'Não foi possível abrir o link do curso');
      });
    } else {
      Alert.alert('Aviso', 'Link do curso não disponível ou inválido');
    }
  };

  // Função para lidar com cliques nos ícones da navegação
  const handleIconPress = (iconName) => {
    const urls = {
      home: 'https://www.google.com',
      trophy: 'https://www.google.com',
      profile: 'https://www.google.com'
    };

    if (urls[iconName]) {
      Linking.openURL(urls[iconName]);
    }
  };

  // Renderização condicional baseada no estado
  const renderContent = () => {
    if (loading) {
      return <LoadingComponent />;
    }

    if (error && cursosData.length === 0) {
      return (
        <ErrorComponent
          onRetry={handleRetry}
          errorMessage={error}
        />
      );
    }

    if (cursosData.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum curso encontrado</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>Recarregar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <CourseList
        courses={cursosData}
        onCoursePress={handleCoursePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#4ade80']}
            tintColor="#4ade80"
          />
        }
      >
        {/* Indicador de erro no topo se houver dados em cache */}
        {error && cursosData.length > 0 && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorBannerText}>
              Erro ao atualizar: {error}
            </Text>
          </View>
        )}

        {renderContent()}
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <IconComponent
          name="home"
          onPress={() => handleIconPress('home')}
        />
        <IconComponent
          name="trophy"
          onPress={() => handleIconPress('trophy')}
        />
        <IconComponent
          name="profile"
          onPress={() => handleIconPress('profile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#022415',
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 120,
  },
  courseContainer: {
    paddingHorizontal: 20,
  },
  courseCard: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  courseBackground: {
    height: 140,
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  courseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
  },
  courseLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  courseName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  // Estados de Loading, Erro e Vazio
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    color: '#4ade80',
    fontSize: 16,
    marginTop: 15,
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  errorTitle: {
    color: '#ef4444',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#f87171',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#4ade80',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  retryButtonText: {
    color: '#022415',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorBanner: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: '#ef4444',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  errorBannerText: {
    color: '#ef4444',
    fontSize: 14,
    textAlign: 'center',
  },

  // Padrões visuais (mantidos iguais)
  patternContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // Padrão Chip/Processador
  chipLine: {
    position: 'absolute',
    left: 15,
    right: 15,
    height: 2,
    borderRadius: 1,
  },
  chipProcessor: {
    position: 'absolute',
    top: 35,
    left: 50,
    width: 50,
    height: 50,
    borderRadius: 8,
    opacity: 0.6,
  },
  chipDot: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
  },

  // Padrão Servidor
  serverRack: {
    position: 'absolute',
    left: 25,
    right: 25,
    height: 12,
    borderRadius: 2,
  },
  serverLed: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
  },

  // Padrão Circuito
  circuitPath: {
    position: 'absolute',
    height: 2,
    borderRadius: 1,
  },
  circuitComponent: {
    position: 'absolute',
    width: 8,
    height: 12,
    borderRadius: 2,
  },
  circuitSolder: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },

  // Padrão Código
  codePattern: {
    position: 'absolute',
    top: 25,
    left: 20,
    right: 20,
  },
  codeLine: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  codeText: {
    fontSize: 11,
    fontFamily: 'monospace',
    opacity: 0.9,
  },

  // Padrão Geométrico
  geometricShape: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  triangleShape: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f87171',
    opacity: 0.6,
  },

  // Padrão Ondas
  waveShape: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 3,
    borderRadius: 20,
  },
  floatingCircle: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // Navegação inferior
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#022415',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: 'rgba(74, 222, 128, 0.2)',
  },

  // Ícones
  iconTouchable: {
    padding: 10,
  },
  iconBase: {
      width: 55,
      height: 55,
      borderRadius: 27.5,
      backgroundColor: '#4ade80',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#4ade80',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },

    // Ícone Home
    homeIcon: {
      width: 26,
      height: 26,
      position: 'relative',
    },
    homeRoof: {
      width: 0,
      height: 0,
      borderLeftWidth: 13,
      borderRightWidth: 13,
      borderBottomWidth: 12,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#022415',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    homeBody: {
      width: 18,
      height: 14,
      backgroundColor: '#022415',
      position: 'absolute',
      bottom: 0,
      left: 4,
    },
    homeDoor: {
      width: 6,
      height: 8,
      backgroundColor: '#4ade80',
      position: 'absolute',
      bottom: 0,
      left: 10,
    },

    // Ícone Troféu - DESIGN CLÁSSICO COMPLETO
    trophyIcon: {
      width: 30,
      height: 30,
      position: 'relative',
    },
    trophyCup: {
      width: 20,
      height: 16,
      backgroundColor: '#022415',
      position: 'absolute',
      top: 2,
      left: 5,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    },
    trophyLeftHandle: {
      position: 'absolute',
      top: 6,
      left: 0,
      width: 6,
      height: 10,
      borderWidth: 2,
      borderColor: '#022415',
      borderRightWidth: 0,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      backgroundColor: 'transparent',
    },
    trophyRightHandle: {
      position: 'absolute',
      top: 6,
      right: 0,
      width: 6,
      height: 10,
      borderWidth: 2,
      borderColor: '#022415',
      borderLeftWidth: 0,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      backgroundColor: 'transparent',
    },
    trophyStem: {
      width: 4,
      height: 8,
      backgroundColor: '#022415',
      position: 'absolute',
      bottom: 4,
      left: 13,
      borderRadius: 2,
    },
    trophyBase: {
      width: 24,
      height: 4,
      backgroundColor: '#022415',
      borderRadius: 2,
      position: 'absolute',
      bottom: 0,
      left: 3,
    },
    trophyTopDetail: {
      width: 16,
      height: 2,
      backgroundColor: '#4ade80',
      borderRadius: 1,
      position: 'absolute',
      top: 5,
      left: 7,
      opacity: 0.8,
    },
    trophyMiddleDetail: {
      width: 18,
      height: 2,
      backgroundColor: '#4ade80',
      borderRadius: 1,
      position: 'absolute',
      top: 12,
      left: 6,
      opacity: 0.6,
    },

    // Ícone Profile
    profileIcon: {
      width: 26,
      height: 26,
      position: 'relative',
    },
    profileHead: {
      width: 12,
      height: 12,
      backgroundColor: '#022415',
      borderRadius: 6,
      position: 'absolute',
      top: 0,
      left: 7,
    },
    profileBody: {
      width: 18,
      height: 12,
      backgroundColor: '#022415',
      borderRadius: 9,
      position: 'absolute',
      bottom: 2,
      left: 4,
    },
  });

  export default App;