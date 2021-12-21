import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    titel: {
        textAlign: 'center',
        paddingTop: 80,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 25,
        // paddingHorizontal: 10,
        backgroundColor: '#ffff',
        marginBottom: 17,

    },
    btnText: {
        color: '#404040',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },

    input: {
        borderWidth: 2,
        borderColor: '#777',
        marginBottom: 30,
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 22,
    },
    icon: {
        borderWidth: 1.5,
        borderRadius: 50,
        width: 50,
        padding: 10,
        alignSelf: 'center',



    }
});