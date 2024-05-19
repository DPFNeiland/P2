import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './StyleBife';

/*

1º https://panelinha.com.br/receita/hamburguer-de-patinho
2º https://www.saboresajinomoto.com.br/receita/strogonoff-de-frango-delicia
3º https://www.maeterra.com.br/receitas/suco-de-limao-siciliano-com-manjericao.html
4º https://www.estadao.com.br/paladar/receita/bife-wellington-como-fazer-o-classico-em-casa-a-prova-de-erro/

*/

function Bife({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Bife Wellington</Text>
        <Image source={require('../../../assets/bifeweilignton.jpeg')} style={styles.image}></Image>
        <Text style={styles.subtitulo}>Ingredientes</Text>
        <Text style={styles.ingredientes}>
          - 400 g de filé mignon limpo {'\n'}
          - 400 g de cogumelos frescosvariados {'\n'}
          - 2 dentes de alho {'\n'}
          - 5 ramos de tomilho {'\n'}
          - 3 colheres (sopa) de uísque (opcional) {'\n'}
          - 30 g de mostarda de Dijon {'\n'}
          - 10 fatias de presunto cru {'\n'}
          - 2 colheres (sopa) de azeite {'\n'}
          - 2 colheres (sopa) de manteiga {'\n'}
          - Sal a gosto {'\n'}
          - Pimenta-do-reino moída na hora {'\n'}
          - 1 gema {'\n'}
          - 1 rolo de massa folhada grande {'\n'}
          - Flor de sal {'\n'}

        </Text>
        <Text style={styles.subtitulo}>Modo de Preparo</Text>

        <Text style={styles.subtitulo2}>Duxelle (pasta de cogumelos)</Text>
        <Text style={styles.mododeprepare}>
          1. Pique muito bem ou processe os cogumelos. Pique os dentes de alho. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Aqueça uma frigideira com um fio de azeite e uma colher (sopa) de manteiga. Junte os cogumelos e o alho. Tempere com sal, pimenta moída na hora e folhas de tomilho. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Refogue, mexendo de vez em quando, até secar toda a água dos cogumelos. Adicione o uísque, espere evaporar por completo. A pasta deve ficar bem seca. Transfira para uma vasilha e reserve na geladeira. {'\n'}
        </Text>


        <Text style={styles.subtitulo2}>Carne</Text>
        <Text style={styles.mododeprepare}>
          1. Seque o filé em temperatura ambiente com um papel-toalha e tempere toda a superfície da carne com sal, pimenta-do-reino moída na hora e um fio de azeite. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Aqueça uma frigideira com um fio de óleo e uma colher (sopa) de manteiga, até começar a sair fumaça. Com a frigideira bem quente, doure muito bem todos os lados da carne, inclusive as laterais. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Transfira a carne para um prato e pincele imediatamente a mostarda por todos os lados. Reserve. {'\n'}
        </Text>


        <Text style={styles.subtitulo2}>Finalização</Text>
        <Text style={styles.mododeprepare}>
          1. Abra um papel-filme um pouco maior que o tamanho da carne, deixando sobrar nas laterais. Disponha sobre o filme as fatias de presunto cru lado a lado em duas fileiras, sobrepondo as fatias, deixando sobrar um pouco nas laterais e no comprimento (em relação ao tamanho da carne). {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Com uma espátula, ou as mãos, passe a pasta de cogumelos delicadamente sobre todo o presunto, de maneira uniforme. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Posicione a carne resfriada no centro e delicadamente enrole, com ajuda do papel-filme, até formar um pacote. Aperte ligeiramente ao enrolar para a carne firmar com o recheio. Nesta hora, você definirá o formato da carne. Pressione bem o rolo com ajuda da lateral do papel-filme. Deixe descansar na geladeira por, no mínimo, 40 minutos. Pode ficar até o dia seguinte. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          4. Abra a massa folhada com ajuda de um rolo sobre um papel-filme. A massa deve ficar aproximadamente com meio centímetro de espessura. Ajuste o tamanho da massa em relação ao tamanho da carne, deixando sobrar um pouco nas laterais. Corte as pontas. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          5. Retire com cuidado a carne do filme plástico, posicione na parte de baixo da massa, deixando alguns centímetros de sobra. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          6. Pincele as laterais da massa em volta da carne com a gema batida. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          7. Com ajuda do papel-filme, enrole a carne na massa (fazendo um pacote), pressionando levemente para dentro, para a carne ficar firme na massa. Corte os excessos de massa (tente não sobrepor muita massa, para um acabamento mais delicado). Com os dedos, feche as laterais da massa. Leve à geladeira por, no mínimo, 1 hora. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          8. Preaqueça o forno a 200°C. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          9. Coloque o rolinho em uma assadeira untada com azeite, com a emenda virada para baixo. Pincele com a gema batida e, se quiser, faça desenhos na massa com a parte de trás de uma faca, polvilhe flocos de flor de sal e folhinhas de tomilho. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          10. Leve para assar por aproximadamente 30 minutos. Até a massa dourar. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          11. Retire a assadeira do forno, espere cerca de 10 minutos. Em seguida, corte com delicadeza fatias de 1,5 cm e sirva. {'\n'}
        </Text>

        <View style={styles.viewbotoes}>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Suco')}>
            <Text style={styles.textbottoM}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textsair} onPress={() => navigation.navigate('StackNavigation')}>
            <Text style={styles.textbottoM}> Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Hamburguer')}>
            <Text style={styles.textbottoM}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Bife