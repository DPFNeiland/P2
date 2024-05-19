import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './StyleHamburguer';

/*

1º https://panelinha.com.br/receita/hamburguer-de-patinho
2º https://www.saboresajinomoto.com.br/receita/strogonoff-de-frango-delicia
3º https://www.maeterra.com.br/receitas/suco-de-limao-siciliano-com-manjericao.html
4º https://www.estadao.com.br/paladar/receita/bife-wellington-como-fazer-o-classico-em-casa-a-prova-de-erro/

*/

function Hamburguer({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Hamburguer</Text>
        <Image source={require('../../../assets/hamburguer.jpeg')} style={styles.image}></Image>
        <Text style={styles.subtitulo}>Ingredientes</Text>
        <Text style={styles.ingredientes}>
          - 720 g de patinho moído {'\n'}
          - 2 colheres (sopa) de água {'\n'}
          - 2 colheres (sopa) de azeite {'\n'}
          - sal e pimenta-do-reino moída na hora a gosto {'\n'}

        </Text>
        <Text style={styles.subtitulo}>Modo de Preparo</Text>

        <Text style={styles.mododeprepare}>
          1. Numa tigela, coloque a carne, a água, o azeite e misture rapidamente com as mãos. Não tempere com sal. Divida em 4 bolas (180 g cada) e modele os hambúrgueres: achate cada uma, coloque sobre a tábua e vá acertando as laterais, empurrando para dentro com as mãos – a ideia é formar uma paredinha reta para que o hambúrguer fique alto. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Com o polegar, faça uma marca bem no meio de cada hambúrguer – quando cozinha, a carne infla e, sem a marca, o hambúrguer pode ficar curvado. Se não for preparar os hambúrgueres na hora, leve para a geladeira – a carne deve estar bem fria na hora de ir para a frigideira. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Leve uma frigideira grande e de preferência antiaderente ao fogo médio. Caso não tenha uma grande, use duas frigideiras ou prepare em etapas, retirando os dois primeiros hambúrgueres 2 minutos antes do tempo e transferindo para o forno pré-aquecido em temperatura média – assim eles terminam de cozinhar enquanto você prepara os outros dois. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          4. Espalhe azeite na superfície dos hambúrgueres e tempere com sal e pimenta a gosto. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          5. Quando a frigideira estiver bem quente, coloque quantos hambúrgueres couberem de uma só vez, um ao lado do outro. Deixe dourar por 1 minuto e vire. Para um hambúrguer mal passado, deixe 4 minutos no total, virando de minuto em minuto. Para um hambúrguer ao ponto, são 6 minutos no total. Sirva a seguir. {'\n'}
        </Text>

        <View style={styles.viewbotoes}>
          <TouchableOpacity style={styles.touchablestyle}>
            <Text style={styles.textbottoM} onPress={() => navigation.navigate('Bife')}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textsair} onPress={() => navigation.navigate('StackNavigation')}>
            <Text style={styles.textbottoM}> Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Strogonoff')}>
            <Text style={styles.textbottoM}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Hamburguer;
