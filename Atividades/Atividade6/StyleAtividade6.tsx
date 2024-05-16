import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    texto:{
        fontSize: 32,
        color: 'black',
        marginTop: 10,
        backgroundColor: '#d3d3d3'
    },

    textoB: {
        color: 'white',
        fontSize: 20
    },
    
    botaoMais:{
        backgroundColor: '#008860',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    
    botaoMenos:{
        backgroundColor: '#ff007f',
        padding: 10,
        margin: 5,
        borderRadius: 5
    }
});

export default styles;