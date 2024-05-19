import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './StyleSuco';

/*

1º https://panelinha.com.br/receita/hamburguer-de-patinho
2º https://www.saboresajinomoto.com.br/receita/strogonoff-de-frango-delicia
3º https://www.maeterra.com.br/receitas/suco-de-limao-siciliano-com-manjericao.html
4º https://www.estadao.com.br/paladar/receita/bife-wellington-como-fazer-o-classico-em-casa-a-prova-de-erro/

*/

function Strogonoff({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Suco de Limão</Text>
        <Image source={require('../../../assets/sucodelimonation.jpg')} style={styles.image}></Image>
        <Text style={styles.subtitulo}>Ingredientes</Text>
        <Text style={styles.ingredientes}>
          - 2 limão siciliano {'\n'}
          - 3 xícaras de chá de água {'\n'}
          - 1 colher de sopa de açúcar demerara Mãe Terra {'\n'}
          - 10 folhas de manjericão fresco {'\n'}
          - cubos de gelo {'\n'}

        </Text>
        <Text style={styles.subtitulo}>Modo de Preparo</Text>

        <Text style={styles.mododeprepare}>
          1. Corte as cascas dos limões sicilianos e reserve. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Esprema os limões siciliano e misture ou bata com água e o açúcar demerara Mãe Terra.{'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Divida em dois copos e coloque as folhas de manjericão, os cubos de gelo e decore com as cascas do limão.{'\n'}
        </Text>

        <View style={styles.viewbotoes}>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Strogonoff')}>
            <Text style={styles.textbottoM}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textsair} onPress={() => navigation.navigate('StackNavigation')}>
            <Text style={styles.textbottoM}> Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Bife')}>
            <Text style={styles.textbottoM}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Strogonoff;
