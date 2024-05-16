
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './StyleIconCard';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

type DadosIcon = {
    icone: string,
    corIcone: string,
    texto: string
    corBackground: string
    onpress: () => void
}

const IconCard = ({ icone, corIcone, texto, corBackground, onpress }: DadosIcon) => {
    return (
        <Pressable onPress={onpress} style={[styles.container, styles.border]}>
            <View style={[styles.bg, { backgroundColor: `${corBackground}` }]}>
                <Icons name={icone} size={30} color={corIcone} />
            </View>
            <Text>{texto}</Text>
        </Pressable>
    );
}
export default IconCard;