import { useEffect, useState } from "react";
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function Home() {

  const [game, setGame] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGame( game: GameCardProps ){
    navigation.navigate('game', game);
  }

  useEffect(() =>{
    fetch('http://192.168.10.19:3333/games')
    .then( response => response.json())
    .then( data => {
      setGame(data)
    })
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
          data={game}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}        
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}

        />        
      </SafeAreaView>
    </Background>
  );
}