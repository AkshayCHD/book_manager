export const PRIMARY_COLOR = "#2196f3";
export const SECONDARY_COLOR = "#ea8f8f";

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
    },
    card: {
        width: 300,
        height: 100,
        margin: 5,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#00E5FF' 
    }
})
