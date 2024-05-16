import React from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from '../CardBottom/StyleCardBottom';

type InfoCardBottom = {
    text?: string,
    value?: number
    bgColor:string
}



export function CardBottom({text='Não informado', value=0, bgColor}:InfoCardBottom) {
    return (
    <Pressable style={[styles.container, {backgroundColor: bgColor}]}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.value}>${value}</Text>
    </Pressable>
  );
}

