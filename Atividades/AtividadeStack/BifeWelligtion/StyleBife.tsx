import { StyleSheet, View } from "react-native";

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#dcdcdc',
        gap: 15,
        padding: 20
    },

    card: {
        width: '90%',
        height: '20%',
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 12,
        borderRadius: 5,
    },

    titulo: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: 'bold',
    },

    subtitulo: {
        fontSize: 28,
        fontWeight: 'bold',

    },

    subtitulo2: {
        fontSize: 25,
        fontWeight: 'bold',     
    },

    ingredientes: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    Descricao: {
        fontSize: 13,
        width: '15%'
    },


    image: {
        height: 300,
        width: 400,
    },

    mododeprepare: {
        fontSize: 22

    },

    viewbotoes: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    textbottoM: {
        fontSize: 25,
        color: 'white'
    },

    textsair: {
        backgroundColor: '#808080',
        height: 50,
        width: 150,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    touchablestyle: {
        backgroundColor: '#808080',
        height: 50,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center'
    }


})