import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./StyleAtividade6";

const Atividade6 = () => {

    const [num, setNum] = useState(0);
    const handleDiminuir = () => {
               
        if(num == 0){
            setNum(0);
        } else {
            setNum(num - 1);
        }
    };

    const handleAumentar = () => {
        setNum(num + 1);
    }

    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.botaoMenos}
                onPress={handleDiminuir}
            >
            
            <Text style={styles.textoB}>-1</Text>

            </TouchableOpacity>
            
            <Text style={styles.texto}>{num}</Text>
            
            <TouchableOpacity
                style={styles.botaoMais}
                onPress={handleAumentar}
            >

            <Text style={styles.textoB}>+1</Text>
           
            </TouchableOpacity>
        </View>
    );
}
export default Atividade6;