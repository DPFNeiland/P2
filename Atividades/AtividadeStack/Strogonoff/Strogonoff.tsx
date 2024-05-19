import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './StyleStrogonoff';

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
        <Text style={styles.titulo}>Strogonoff de Frango</Text>
        <Image source={require('../../../assets/strogonoffdefrango.jpg')} style={styles.image}></Image>
        <Text style={styles.subtitulo}>Ingredientes</Text>
        <Text style={styles.ingredientes}>
          - 1 colher (sopa) de Azeite de Oliva Extra Virgem TERRANO® {'\n'}
          - 1 dente de alho espremido {'\n'}
          - 1 cebola pequena picada (100 g) {'\n'}
          - 1 peito de frango pequeno, cortado em iscas (400 g) {'\n'}
          - 1 sachê de Tempero SAZÓN® Verde {'\n'}
          - 1 pitada de sal {'\n'}
          - 1 colher (sopa) de ketchup {'\n'}
          - 1 colher (sopa) de mostarda {'\n'}
          - 1 xícara (chá) de polpa de tomate (200 g) {'\n'}
          - 1 vidro pequeno de cogumelos em conserva, em lâminas, escorrido (100 g) {'\n'}
          - 1 lata de creme de leite (300 g) {'\n'}

        </Text>
        <Text style={styles.subtitulo}>Modo de Preparo</Text>

        <Text style={styles.mododeprepare}>
          1. Em uma panela média, coloque o Azeite TERRANO® e leve ao fogo alto para aquecer. Junte o alho e a cebola, e refogue por 1 minuto, ou até o alho começar a dourar. Acrescente o frango, o Tempero SAZÓN® e o sal, e frite por 6 minutos, mexendo de vez em quando, ou até dourar o frango por todos os lados.{'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          2. Adicione o ketchup, a mostarda, a polpa de tomate e o cogumelo, e misture. Junte o creme de leite, mexa e cozinhe por 2 minutos, ou até começar a levantar fervura. {'\n'}
        </Text>
        <Text style={styles.mododeprepare}>
          3. Retire do fogo e sirva em seguida. {'\n'}
        </Text>
       
        <View style={styles.viewbotoes}>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Hamburguer')}>
            <Text style={styles.textbottoM}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textsair} onPress={() => navigation.navigate('StackNavigation')}>
            <Text style={styles.textbottoM}> Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchablestyle} onPress={() => navigation.navigate('Suco')}>
            <Text style={styles.textbottoM}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Strogonoff;
