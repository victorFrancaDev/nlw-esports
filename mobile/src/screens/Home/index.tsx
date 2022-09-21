import { View, Image, FlatList } from 'react-native';

import logoImg from "../../assets/logo-nlw-esports.png";

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from "../../components/Heading";

import { GAMES } from "../../utils/games";

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title='Encontre seu Duo'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}        
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
      />
      
    </View>
  );
}