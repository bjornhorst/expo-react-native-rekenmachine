import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    outputContainer: {
        flex:3,
        backgroundColor: 'black',
    },
    inputContainer: {
        flex:7,
        backgroundColor: '#3e606f',
    },
    inputButtonText:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    inputButton:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
});

export default styles