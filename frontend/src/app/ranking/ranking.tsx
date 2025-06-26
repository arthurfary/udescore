import React from 'react';
import { View, Text, Image, TouchableHighlight, FlatList } from 'react-native';
import useRanking from './ranking.hook';
import styles from './ranking.styles';

export interface RankingProps {}

interface RankItem {
  position: number;
  name: string;
  xp: number;
  image: any;
}

const Ranking: React.FC<RankingProps> = () => {
  const {rankings, data} = useRanking();
  const renderRankItem = ({ item } : { item: RankItem }) => {
    const getColorByPosition = (position: number) => {
      switch (position) {
        case 1:
          return "#FFD700"; 
        case 2:
          return "#C0C0C0"; 
        case 3:
          return "#CD7F32"; 
        default:
          return "#FFFFFF"; 
      }
    };

    const positionColor = getColorByPosition(item.position);
    const nameColor = getColorByPosition(item.position); 
    const xpColor = getColorByPosition(item.position);   

    return (
      <View style={styles.rankItem}>
        <Image
          //source={require("../../../assets/medal.png")}
          //style={styles.medal}
        />
        <Text style={[styles.position, { color: positionColor }]}>
          {item.position}
        </Text>
        <Image
          source={item.image}
          style={styles.userImage}
        />
        <Text style={[styles.name, { color: nameColor }]}>{item.name}</Text>
        <Text style={[styles.xp, { color: xpColor }]}>{item.xp} XP</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking</Text>
      <FlatList
        data={data}
        renderItem={renderRankItem}
        keyExtractor={(item) => item.position.toString()}
        style={{ flex: 1}}
      />
      <View style={styles.bottomNav}>
        <TouchableHighlight style={styles.navButton}>
        <Image 
          source={require("../../../assets/home.png")}
          style={styles.navIcon}
        />
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}>
          <Image
            source={require("../../../assets/trophy.png")}
            style={styles.navIcon}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.navButton}>
          <Image
            source={require("../../../assets/profile.png")}
            style={styles.navIcon}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Ranking;
