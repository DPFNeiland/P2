import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, Clipboard } from "react-native";
import styles from "./StyleAtividade7";

const Atividade7 = () => {
    const [num, setNum] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState<number | string>('');
    const [historico, setHistorico] = useState<string[]>([]);

    const handleSub = () => {
        const sub = parseFloat(num) - parseFloat(num2);
        setResultado(sub);
        setHistorico([...historico, `${num} - ${num2} = ${sub}`]);
    };

    const handleSom = () => {
        const som = parseFloat(num) + parseFloat(num2);
        setResultado(som);
        setHistorico([...historico, `${num} + ${num2} = ${som}`]);
    };

    const handleMult = () => {
        const mult = parseFloat(num) * parseFloat(num2);
        setResultado(mult);
        setHistorico([...historico, `${num} * ${num2} = ${mult}`]);
    };

    const handleDiv = () => {
        if (parseFloat(num2) !== 0) {
            const div = parseFloat(num) / parseFloat(num2);
            setResultado(div);
            setHistorico([...historico, `${num} / ${num2} = ${div}`]);
        } else {
            setResultado("Erro: Divisão por zero");
        }
    };
    
    const handleClear = () => {
        setNum('');
        setNum2('');
        setResultado('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                onChangeText={setNum}
                value={num}
                keyboardType="numeric"
                placeholder="Digite o primeiro número"
            />

            <TextInput
                style={styles.text}
                onChangeText={setNum2}
                value={num2}
                keyboardType="numeric"
                placeholder="Digite o segundo número"
            />

            <View style={styles.container2}>
                <TouchableOpacity onPress={handleSub}>
                    <Text style={styles.buttons}>Subtrair</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSom}>
                    <Text style={styles.buttons}>Somar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMult}>
                    <Text style={styles.buttons}>Multiplicar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleDiv}>
                    <Text style={styles.button_div}>Dividir</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClear}>
                    <Text style={styles.buttons}>Limpar</Text>
                </TouchableOpacity>

            </View>

            <Text style={{ fontSize: 20, color: resultado === "Erro: Divisão por zero" ? 'red' : 'green' }}>
                {resultado}
            </Text>

            <View>
                {historico.map((item, index) => (
                    <Text key={index} style={styles.historicoItem}>{item}</Text>
                ))}
            </View>
        </View>
    );
}

export default Atividade7;
