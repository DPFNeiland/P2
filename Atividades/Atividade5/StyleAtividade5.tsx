import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },

    layout1: {
        height: 450,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#131047',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10
    },

    layout2: {
        height: 200,
        width: '100%',
        flexDirection: 'column',
        marginTop: 210,
        backgroundColor: '#131047',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10
    },

    texto1: {
        color: '#fff',
        fontSize: 20,
        margin: 10
    },

    texto2: {
        color: '#fff',
        fontSize: 30,
    },

    input: {
        fontSize: 15,
        padding: 10,
        width: 300,
        borderRadius: 15,
        backgroundColor: '#f1f1f1',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 20,
    },

    circle: {
        backgroundColor: '#88ff',
        borderRadius: 300,
        height: 300,
        width: 300,
        alignSelf: "center"
    },

    view2: {
        alignItems: 'center',
        width: "100%",
        height: "100%",

    },

    texto3: {
        fontSize: 40,
        color: "black"
    }
});

export default styles;