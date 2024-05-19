import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dcdcdc',
        gap: 15
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    Descricao: {
        fontSize: 13,
        width: '15%'
    },


    image: {
        height: '80%',
        width: '25%',
        margin: 10
    }




})