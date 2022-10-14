import { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import { styles } from './styles';

import { GameParams } from "../../@types/navigation";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { Heading } from "../../components/Heading";
import { DuoMatch } from "../../components/DuoMatch";

import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";



export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const game =  route.params as GameParams;

  function handleGoBack(){
    navigation.goBack();
  } 

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.10.12:3333/ads/${adsId}/discord`)
    .then( response => response.json())
    .then( data => setDiscordDuoSelected(data));
  }

  useEffect(() =>{
    fetch(`http://192.168.10.12:3333/games/${game.id}/ads`)
    .then( response => response.json())
    .then( data => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleGoBack}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right}/>
        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={styles.bannerUrl}
          resizeMode="cover"
        />
        
        <Heading
          title={game.title}
          subtitle= "Conecte-se e comece a jogar"
        />

        <FlatList
          style={styles.containerList}
          contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyTextContent}
          data={duos}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <DuoCard 
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          ListEmptyComponent={()=>(
            <Text style={styles.emptyText}>
              Não há anúncios publicados ainda
            </Text>
          )}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />        
      </SafeAreaView>
    </Background>
  );
}