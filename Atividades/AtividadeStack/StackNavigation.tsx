import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './StyleStackNavigation';

/*

1º https://panelinha.com.br/receita/hamburguer-de-patinho
2º https://www.saboresajinomoto.com.br/receita/strogonoff-de-frango-delicia
3º https://www.maeterra.com.br/receitas/suco-de-limao-siciliano-com-manjericao.html
4º

*/

function StackNavigation({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hamburguer')}>
        <Image source={require('../../assets/hamburguer.jpeg')} style={styles.image}></Image>
        <View>
          <Text style={styles.titulo}>Hamburguer</Text>
          <Text style={styles.Descricao}>Carne moída quando se junta, bem juntinho mesmo, vira essa delícia que é o hambúrguer. Na versão mais clássica, vai para o pão, com queijo derretido. Mas também funciona servido no prato, com uma boa salada, no jantar de dia de semana.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Strogonoff')} >
        <Image source={require('../../assets/strogonoffdefrango.jpg')} style={styles.image}></Image>
        <View>
          <Text style={styles.titulo}>Strogonoff de Frango</Text>
          <Text style={styles.Descricao}>O strogonoff de frango está na lista dos pratos mais amados e aclamados entre os brasileiros. Com um tempero único e uma suculência sem igual, essa receita é uma ótima opção tanto para o dia a dia quanto para ocasiões especiais, como um almoço de domingo em família ou um jantar divertido com os amigos.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Suco')}>
        <Image source={require('../../assets/sucodelimonation.jpg')} style={styles.image}></Image>
        <View>
          <Text style={styles.titulo}>Suco de Limão Siciliano</Text>
          <Text style={styles.Descricao}>Que tal um suco refrescante e muito leve para o verão? O limão siciliano é uma fruta aromática e tem o gosto mais suave, e a combinação com o manjericão funciona super bem, é uma bebida perfeita para tomar com muito gelo na beira da piscina. Aprenda o passo a passo e se apaixone por essa mistura!</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bife')}>
        <Image source={require('../../assets/bifeweilignton.jpeg')} style={styles.image}></Image>
        <View>
          <Text style={styles.titulo}>Bife Wellington</Text>
          <Text style={styles.Descricao}>A receita é uma das mais intimidantes e um dos grandes desafios da cozinha – não por menos, é sempre estrela dos desafios dos realities culinários, já que tem todos os quesitos para atrapalhar o cozinheiro.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default StackNavigation;
